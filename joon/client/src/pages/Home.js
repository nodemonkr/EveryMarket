import { Link } from "react-router-dom";
import React, { useEffect } from "react";

//컴포넌트
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../components/HomeScreen";

//css
import styled from "styled-components";
import axios from "../../../server/node_modules/axios";

const Home = () => {
  // useEffect() => {
  //   axios.get("")
  // }

  return (
    <div>
      <Header></Header>
      <Body>
        <Sidebar></Sidebar>
        <HomeScreen></HomeScreen>
      </Body>
    </div>
  );
};

export default Home;

const Body = styled.div`
  display: flex;
`;
