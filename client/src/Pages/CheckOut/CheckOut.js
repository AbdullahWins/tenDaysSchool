import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const course = useLoaderData();
  const { name, img, rating, price } = course;

  const handlePurchase = () =>
    toast.success("Purchase Completed Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="text-center my-4">
      <h2>CheckOut Page</h2>
      <div className="d-flex align-items-center justify-content-center my-4">
        <Card style={{ width: "300px" }}>
          <Card.Img style={{ width: "300px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>You Selected: {name}</Card.Title>
            <Card.Text>Price: {price} tk only!</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted text-center">Rating: {rating}</small>
          </Card.Footer>
          <Button
            onClick={handlePurchase}
            className="w-100"
            variant="outline-success"
          >
            Confirm Payment
          </Button>
        </Card>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default CheckOut;
