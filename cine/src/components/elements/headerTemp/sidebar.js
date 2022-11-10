import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';  
function Sidebar() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container>
          <Nav>
          <Nav.Link href="http://localhost:3002/dash">Cineaste</Nav.Link> 
       
            </Nav>  
        

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
               
               
            </Nav>  
            <Nav>  
              <Nav.Link href="http://localhost:3001/">Watchlist</Nav.Link> 
              <Nav.Link href="http://localhost:3004/">Recommendation</Nav.Link> 
             </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  );  
}  
export default Sidebar; 