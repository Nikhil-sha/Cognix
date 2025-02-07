import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

import SecondaryH from '../components/secondaryH.js';

class Menu extends Component {
	static contextType = AppContext;

	render() {
		const menuOptions = [
			{ icon: "fa-home", label: "Home", to: "/" },
			{ icon: "fa-folder", label: "Dashboard", to: "/dashboard" },
			{ icon: "fa-plus", label: "Create New Pad", to: "/new" },
			{ icon: "fa-edit", label: "Edit Pad", to: `/edit/${this.context.activePad ? this.context.activePad.id : 0}` },
			{ icon: "fa-trash", label: "Delete Pads", to: "/delete" }
		];

		return (
			<Fragment>
				<SecondaryH text="Menu" />
				
				<div className="flex flex-col gap-3">
					{menuOptions.map((option, index) => (
						<Link 
							to={option.to} 
							key={index} 
							className="group bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 transition-all hover:border-blue-400 hover:text-blue-400 hover:scale-[1.02] flex items-center gap-2"
						>
							<i className={`fas ${option.icon} text-xl`}></i>
							<span className="text-gray-300">
								{option.label}
							</span>
						</Link>
					))}
				</div>
			</Fragment>
		);
	}
}

export default Menu;