import React, { Component, Fragment, createRef } from 'react';
import { AppContext } from '../context';

import { defaultPadContent, defaultPadSnippet } from '../components/someExtraStuff';

import SecondaryH from '../components/secondaryH';

class New extends Component {
	static contextType = AppContext;

	name = createRef();

	addNoteToDataBase = () => {
		this.context.addNote(this.name.current.value, defaultPadSnippet, defaultPadContent);
		this.props.history.push('/dashboard');
	};

	render() {
		return (
			<Fragment>
				<SecondaryH text="New Pad" />
				<input ref={this.name} type="text" placeholder="Pad name" className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition-all duration-300" />
				<button onClick={this.addNoteToDataBase} className="w-full px-4 py-2 flex items-center justify-center gap-2 text-gray-200 bg-blue-500 rounded-md font-semibold border border-blue-500 transition-all duration-300 hover:bg-blue-400">
					<i className="fas fa-plus mr-1"></i>Create New Pad
				</button>
			</Fragment>
		);
	}
}

export default New;