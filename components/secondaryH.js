import React, { Component } from 'react';

class SecondaryH extends Component {
	render() {
		const { text } = this.props;
		return (
			<h2 className="text-xl font-extrabold text-gray-200 pl-2 border-l-4 border-blue-400 tracking-tight">
				{text}
			</h2>
		);
	}
}

export default SecondaryH;