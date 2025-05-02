import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IconLink extends Component {
	render() {
		const { icon, link } = this.props;
		return (
			<Link
				to={link}
				className="size-10 flex-shrink-0 flex justify-center items-center text-gray-400 
				hover:bg-gray-800 hover:text-blue-400 
				rounded-xl transition-all duration-300"
			>
				<i className={`${icon} text-xl`}></i>
			</Link>
		);
	}
}

export default IconLink;