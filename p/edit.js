import React, { Component, Fragment, createRef } from 'react';
import { AppContext } from '../context';

import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
import IconButton from '../components/iconButton';

class Edit extends Component {
	static contextType = AppContext;

	padName = createRef();
	padContent = createRef();

	componentDidMount() {
		const { padId } = this.props.match.params;
		this.getNoteToEdit(padId);
		console.log(padId);
	}
	
	componentDidUpdate(prevProps) {
		const { padId } = this.props.match.params;
		if (!this.context.activePad || padId !== prevProps.match.params.padId) {
			this.getNoteToEdit(padId);
		}
	}

	getNoteToEdit = async (noteId) => {
		try {
			const pad = await this.context.getNote(parseInt(noteId));

			if (pad) {
				this.context.setActivePad(pad);
				this.padName.current.value = pad.name;
				this.padContent.current.value = pad.content;
				console.log(pad);
			} else {
				console.error("Pad not found");
			}
		} catch (error) {
			console.error("Error fetching pad:", error);
		}
	};

	saveChanges = () => {
		let snippet = this.padContent.current.value.slice(0, 80) + "...";
		const updates = { name: this.padName.current.value, content: this.padContent.current.value, snippet };
		this.context.updateNote(this.context.activePad.id, updates);
	};

	render() {
		if (this.context.activePad === null) {
			return (
				<div className="w-full grow flex items-center justify-center">
					<Loader />
				</div>
			)
		}

		return (
			<Fragment>
				<SecondaryH text="Edit Pad" />

				<div className="w-full flex items-center gap-2">
					<input ref={this.padName} placeholder="Pad name" type="text" className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500 transition-all duration-300" />
					<IconButton handler={this.saveChanges} icon="fas fa-save" />
				</div>

				<textarea
					ref={this.padContent}
					placeholder="Write something..."
					className="grow w-full px-4 py-3 text-gray-300 bg-gray-800 
					border border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 
					focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500 
					transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-600 
					scrollbar-track-transparent"
				></textarea>
			</Fragment>
		);
	}
}

export default Edit;