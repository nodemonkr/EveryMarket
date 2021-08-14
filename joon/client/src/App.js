import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import LoginScreen from "./components/screens/loginScreen/LoginScreen";
import "./_app.scss";

//bootstrap
import { Container } from "react-bootstrap";

function App() {
  //menu 버튼 클릭시 토글버튼 작동 구현
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    // <>
    //   <Header handleToggleSidebar={handleToggleSidebar} />
    //   <div className="app__container">
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    //     <Container fluid className="app__main">
    //       <HomeScreen />
    //     </Container>
    //   </div>
    // </>
    <LoginScreen />
  );
}

export default App;
