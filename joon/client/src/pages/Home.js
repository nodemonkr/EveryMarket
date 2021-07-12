import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";

//Logo
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div>
      <Avatar image={Logo} />
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
