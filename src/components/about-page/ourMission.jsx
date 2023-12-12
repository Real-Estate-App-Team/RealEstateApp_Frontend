
import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import "../about-page/ourMission.scss";
import { AiTwotonePhone } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import"../common/spacer";
import Spacer from "../common/spacer";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { PiFlowerTulipBold } from "react-icons/pi";
import { BsTag } from "react-icons/bs";



const OurMission = () => {
    return (
      <div className="ourMission" >
       <Container >
        <Row className="g-5"style={{display:"flex"}}>
            <Col md={6}>
                <Image src="/assets/img/highlight.png" className="img-fluid"/>
            </Col>
            <Col md={6}>
            <h2>We're on a Mission to Change View of Real Estate Field.</h2>
            <p>
              At the heart of our vision lies a resolute commitment to transform the landscape
              of the real estate industry. We're not just a company; we're on a mission to
              change the very essence of how real estate is perceived and experienced.Our journey is defined by innovation,
              transparency,and a relentless pursuit of excellence.With a bold and forward-thinking
              approach, we seek to revolutionize the traditional norms of the real estate field, making it 
              more accessible, efficient, and customer-centric. Dur aspiration is to shape a future where
              buying, selling, or investing in real estete is a seamless and empowering experience for all.
              join us on this transformative journey as we rewrite the narrative of real estate.

            </p>
            <div style={{ fontSize: "5em"}}>
            <div style={{display:"flex"}}>
                <h3 className="header" ><FaCircle /> </h3>
                <h3 className="header2"><FaCircle /> </h3>
              </div> 
              </div>
              <div style={{ fontSize: "2em"}}>
               <div style={{display:"flex"}}>
                <h3>Modern Architect</h3>
                <h3>Green Building</h3>
              </div> 
              </div>
            </Col>
         </Row>
       </Container>
       <Spacer/>
       <Container >
        <Row className="g-5"style={{display:"flex"}}>
            
            <Col md={6}>
                 <div className="find">             
                      <h2>Let's Find The Right Selling Option For You</h2>
                      <div>
                   

                      <h3 >   <BsTag />
  Tech-Driven Marketing</h3>
                        <p>Real estate is embracing technology with virtual tours, 3D models, and blockchain transactions. </p>
                      </div>
                      <div>

                      <h3> <PiFlowerTulipBold />  Sustainability Matters</h3>
                        <p>Green building practices and eco-friendly features are gaining popularity for environmentally conscious buyers.  </p>
                      </div>
                      <div>
                      <h3> <RiShieldKeyholeLine />
                       Remote Work Impact</h3>
                        <p>Changing work patterns are reshaping housing prefences, favoring suburban and urban mixed-use developments.   </p>
                      </div>
                  </div>
                  <div>
             
                   </div>
                  
            </Col>
            <Col md={6}>
                        <div> 

                        <Image src="/assets/img/highlight.png" className="img-fluid"/>
               

                </div>
          </Col>
         </Row>
       </Container>
       
       <Container>
        <Row style={{display:"flex"}}>
          <Col md={6}  >
                   <h2 >Need Help? Talk to our expert.</h2>
                    <p>Talk to our experts or Browse through more properties.</p>
                  
          </Col>
          <Col md={4}>
                <div style={{display:"flex",marginLeft:200}}>
                         
                        <div style={{marginRight:50}}><a href="mailto:info@realstate.com" className="contactus">Contact Us<BsArrowUpRight /></a></div> 
                        <div><a href="tel:+112345645665" className="contact"> <AiTwotonePhone /> Contact Us </a></div>
                 </div> 
          </Col>
        </Row>
       </Container>
      </div>
    )
  }
  
  export default OurMission;