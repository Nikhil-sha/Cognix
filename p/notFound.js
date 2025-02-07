import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<div className="h-full w-full flex flex-col justify-center items-center bg-gray-800 rounded-xl">
				{/* 404 Error Title */}
				<h2 className="text-6xl font-extrabold text-gray-600 mb-4">
					404
				</h2>
				
				{/* Resource Not Found Message */}
				<p className="text-lg font-semibold text-gray-200 mb-6">
					Resource Not Found!
				</p>

				{/* Optional suggestion to go back */}
				<Link
					to="/"
					className="text-sm font-medium text-cyan-400 hover:text-cyan-500 hover:underline transition-all duration-300"
				>
					Go back to Homepage
				</Link>
			</div>
		);
	}
}

export default NotFound;