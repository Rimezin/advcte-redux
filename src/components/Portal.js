import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Portal(props) {
  const { setToast } = props;

  React.useEffect(() => {
    setToast({
      show: true,
      title: "Hello Portal",
      message: "Showing on portal page!",
    });
  }, [setToast]);

  return (
    <Container className="w-100">
      {/* Header */}
      <Row>
        <Col>col1</Col>
        <Col>col2</Col>
        <Col>col3</Col>
      </Row>

      {/* Main Content Section */}
      <Row>
        <Col xs>col1</Col>
        <Col xs>col2</Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col xs>col1</Col>
        <Col xs>col2</Col>
      </Row>
    </Container>
  );
}
