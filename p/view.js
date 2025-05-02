import React, { Component, Fragment } from "react";
import { AppContext } from '../context';
import { marked } from "marked";
import DOMPurify from "dompurify";

import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
import { purifyConfig } from '../components/someExtraStuff';
import IconLink from '../components/iconLink';
import IconButton from '../components/iconButton';

class View extends Component {
	static contextType = AppContext;

	componentDidMount() {
		const { padId } = this.props.match.params;
		this.getNoteToView(padId);
		console.log(padId);
	}

	componentDidUpdate(prevProps) {
		const { padId } = this.props.match.params;
		if (!this.context.activePad || padId !== prevProps.match.params.padId) {
			this.getNoteToView(padId);
		}
	}

	getNoteToView = async (noteId) => {
		try {
			const pad = await this.context.getNote(parseInt(noteId));

			if (pad) {
				this.context.setActivePad(pad);
				console.log(pad);
			} else {
				console.error("Pad not found");
			}
		} catch (error) {
			console.error("Error fetching pad:", error);
		}
	};

	getSanitizedHtml = () => {
		if (!this.context.activePad) return "";
		const rawHtml = marked.parse(this.context.activePad.content);
		const sanitizedHtml = DOMPurify.sanitize(rawHtml, purifyConfig);

		setTimeout(() => {
			hljs.highlightAll();
		}, 100);

		return sanitizedHtml;
	};

	printPad = () => {
		const divContent = document.getElementById("padContent").cloneNode(true);
		const win = window.open('', '', '');

		const doc = win.document;

		// Create the basic document structure
		doc.open();

		const html = doc.createElement('html');
		html.lang = "en";

		const head = doc.createElement('head');

		const metaCharset = doc.createElement('meta');
		metaCharset.setAttribute('charset', 'UTF-8');

		const metaViewport = doc.createElement('meta');
		metaViewport.setAttribute('name', 'viewport');
		metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

		const metaIE = doc.createElement('meta');
		metaIE.setAttribute('http-equiv', 'X-UA-Compatible');
		metaIE.setAttribute('content', 'ie=edge');

		const title = doc.createElement('title');
		title.textContent = this.context.activePad.name;

		const link = doc.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', './app.css');

		head.appendChild(metaCharset);
		head.appendChild(metaViewport);
		head.appendChild(metaIE);
		head.appendChild(title);
		head.appendChild(link);

		const body = doc.createElement('body');

		// Add cloned pad content
		body.appendChild(divContent);

		// Add note info
		const infoPara = doc.createElement('p');
		infoPara.style.fontSize = '6px';
		infoPara.style.marginLeft = '10px';
		infoPara.style.opacity = '0.5';
		infoPara.innerHTML = `Pad Name: ${this.context.activePad.name}<br/>Created: ${this.context.activePad.createdAt}<br/>Last Updated: ${this.context.activePad.updatedAt}`;
		body.appendChild(infoPara);

		// Add print script
		const printScript = doc.createElement('script');
		printScript.textContent = 'window.print();';
		body.appendChild(printScript);

		html.appendChild(head);
		html.appendChild(body);
		doc.appendChild(html);
	};

	render() {
		if (!this.context.activePad) {
			return (
				<div className="w-full grow flex items-center justify-center">
					<Loader />
				</div>
			)
		}

		return (
			<Fragment>
				<div className="flex justify-between items-center gap-2 pb-3 border-b border-gray-700">
					<SecondaryH text={this.context.activePad.name} />
					<div className="flex gap-3">
						<IconLink icon="fas fa-edit" link={`/edit/${this.context.activePad.id}`} />
						<IconButton icon="fas fa-print" handler={this.printPad} />
					</div>
				</div>
				
				<div id="padContent" className="text-gray-200">
					<div dangerouslySetInnerHTML={{ __html: this.getSanitizedHtml() }} />
				</div>
			</Fragment>
		);
	}
}

export default View;