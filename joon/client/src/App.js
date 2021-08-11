import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import "./_app.scss";

//bootstrap
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
