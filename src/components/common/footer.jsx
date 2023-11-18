import './footer.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
      <Container fluid className='footer'>
          <Row>
              <Col xs={12} md={4} className='section1'>
              <div className='logo'>
                      <a href="#home">
                          <img src="/assets/img/logo-white.png" alt="prettierhomes" />
                      </a>
              </div>
              <div className='slogan'>
                Our slogan, 'Unlocking Your Home's
                Potential, Together,' reflects our dedication
                to helping clients realize the full potential
                of their real estate investments through
                collaborative and personalized services.
              </div>
                  <div className='store'>
                      <a href="appStore">
                        <div>
                          App Store
                          <FaAppStoreIos />
                        </div>
                      </a>
                      <a href="playStore">
                        <div>
                          Google Play
                          <FaGooglePlay />
                        </div>
                      </a>
                      
              </div>
          </Col>
          <Col xs={12} sm={4} md={4} className='section2'>
              <h2 className='quickLinks'>Quick Links</h2>
              <div className='links'>
                  <a href="#home">Home</a>
                  <a href="#properties">Properties</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                  <a href="#privacyPolicy">Privacy Policy</a>
              </div>
          </Col>
          <Col xs={12} sm={4}  md={4} className='section3'>
              <h2 className='text'>Contact</h2>
              <div className='contact'>
                  <div className='address'>
                      329 Queensberry Street, North Melbourne VIC 3051, Australia.</div>
                  <div className='tel'>
                  <a href="tel:+112345645665">+1-123-456-456-65</a>
                  </div>
                  <div className='mail'>
                      <a href="mailto:info@realstate.com">info@realstate.com</a>
                  </div>
              </div>
          </Col>
          </Row>
    </Container>
  )
}

export default Footer