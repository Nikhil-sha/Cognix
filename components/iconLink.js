import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IconLink extends Component {
	render() {
		const { icon, link } = this.props;
		return (
			<Link
				to={link}
				className="size-10 flex-shrink-0 flex justify-center items-center bg-gray-800 text-gray-400 border border-gray-700 
				hover:border-blue-400 hover:text-blue-400 
				rounded-xl transition-all duration-300"
			>
				<i className={`${icon} text-xl`}></i>
			</Link>
		);
	}
}

export default IconLink;