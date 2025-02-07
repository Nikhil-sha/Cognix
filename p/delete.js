import React, { Component, Fragment } from 'react';
import { AppContext } from '../context';

import PrimaryH from '../components/primaryH';
import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
import ListItem from '../components/listItem';

class Delete extends Component {
	static contextType = AppContext;

	render() {
		const { allNotes } = this.context;

		if (!allNotes) {
			return (
				<div className="w-full grow flex items-center justify-center">
					<Loader />
				</div>
			)
		}

		return (
			<Fragment>
				<SecondaryH text="Saved Pads" />

				<div className="flex flex-col gap-4">
					{allNotes.length > 0 ? allNotes.map((pad, index) => (
						<ListItem
							key={index}
							id={pad.id}
							name={pad.name}
							createdAt={pad.createdAt}
							updatedAt={pad.updatedAt} 
						/>
					)) : (
						<div className="w-full h-96 flex flex-col justify-center items-center text-center text-gray-400">
							<i className="fas fa-smile text-6xl text-gray-500 drop-shadow-lg mb-4 animate-pulse" style={{animationDuration: "3.5s"}}></i>
							<p className="text-lg font-bold text-cyan-500">Nothing to delete!</p>
							<p className="text-sm text-gray-600 mt-2">Start by creating some.</p>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}

export default Delete;