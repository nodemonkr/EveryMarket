import { Link } from "react-router-dom";

//컴포넌트
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../components/HomeScreen";

//css
import styled from "styled-components";

const Home = () => {
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
