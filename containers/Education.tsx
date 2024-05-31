import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";


const Education = () => {
  return (
    educationInfo && (
      
        <section className="section pb-0  my-5 ">
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-light shadow rounded-circle text-">
                  <i className="ni ni-hat-3 text-dark" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-black">Education</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {educationInfo.map(info => {
                return (
                  <Col className="order-lg-1" lg="6" key={info.schoolName}>
                    <EducationCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
     
    )
  );
};

export default Education;
