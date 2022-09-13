import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useCourseDetails from "../../../hooks/useCourseDetails/useCourseDetails";

const CourseDetails = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);
  return (
    <Container >
      <h1 style={{textTransform:'uppercase', fontWeight:'bolder', fontSize:'60px'}}>{course.category}</h1>
      <Row className="text-start">
        <Col>
          <img
            className="img-fluid"
            alt=""
            src={course.image}
            style={{ height: "500px" }}
          />
        </Col>
        <Col>
          <Card>
            <Card.Header style={{textTransform:'uppercase', fontWeight:'bold'}} as="h4">{course.name}</Card.Header>
            <h6 className="rating"><Rating 
            defaultValue={5}
            fullSymbol="fas fa-star"
          /><br/><small>based on 129 reviews</small></h6>
          
          <hr />
            <Card.Body>
                <Card.Title>Price: 
                {course.price} BDT
              </Card.Title>
              <Card.Text>
                {course.description}
              </Card.Text>
              <Card.Title>
                What we provide?
              </Card.Title>
              <ul>
                  <li>24 hours customer support</li>
                  <li>Team of 4 peoples will work on your project</li>
                  <li>Immediate solution to your problem </li>
                  <li>Commitment to deliver your project on time</li>
                </ul>
              <Link to={`/checkOut/${serviceId}`}>
              <Button variant="danger">Order Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;