import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

//axios
import Axios from "axios";

//Pages
import Home from "./pages/Home";
//styled components
import { StyledContainer } from "./components/Styles";
//loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
