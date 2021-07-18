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
      {/* navbar입니다 */}
      <Header></Header>
      {/* navbar끝 */}
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
