import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './errorBoundary';
import { AppProvider, AppContext } from './context';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import BottomNav from './components/bottomNav';

import Dashboard from './p/dashboard';
import GitHub from './p/github';
import Delete from './p/delete';
import Home from './p/home';
import Menu from './p/menu';
import View from './p/view';
import Edit from './p/edit';
import New from './p/new';
import NotFound from './p/notFound';

class App extends Component {
	static contextType = AppContext;

	componentDidMount() {
		this.context.openDB('notesDB', 1)
			.then((db) => this.context.setDB(db))
			.then(() => {
				this.context.getAllNotes()
					.then((notes) => {
						this.context.setAllNotes(notes);
					})
			})
	}

	render() {
		return (
			<HashRouter>
				<Header />

				<main className="grow min-h-0 flex flex-col gap-4 max-w-xl w-full px-4 py-4 mx-auto overflow-y-auto bg-gray-900 text-gray-200">
					<Switch>
						<Route path="/edit/:padId" component={Edit} />
						<Route path="/view/:padId" component={View} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/github" component={GitHub} />
						<Route exact path="/delete" component={Delete} />
						<Route exact path="/new" component={New} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</main>

				<BottomNav />
			</HashRouter>
		);
	}
}

ReactDOM.render(
	<ErrorBoundary>
		<AppProvider>
			<App />
		</AppProvider>
	</ErrorBoundary>,
	document.getElementById('react-app')
);