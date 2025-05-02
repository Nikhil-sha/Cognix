import React, { Component } from 'react';

class IconButton extends Component {
	render() {
		const { icon, handler } = this.props;
		return (
			<button 
				onClick={handler} 
				className="size-10 flex-shrink-0 flex justify-center items-center text-gray-400 
				hover:bg-gray-800 hover:text-blue-400 
				rounded-xl transition-all duration-300"
			>
				<i className={`${icon} text-xl`}></i>
			</button>
		);
	}
}

export default IconButton;