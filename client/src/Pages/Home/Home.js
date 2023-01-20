import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <Carousel className=" w-75">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images4.alphacoders.com/587/587777.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.wallpaperscraft.com/image/single/mask_totem_smoke_192795_1920x1080.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1104629.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex flex-column align-items-center my-4">
        <h2>Be a part of our Journy!</h2>
        <p className="text-center">
          Start learning today! Introduction to Technology focuses on current
          and future technologies. This includes the study of the technological
          world with emphasis on organization, functions, occupations, special
          skills, safety, human relations, leadership, and evolving
          technologies. Technology provides students with easy-to-access
          information, accelerated learning, and fun opportunities to practice
          what they learn. It enables students to explore new subjects and
          deepen their understanding of difficult concepts, particularly in
          STEM.
        </p>
        <Link to="/register">
          <Button variant="primary">Join Now</Button>
        </Link>
      </div>
      <h2 className="text-center fs-4 mb-4">Our Teaching Partners</h2>
      <div className="d-flex align-items-conter justify-content-between">
        <Image
          style={{ width: "50px" }}
          src="https://www.nicepng.com/png/detail/222-2223595_udemy-logo-logo-udemy.png"
        ></Image>
        <Image
          style={{ width: "50px" }}
          src="https://qph.cf2.quoracdn.net/main-qimg-93b60fd5cf9888c96a1e02622806d561"
        ></Image>
        <Image
          style={{ width: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Khan_Academy_Logo_Old_version_2015.jpg/600px-Khan_Academy_Logo_Old_version_2015.jpg"
        ></Image>
        <Image
          style={{ width: "50px" }}
          src="https://i.pinimg.com/originals/ae/d9/60/aed960e1dd85f84950e9671b8290da42.png"
        ></Image>
        <Image
          style={{ width: "50px" }}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9e7f9b55691401.598ef2068c588.jpg"
        ></Image>
      </div>
    </Container>
  );
};

export default Home;
