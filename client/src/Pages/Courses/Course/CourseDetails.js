import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, img, description, rating, time, price } = course;
  const ref = React.createRef();

  return (
    <div>
      <div
        ref={ref}
        className="d-flex align-items-center justify-content-center my-4"
      >
        <Card style={{ width: "300px" }}>
          <Card.Img style={{ width: "300px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              {id} . {name}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex align-items-center justify-content-between">
            <small className="text-muted">Rating: {rating}</small>
            <small className="text-muted">Price: {price}</small>
            <small className="text-muted">Duration: {time}</small>
          </Card.Footer>
          <Link to={`/checkout/${id}`}>
            <Button className="w-100" variant="success">
              Get Premium Access
            </Button>
          </Link>
        </Card>
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <Pdf targetRef={ref} filename="courseDetails.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Download pdf</Button>}
        </Pdf>
      </div>
    </div>
  );
};

export default CourseDetails;
