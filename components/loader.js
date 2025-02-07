import React, { Component } from 'react';

class Loader extends Component {
	render() {
		return (
			<div className="relative h-2 w-64 rounded-full border border-gray-700">
				<div className="absolute w-0 blur-md h-full bg-blue-400 animate-[progress_0.8s_ease-in-out_infinite] rounded-full"></div>
				<div className="absolute w-0 h-full bg-blue-600 animate-[progress_0.8s_ease-in-out_infinite] rounded-full"></div>
			</div>
		);
	}
}

export default Loader;