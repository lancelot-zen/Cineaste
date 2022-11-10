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
import divyansh from './TEAM/DIVS.jpg';

function Team() {
  return (
    <>
    <div style={{backgroundColor:"black", color:"white"}}>

      <section class="team text-center py-5">
        <div class="container">
          <div class="header my-5">
            
              <h1>Meet our Team </h1>
            <p class="text-muted">Meet and Greet our Team Members</p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                <img
                  src="./TEAM/DIVS.jpg"
                  class="img-fluid  img-thumbnail rounded-circle"
                  alt="image1"
                />
                <div class="content mt-2">
                  <h4>Prakhar Mishra</h4>
                  <p class="text-muted">Quantum Mechanics Expert</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 ">
              <div class="img-block mb-5">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg"
                  class="img-fluid  img-thumbnail rounded-circle"
                  alt="image1"
                />
                <div class="content mt-2">
                  <h4>Mihir Ojha</h4>
                  <p class="text-muted">Ghost of Sparta</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                  class="img-fluid  img-thumbnail rounded-circle"
                  alt="image1"
                />
                <div class="content mt-2">
                  <h4>Divyansh Gangwar</h4>
                  <p class="text-muted">Secret Member</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg"
                  class="img-fluid  img-thumbnail rounded-circle"
                  alt="image1"
                />
                <div class="content mt-2">
                  <h4>Piyush Patel</h4>
                  <p class="text-muted">Machine Learning Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    
    </>
  );
}

export default Team;
