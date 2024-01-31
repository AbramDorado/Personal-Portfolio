import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const linkStyle = {
    color: '#db74eb', // Set your desired link color here
    textDecoration: 'underline', // Optional: Add underline for better visibility
  };

  const projects = [
    {
      title: <a href="https://github.com/AbramDorado/Code-Blue" target="_blank" rel="noopener noreferrer" style={linkStyle}>enCode: Electronic Resuscitation Record</a>,
      description: "Software Engineering: PHP Laravel, PostgreSQL, Railway, Git",
      imgUrl: projImg1,
    },
    {
      title: <a href="https://github.com/AbramDorado/RATS-Registration-and-Advising-Tracking_System" target="_blank" rel="noopener noreferrer" style={linkStyle}>(RATS) Registration and Advising Tracking System</a>,
      description: " Software Engineering, UI/UX: VueJS, ExpressJS, PostgreSQL, Railway, Git",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://github.com/AbramDorado/Detection-of-Prostate-Cancer" target="_blank" rel="noopener noreferrer" style={linkStyle}>Detection of Prostate Cancer</a>,
      description: " Machine Learning: Python, Google Colab, Kaggle",
      imgUrl: projImg3,
    },
    {
      title: <a href="https://github.com/AbramDorado/Enrollment-System" target="_blank" rel="noopener noreferrer" style={linkStyle}>Enrollment System</a>,
      description: " Web Application, UI/UX, DBMS: PHP Laravel, PostgreSQL",
      imgUrl: projImg4,
    },
    {
      title: <a href="https://github.com/AbramDorado/Shopping-Website" target="_blank" rel="noopener noreferrer" style={linkStyle}>Online Shopping Website</a>,
      description: " Web Application, UI/UX, DBMS: ReactJS, HTML, CSS, Sprint Boot, PostgreSQL",
      imgUrl: projImg5,
    },
    {
      title: <a href="https://github.com/AbramDorado/Restaurant-Ordering-System" target="_blank" rel="noopener noreferrer" style={linkStyle}>Restaurant Ordering System</a>,
      description: "Application, UI/UX: Java, JavaFX",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have a proven track record of successfully building, developing, and enhancing several web applications and projects. 
                  The following represents a selection of my most notable works, all of which were collaborative efforts with my dedicated team. 
                  Together, we have delivered impactful solutions and contributed to the success of each project. These experiences have honed my skills in project management, teamwork, and technical expertise, making me well-equipped to take on new challenges in the field of web development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects coming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
