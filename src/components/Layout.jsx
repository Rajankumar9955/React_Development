

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const box1={
    backgroundColor:"gray",
    borderRadius:"5%",
    
  
    
}


import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Container >
         <Navbar expand="lg" className="bg-body-black" style={box1}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: '100px', fontSize:"20px"}}
            navbarScroll >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
         </Nav>
          <Form className="d-flex"><Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-warning" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </Container>

      <div>
        <Outlet/>
      </div>

      <div>
        <div>
           
        </div>
      </div>
        </>
    )
}
export default Layout;