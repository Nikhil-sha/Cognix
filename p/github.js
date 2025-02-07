import React, { Component } from 'react';

class GitHub extends Component {
	render() {
		return (
			<div className="h-full w-full flex flex-col justify-center items-center gap-5 bg-gray-800 rounded-xl">
				<i className="fab fa-github text-7xl text-gray-600"></i>
				
				<h2 className="text-xl font-extrabold">GitHub Repository</h2>
				
				<a href="https://github.com/Nikhil-sha/Cognix" className="px-4 py-2 bg-blue-500 rounded-xl text-base font-semibold hover:bg-blue-700">
					<i className="fas fa-arrow-up-right-from-square mr-2"></i>View
				</a>
			</div>
		);
	}
}

export default GitHub;