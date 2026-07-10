import { Row, Col, Container } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import './Footer.css'
function Footer() {
    return (
        <>
            <div className=" p-5" style={{ backgroundColor: "#FF8811" }}>
                <Container >
                    <Row className="text-light fw-normal" style={{ fontSize: "14px" }}>
                        <Col >
                            <b>About</b>
                            <p className="fw-normal">
                                As big problems require bigger and better solutions, SBA introduce MySBA (Digital Platform) to the youth of India. To create awareness and inspire them to take up challenges, face their fears, and make a difference in their surroundings. To help them shape the path they choose for themselves.

                            </p>
                            <div >
                                <span className="p-2 rounded icons" >
                                    <FaFacebookF />
                                </span>
                                <span className="p-2 rounded mx-3 icons" >
                                    <FaInstagram />
                                </span>
                                <span className="p-2 rounded icons" >
                                    <FaYoutube />
                                </span>
                                  <span className="p-2 rounded mx-3 icons" >
                                    <FaWhatsapp />
                                </span>
                            </div>
                        </Col>
                        <Col>
                            <b>Useful Links</b>
                            <p>
                                <ul className="list-unstyled ">
                                    <li >
                                        <FaChevronRight className="me-2 fs-8" />
                                        Services/Product Offer
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Terms & Conditions
                                    </li>
                                    <li className="my-2">
                                        <FaChevronRight className="me-2 fs-8" />
                                        Privacy Policy
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Shipping/Delivery Policy
                                    </li>
                                    <li className="my-2">
                                        <FaChevronRight className="me-2 fs-8" />
                                        Refund & Cancellation Policy
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Customer Support
                                    </li>
                                    <li className="my-2">
                                        <FaChevronRight className="me-2 fs-8" />
                                        Contact
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Member Login
                                    </li>
                                </ul>
                            </p>
                        </Col>
                        <Col lg={2}>
                            <b>Out Services</b>
                            <p>
                                <ul className="list-unstyled">
                                    <li >
                                        <FaChevronRight className="me-2 fs-8" />
                                        Events
                                    </li>
                                    <li className="my-2">
                                        <FaChevronRight className="me-2 fs-8" />
                                        Services
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Courses
                                    </li>
                                    <li className="my-2">
                                        <FaChevronRight className="me-2 fs-8" />
                                        Project Report
                                    </li>
                                    <li>
                                        <FaChevronRight className="me-2 fs-8" />
                                        Membership
                                    </li>
                                </ul>
                            </p>
                        </Col>
                        <Col>
                            <b>Contact Us</b>
                            <p>

                                Dharmakshetra, Shiv Shakti Mandir, Babu Genu Marg, Sector 8, Rama Krishna Puram, New Delhi, Delhi 110022
                                <br />
                                <br />
                                <strong>Phone:</strong>
                                +91 80031 98250
                                <strong>Email:</strong>
                                info@mysba.co.in
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    <img
                        src="https://mysba.co.in/mysbad.png"
                        alt="Image 1"
                        className="img-fluid"
                    />
                </span>
                <span className="ms-3">
                    <img
                        src="https://mysba.co.in/mavit.png"
                        alt="Image 2"
                        className="img-fluid"
                    />
                </span>
            </div>
        </>
    )
}
export default Footer