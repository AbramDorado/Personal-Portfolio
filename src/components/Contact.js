// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMobile, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const yourInformation = {
    name: 'Abram Dorado',
    number: '+63 9604434798',
    email: 'doradobam@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abramdorado',
    github: 'https://www.github.com/AbramDorado',
    resume: 'https://drive.google.com/drive/folders/1VCZRMu_ViVQ4AD-b9LCEEPQ7eVNdmRRI?usp=sharing',
    // Add other fields if needed
  };

  const linkStyle = {
    color: '#db74eb', // Set your desired link color here
    textDecoration: 'underline', // Optional: Add underline for better visibility
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-4">Get in touch</h2>
                  <Row className="mb-3">
                    <Col className="d-flex align-items-center">
                      <FaMobile style={{ marginRight: '8px' }} />
                      <p className="contact-info mb-0"><strong>Number:</strong> {yourInformation.number}</p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="d-flex align-items-center">
                      <FaEnvelope style={{ marginRight: '8px' }}/>
                      <p className="contact-info mb-0"><strong>Email:</strong> {yourInformation.email}</p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="d-flex align-items-center">
                      <FaLinkedin style={{ marginRight: '8px' }}/>
                      <p className="contact-info mb-0"><strong>LinkedIn:</strong> <a href={yourInformation.linkedIn} target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn Profile</a></p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="d-flex align-items-center">
                      <FaGithub style={{ marginRight: '8px' }}/>
                      <p className="contact-info mb-0"><strong>Github:</strong> <a href={yourInformation.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>Github Profile</a></p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="d-flex align-items-center">
                      <FaFilePdf style={{ marginRight: '8px' }}/>
                      <p className="contact-info mb-0"><strong>Resume:</strong> <a href={yourInformation.resume} target="_blank" rel="noopener noreferrer" style={linkStyle}>View Resume</a></p>
                    </Col>
                  </Row>
                  {/* Add other fields in separate rows if needed */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
