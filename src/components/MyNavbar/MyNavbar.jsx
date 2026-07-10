import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';

//css
import './MyNavbar.css'
//icons
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
//images
import logo from '../../assets/images/logo.png'

function MyNavbar() {
    //dropdown
    const [activeDropdown, setActiveDropdown] = useState(null);
    return (
        <>
            <Container fluid>
                <Row className='top-bar px-4 '>
                    <Col className=''  >
                        <div className='  py-2 '>
                            <span className=' text-light'>JSK</span>
                            <Link to="/mbs" className="px-2 text-decoration-none text-white">
                                Main Bhi Swadeshi
                            </Link>
                            <span className=' text-light px-3'>SSBA</span>
                            <span className=' text-light px-3'>SBA</span>
                            <span className=' text-light px-3'>Donate</span>
                            <span className=' text-light'>Login</span>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end' lg={6}>
                        <div className='  py-2 '>
                            <span className=' text-light'>info@mysba.co.in</span>
                            <span className=' text-light px-3'><FaFacebook /></span>
                            <span className=' text-light px-3'><FaWhatsapp /></span>
                            <span className=' text-light px-3'><FaYoutube /></span>
                            <span className=' text-light px-3'><FaInstagram /></span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Navbar expand="lg" className="myNavbar navbar-dark px-3" >
                <Container fluid>
                    <Navbar.Brand >
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="my-2 my-lg-0 text-white navbar-nav-right"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown
                                title="About Us"
                                show={activeDropdown === "about"}
                                onMouseEnter={() => setActiveDropdown("about")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavDropdown.Item>Our Mission</NavDropdown.Item>
                                <NavDropdown.Item>Our Vision</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-white' >Events</Nav.Link>
                            <Nav.Link className='text-white' >Services</Nav.Link>
                            <Nav.Link className='text-white' >Course</Nav.Link>
                            <Nav.Link className='text-white' >Enterpreneurship</Nav.Link>
                            <Nav.Link className='text-white' >Startup</Nav.Link>
                            <Nav.Link className='text-white' >Scheme</Nav.Link>
                            <Nav.Link className='text-white' >Job & Career</Nav.Link>
                            <Nav.Link className='text-white' >Join Us</Nav.Link>
                            <Nav.Link className='text-white' >Download</Nav.Link>
                            <Nav.Link className='text-white' >Shop</Nav.Link>
                            <Nav.Link className='text-white' >News</Nav.Link>
                            {/* <NavDropdown title="Login" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default MyNavbar