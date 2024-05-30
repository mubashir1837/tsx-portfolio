import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import { TypeAnimation } from "react-type-animation";

const AnimatedGreetingText = () => (
  <TypeAnimation
    sequence={[
      'Mubashir Ali',
      1000, 
      'Programmer',
      1000,
      'Web developer',
      1000,
      'Bioinformatician',
      1000
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
);

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, []);

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 greeting-bg">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 gradient-text">{greetings.title + " "}</h1>
                  <h1 className=" display-3  text-white gradient-text2 ">
                  <AnimatedGreetingText />
                  </h1>
                  <p className=" lead text-white ">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1 "
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text ">Download CV</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6" >
                  <GreetingLottie animationPath="/lottie/developer.json" />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
