import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact'

class Navbar extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		collapse: false,
		isWideEnough: false,
	  };
	  this.onClick = this.onClick.bind(this);
	}
  
	onClick() {
	  this.setState({
		collapse: !this.state.collapse,
	  });
	}

	render() {
		return (
			<header>
				<MDBNavbar color="black" fixed="" dark expand="md">
					<MDBContainer>
						<MDBNavbarBrand href="/">
						<strong>The Aladeen Experiment</strong>
						</MDBNavbarBrand>
						<MDBNavbarToggler onClick={this.onClick} />
						<MDBCollapse isOpen={this.state.collapse} navbar>
						<MDBNavbarNav left>
							<MDBNavItem active>
							<MDBNavLink to="/">Home</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
							<MDBNavLink to="/jup">JUP</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
							</MDBNavItem>
						</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
			</header>
		)
	}
}

export default Navbar;
