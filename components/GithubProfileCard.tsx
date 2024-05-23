import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="github-section section-lg   shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Get in Touch!</h2>
              <p className="lead text-white mt-3">I am currently exploring exciting new opportunities and eagerly anticipate receiving thoughtful messages in my inbox. Whether you have inquiries, potential job opportunities, or simply wish to connect, rest assured, I will respond promptly and warmly!</p>
              <p className="text-white mt-3">{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-dark">
                <i className="ni ni-pin-3 text-danger mr-2" />
                {location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;