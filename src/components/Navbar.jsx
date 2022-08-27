import React from 'react';

// For NavBar //
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Zeotap Intelligent Mapping System</Navbar.Brand>
				<Nav className="me-right">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBar;
