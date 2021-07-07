import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//Pages
import Home from "./pages/Home";
//styled components
import { StyledContainer } from "./components/Styles";

//loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledContainer>
        {/* <Login /> */}
        <Signup />
      </StyledContainer>
    </Router>
  );
}

export default App;
