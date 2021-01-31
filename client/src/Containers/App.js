import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from '../Components/Create'
import Game from './Game'
import BlogDetails from '../Components/BlogDetails'
import NotFound from '../Handlers/NotFound'


function App() {
	// ici nous gérons les routes de l'application
	return (
		<Router>
			<div className="App container">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/jup">
							<Game />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
