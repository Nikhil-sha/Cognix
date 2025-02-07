import React, { Component } from 'react';

class PrimaryH extends Component {
	render() {
		const { text } = this.props;
		return (
			<h1 className="text-3xl font-bold text-gray-100 tracking-tight border-b border-gray-700 pb-3 mb-5">
				{text}
			</h1>
		);
	}
}

export default PrimaryH;