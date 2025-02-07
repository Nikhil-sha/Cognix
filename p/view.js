import React, { Component, Fragment } from "react";
import { AppContext } from '../context';
import { marked } from "marked";
import DOMPurify from "dompurify";

import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
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
		return DOMPurify.sanitize(rawHtml);
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
						<IconButton icon="fas fa-print" handler={() => alert("Feature coming soon!")} />
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