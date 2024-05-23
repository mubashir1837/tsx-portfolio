import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

// Assuming `feedbacks` is exported from "../portfolio"
import { feedbacks } from "../portfolio";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={2000}>
        <section className="section section-lg ">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-light shadow rounded-circle text-dark">
                  <i className="fa fa-star text-dark" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-dark">Clients</h4>
              </div>
            </div>
            <Row className="g-3 ">
              {/* Map over `feedbacks` only if it's not null or undefined */}
              {feedbacks.map((data, i) => (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;
