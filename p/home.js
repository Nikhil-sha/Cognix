import React, { Component, Fragment } from "react";

import SecondaryH from '../components/secondaryH';
import Loader from '../components/loader';
import IconLink from '../components/iconLink';
import IconButton from '../components/iconButton';

class Home extends Component {

	goto = (path) => {
		this.props.history.push(path);
	};

	render() {
		return (
			<Fragment>
				<section className="flex flex-col justify-center items-center gap-5 my-10">
					<h1 className="text-4xl font-extrabold text-center">Your minimalist <span className="text-cyan-400">Note-taking</span> webapp</h1>
					
					<p className="text-base text-gray-400 leading-tight text-center">Capture, organize, and access your notes effortlessly with Cognix.</p>
					
					<div className="flex justify-center items-center gap-3">
						<button onClick={() => this.goto('/dashboard')} className="px-4 py-3 text-base text-gray-100 font-semibold bg-blue-500 hover:bg-blue-700 transition rounded-lg">
							Get Started
						</button>
						
						<button onClick={() => this.goto('/new')} className="px-4 py-3 text-base text-gray-100 font-semibold bg-gray-900 hover:bg-gray-600 transition rounded-lg">
							<i className="fas fa-plus mr-2"></i>Create New Pad
						</button>
					</div>
				</section>
				
				<section className="mt-8">
					<h2 className="text-xl font-extrabold">Explore some key features</h2>
					
					<div className="mt-5 flex flex-col gap-4">
						<div className="w-full px-5 py-4 bg-gray-800 rounded-xl hover:bg-cyan-900 transition duration-500">
							<p className="text-sm text-gray-300">
								<strong className="text-gray-200">Blazing Fast</strong><br />
								Stores your notes locally using IndexedDB, your browser’s built-in database. No servers, no delays—just your ideas, uninterrupted.
							</p>
						</div>
						<div className="w-full px-5 py-4 bg-gray-800 rounded-xl hover:bg-cyan-900 transition duration-500">
							<p className="text-sm text-gray-300">
								<strong className="text-gray-200">Minimalist UI</strong><br />
								A clean and distraction-free interface designed to help you focus on your content.
							</p>
						</div>
						<div className="w-full px-5 py-4 bg-gray-800 rounded-xl hover:bg-cyan-900 transition duration-500">
							<p className="text-sm text-gray-300">
								<strong className="text-gray-200">Markdown Support</strong><br />
								Format your notes effortlessly with built-in Markdown support for a structured, beautiful layout.
							</p>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

export default Home;