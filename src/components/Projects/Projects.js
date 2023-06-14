import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rental_bike from "../../Assets/Projects/rental_bike.png";
import swimato from "../../Assets/Projects/swimato.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swimato}
              isBlog={false}
              title="Swimato Food orderding"
              description="Full react based Web app, live Swiggy api integration to fetch restaurant data,  pay for it using integrated payment gateway
              Tech : ReactJS, ,HTML, CSS ,React Router"
              ghLink="https://github.com/rcramh/"
              demoLink="https://google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental_bike}
              isBlog={false}
              title="RentMyBike Web App"
              description="MERN stack based Web app, User can see, opt for renting a bike of his/her choice, pay for it using integrated payment gateway
              Tech : ReactJS, ,HTML, CSS ,React Router"
              ghLink="https://github.com/rcramh/"
              demoLink="https://google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Live Weather Forcast App"
              description="weather web app to get the current weather data"
              ghLink="https://github.com/rcramh/"
              demoLink="https://google.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
