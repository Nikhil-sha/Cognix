import React, { Component } from 'react';

class IconButton extends Component {
	render() {
		const { icon, handler } = this.props;
		return (
			<button 
				onClick={handler} 
				className="size-10 flex-shrink-0 flex justify-center items-center bg-gray-800 text-gray-400 border border-gray-700 
				hover:border-blue-400 hover:text-blue-400 
				rounded-xl transition-all duration-300"
			>
				<i className={`${icon} text-xl`}></i>
			</button>
		);
	}
}

export default IconButton;