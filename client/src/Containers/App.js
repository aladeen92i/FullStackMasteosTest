import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './Game'
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
						<Route path="/jup">
							<Game />
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
