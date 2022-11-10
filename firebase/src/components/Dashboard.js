import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import NavScrollExample from "../Header/navbar";
import { Container } from "react-bootstrap";
import Team from "../Header/team";

export default function Dashboard() {
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
    <>
      <NavScrollExample />

      <Team />
      {/* <Card style > 
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Hello : </strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card> */}
      
    </>
  );
}
