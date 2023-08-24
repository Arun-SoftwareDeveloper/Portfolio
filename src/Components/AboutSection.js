import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"; // Assuming you're using Bootstrap
import "../Styles/AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container" id="about">
      <Container>
        <Row className="about-header">
          <Col xs={12} sm={6} className="text-white">
            <h1 className="font-weight-bold con">Education</h1>
          </Col>
        </Row>

        <Row className="about-content">
          <Col xs={12} md={6} className="mt-4">
            <Card className="special">
              <CardBody>
                <CardTitle tag="h5" className="education-title">
                  BSC, Information Technology
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Devanga Arts and Science College
                </CardSubtitle>
                <p className="duration">
                  <span className="education-year"></span>2019 - 2022
                </p>
                <p className="description">Scored 7.5 CGPA.</p>
                <p>Excelled in problem-solving and programming.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
