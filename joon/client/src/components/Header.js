import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//icon
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <Container>
      <MenuIcon />
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt=""
      />
      <button>
        <Link to="/login">login</Link>
      </button>
      <Link to="/upload">upload</Link>
      <SearchIcon />
      <Input type="text" />
      <VideoCallIcon />
      <AppsIcon></AppsIcon>
    </Container>
  );
}

export default Header;

const Container = styled.div``;
const Img = styled.img``;
const Input = styled.input``;
