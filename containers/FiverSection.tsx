import React from "react";
import FiverrCard from "../components/FiverrCard";
import { Container, Row, Col } from "reactstrap";
import { fiverrInfo } from "../portfolio";


// OPTIONAL: you can define info in portfolio.ts file or as this
// const fiverrInfo = {
//   name: "Mubashir Ali",
//   jobTitle: "Web Developer, Programmer & Bioinformatics Student",
//   description:
//     "I'm a multifaceted individual weaving code into artistry, shaping digital landscapes with precision and creativity. As a web developer, programmer, and bioinformatics student, I thrive at the intersection of technology and innovation, sculpting tomorrow's possibilities with every keystroke.",
//   url: "https://www.fiverr.com/mubashir183"
// };

const FiverrSection = () => {
  return (
    <section className="section pb-0 my-5">
      <Container>
        <div className="d-flex px-3">
          <div>
            <div className="icon icon-lg icon-shape bg-light shadow rounded-circle text-primary">
              <i className="ni ni-hat-3 text-dark" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-black">Fiverr Profile</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="6">
            <FiverrCard {...fiverrInfo} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FiverrSection;
