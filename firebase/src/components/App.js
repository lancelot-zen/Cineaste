import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import NavScrollExample from "../Header/navbar";

import Home from "./Home";
import Team from "../Header/team";
const home = () => {
  return (
    <Switch>
      <Route path="/team" component={Team} />
      <Route path="/Home" component={Home} />
    </Switch>
  );
};

const LogIn = () => {
  return (
    <AuthProvider>
      <Switch>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          {" "}
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </div>
        </Container>
      </Switch>
    </AuthProvider>
  );
};

const Auth = () => {
  return (
    <AuthProvider>
      <PrivateRoute path="/" component={Dashboard} />
    </AuthProvider>
  );
};
function App() {
  return (
    <Router>
      <Route path="/home" component={home} />
      <Route path="/login" component={LogIn} />
      <Route path="/dash" component={Auth} />
    </Router>
  );
}

export default App;
