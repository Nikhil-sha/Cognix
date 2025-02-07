import React, { Component } from 'react';
import { AppContext } from '../context';

import IconButton from './IconButton';

class ListItem extends Component {
	static contextType = AppContext;

	deleteThis = () => {
		const { id } = this.props;
		const { deleteNote } = this.context;

		const confirmation = confirm("Do you really want to delete this pad?");
		if (confirmation) {
			deleteNote(id);
		}
	};

	render() {
		const { id, name, createdAt } = this.props;
		return (
			<div className="w-full flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 transition-all
				hover:border-blue-400 hover:scale-[1.02]">
				
				{/* Item Name */}
				<div className="grow min-w-0">
					<h3 className="text-lg font-semibold text-gray-200 truncate">
						{name}
					</h3>
					<span className="text-xs text-gray-400">{createdAt.toLocaleString()}</span>
				</div>

				{/* Delete Button */}
				<IconButton icon="fas fa-trash" handler={this.deleteThis} />
			</div>
		);
	}
}

export default ListItem;