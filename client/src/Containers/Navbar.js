import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<ul className="navbar-container">
					<li>
						<Link className="navbar-brand" to="/">
          The Aladeen Experiment
						</Link>
					</li>
					<li>
						<Link className="navbar-item" to="/jup">
              JUP
						</Link>
					</li>
					<li>
						<Link className="navbar-item" to="/login">
            Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
 
export default Navbar