// container/AboutMe.tsx
import React from 'react';
import AboutMeCard from '../components/AboutMeCard';
import { aboutMeInfo } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';


const AboutMe: React.FC = () => {
  return (
    aboutMeInfo && (
      <Col className="order-lg-1" lg="10"  md={{ size: 14, offset: 1 }}>
        <section className="section pb-0 my-5">
          
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-light shadow rounded-circle text-">
                  <i className="ni ni-single-02 text-dark" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-black">About Me</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {aboutMeInfo.map((info, index) => (
                     <div key={index}>
                  <AboutMeCard {...info} />
                  </div>
              ))}
            </Row>
          </Container>
          
        </section>
        </Col>
      
    )
  );
};

export default AboutMe;
