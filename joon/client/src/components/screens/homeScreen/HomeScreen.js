import React from "react";
import CategoriesBar from "../../categoriesBar/CategoriesBar";
import Video from "../../video/Video";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
