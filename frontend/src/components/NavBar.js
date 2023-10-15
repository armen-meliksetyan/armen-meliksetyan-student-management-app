import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'><img style={{ width: 150 }} src="https://tumo.org/wp-content/uploads/2018/02/ENG003_Stroke-Black-H55px-2.png"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="mr-auto">
                <Nav.Link href='/'>List</Nav.Link>
                <Nav.Link href='/add'>Add Student</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default NavBar;