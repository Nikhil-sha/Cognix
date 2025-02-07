import React, { Component } from 'react';
import IconLink from './IconLink';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context';

class BottomNav extends Component {
	static contextType = AppContext;

	render() {
		const { location } = this.props;
		const items = [
			{ icon: "fa-folder", to: "/dashboard" },
			{ icon: "fa-edit", to: `/edit/${this.context.activePad ? this.context.activePad.id : 0}` },
			{ icon: "fa-plus", to: "/new" },
			{ icon: "fa-trash", to: "/delete" },
			{ icon: "fa-bars", to: "/menu" }
		];

		return (
			<footer className="w-full border-t border-gray-800 bg-gray-900">
				<div className="max-w-xl flex justify-between items-center px-4 py-3 mx-auto">
					{items.map((item, index) => (
						<IconLink 
							key={index} 
							icon={`fas ${item.icon} ${location.pathname === item.to ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400`} 
							link={item.to} 
						/>
					))}
				</div>
			</footer>
		);
	}
}

export default withRouter(BottomNav);