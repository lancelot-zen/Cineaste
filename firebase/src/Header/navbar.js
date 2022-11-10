import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import test from "./test";
import {LinkContainer} from 'react-router-bootstrap';

function NavScrollExample() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Cineaste</Link>{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 mx-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="../components/Home.js">Watchlist</Nav.Link> */}
            <Button variant="link" >
            <a href="http://localhost:3003/">Home</a>
            </Button>
           
            
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          
           
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
