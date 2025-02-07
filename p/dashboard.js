import React, { Component, Fragment } from 'react';
import { AppContext } from '../context';

import PrimaryH from '../components/primaryH';
import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
import Card from '../components/card';

class Dashboard extends Component {
	static contextType = AppContext;

	componentDidMount() {}

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
				<SecondaryH text="Your Pads" />
				
				<div className={`grid grid-cols-1 ${allNotes.length > 0 ? "md:grid-cols-2 lg:grid-cols-3" : ""} gap-4`}>
					{allNotes.length > 0 ? allNotes.map((pad, index) => (
						<Card key={index} id={pad.id} name={pad.name} snippet={pad.snippet} createdAt={pad.createdAt} updatedAt={pad.updatedAt} />
					)) : (
						<div className="w-full h-96 flex flex-col justify-center items-center">
							<i className="fas fa-user-secret text-6xl text-gray-500 mb-4 animate-pulse" style={{animationDuration: "3.5s"}}></i>
							<p className="text-lg font-bold text-cyan-500">It's empty here!</p>
							<p className="text-sm text-gray-600 mt-2">Go and create some pads.</p>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;