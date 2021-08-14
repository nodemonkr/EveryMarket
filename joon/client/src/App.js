import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import LoginScreen from "./components/screens/loginScreen/LoginScreen";
import "./_app.scss";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

//bootstrap
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  //menu 버튼 클릭시 토글버튼 작동 구현
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}{" "}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/auth">
          <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search Results</h1>{" "}
          </Layout>
        </Route>

        {/* 잘못된 주소로 이동시 Redirect로 home으로 돌아갑니다. */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
