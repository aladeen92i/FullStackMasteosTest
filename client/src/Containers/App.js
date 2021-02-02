import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './Game'
import NotFound from '../Handlers/NotFound'

function App() {
	return (
		<Router>					
			<Navbar />
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
		</Router>
	)
}

export default App
