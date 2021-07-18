import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <button>
        <Link to="/login">login</Link>
      </button>
      <button>
        <Link to="/upload">upload</Link>
      </button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;

  border-bottom: 1px solid lightgray;
`;
