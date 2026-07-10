import { Row, Col, Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/images/mbs.jpg'
import banner2 from '../assets/images/image.png'
function Mbs() {
    return (
        <>
            <div className="">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            src={banner}
                            alt="image"
                            className="img-fluid w-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={banner2}
                            alt="image"
                            className="img-fluid w-100"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="border ">
                <h2 className="mt-5 text-center">Main Bhi Swadeshi Hu Campaign 2026</h2>
                <div className=" d-flex justify-content-center ">
                    <h5 className="border rounded p-2" style={{ backgroundColor: "#ffe6cc" }}>"स्वदेशी अपनाएँ, आत्मनिर्भर भारत बनाएँ "</h5>
                </div>
                <div className="mx-5 my-3 ">
                    Main Bhi Swadeshi Hu – Profile Campaign is a nationwide digital awareness initiative by MySBA, dedicated to inspiring every Indian to proudly support the Swadeshi movement. Running from 1st August to 20th August 2026, this campaign encourages citizens to update their social media profile with the "मैं भी स्वदेशी हूँ" campaign frame and become a part of a collective mission to promote Indian products, services, businesses, and entrepreneurship. It is not merely a profile campaign, but a people's movement to express our commitment towards Swadeshi, Self-Reliance, and Viksit Bharat. Every profile changed becomes a powerful message of support for local entrepreneurs, MSMEs, startups, artisans, and Indian innovation.
                </div>
            </div>
            <div className="" style={{ backgroundColor: "#ffe6cc" }}>
                <h2 className="text-center pt-5">Main Bhi Swadeshi Hu Campaign 2026</h2>
                <Container>
                    <Row className=" py-5">
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <img src="	https://mysba.co.in/assets/img/Register.png" width="100px" height="100px" />
                            <p className="mt-2 mb-0 ">Register Here</p>
                            <p className="fs-7 mt-0 mb-0 ">
                                (यहाँ रजिस्टर करें / यहाँ पंजीकरण करें)
                            </p>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <img src="https://mysba.co.in/assets/img/learn.png" width="100px" height="100px" />
                            <p className="mt-2 mb-0 ">Create Your Swadeshi Profile Picture</p>
                            <p className="fs-7 mt-0 mb-0 ">
                                (अपनी स्वदेशी प्रोफाइल पिक्चर बनाएं)
                            </p>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <img src="	https://mysba.co.in/assets/img/Getcertified.png" width="100px" height="100px" />
                            <p className="mt-2 mb-0 ">Download Certificate</p>
                            <p className="fs-7 mt-0 mb-0 ">
                                (अपना प्रमाणपत्र डाउनलोड करें)
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="px-5">
                <h3 className="mt-5">Why It Matters</h3>
                <p>
                    In today's rapidly evolving world, every individual has the power to create a positive impact through conscious choices. By choosing and promoting Swadeshi, we strengthen India's economy, generate employment opportunities, empower local businesses, and contribute towards the vision of Aatmanirbhar Bharat. A simple profile change can inspire thousands to become a part of this national movement.
                    This Campaign Symbolizes:
                    <br />
                    • Pride in choosing and promoting Swadeshi products and services
                    <br />
                    • Support for Indian entrepreneurs, MSMEs, startups, and local businesses
                    <br />
                    • Promotion of indigenous innovation, skills, craftsmanship, and entrepreneurship
                    <br />
                    • Strengthening the spirit of self-reliance, national unity, and economic prosperity
                    <br />
                    From 1st August to 20th August 2026, the Main Bhi Swadeshi Hu – Profile Campaign will connect citizens, youth, professionals, entrepreneurs, educational institutions, and organizations across India through a unified digital movement, encouraging everyone to proudly display the "मैं भी स्वदेशी हूँ" profile frame and spread the message of Swadeshi First.
                    <br />
                    Let's come together from 1st August to 20th August 2026 to take this pledge—
                    <br />
                    मैं भी स्वदेशी हूँ।
                    <br />
                    मैं स्वदेशी अपनाऊँगा, स्वदेशी बढ़ाऊँगा और अधिक से अधिक लोगों को स्वदेशी से जोड़कर आत्मनिर्भर भारत एवं विकसित भारत के निर्माण में अपना सक्रिय योगदान दूँगा।"
                </p>
            </div>

        </>
    )
}
export default Mbs