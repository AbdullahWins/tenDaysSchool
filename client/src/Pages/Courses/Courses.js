import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course/Course";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "../Shared/Nav/Nav";
import { Col } from "react-bootstrap";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <Container>
      <Row>
        <Col className="d-none d-lg-block" lg="3">
          <Nav></Nav>
        </Col>
        <Col lg="9" className="d-flex flex-wrap">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
