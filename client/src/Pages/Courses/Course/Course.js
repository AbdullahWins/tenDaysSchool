import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const img = course.img;
  return (
    <Col>
      <Card className="Col m-2" style={{ width: "18rem", height: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text className="d-flex align-items-center justify-content-around">
            <>Rating: {course.rating}</> <>Duration: {course.time}</>
          </Card.Text>
        </Card.Body>
        <Link to={`/courses/${course.id}`}>
          <Button
            className="position-absolute bottom-0 w-100"
            variant="primary"
          >
            Learn More
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default Course;
