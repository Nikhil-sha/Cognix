import React, { Component } from 'react';
import IconLink from './IconLink';

class Header extends Component {
	render() {
		return (
			<header className="w-full border-b border-gray-800 bg-gray-900">
				<div className="max-w-xl flex justify-between items-center px-4 py-3 mx-auto">
					<IconLink icon="fas fa-home" link="/" />
					<h1 className="text-2xl font-extrabold text-gray-200">
						Cognix
					</h1>
					<IconLink icon="fab fa-github" link="/github" />
				</div>
			</header>
		);
	}
}

export default Header;