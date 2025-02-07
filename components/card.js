import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
	render() {
		const { id, name, snippet, createdAt, updatedAt } = this.props;
		return (
			<Link to={`/view/${id}`} className="group block w-full">
				<div className="bg-gray-800 border border-gray-700 rounded-xl p-4 transition-all 
					hover:border-blue-400 hover:scale-[1.02] overflow-hidden">

					{/* Card Title */}
					<h3 className="text-lg font-semibold text-gray-200 mb-1">
						{name}
					</h3>

					{/* Snippet */}
					<p className="text-sm text-gray-500 line-clamp-2 mb-2">
						{snippet}
					</p>
					
					{/* Timestamps */}
					<div className="w-full flex justify-between text-xs text-gray-400">
						<span>{createdAt.toLocaleString()}</span>
						<span>{updatedAt.toLocaleString()}</span>
					</div>
				</div>
			</Link>
		);
	}
}

export default Card;