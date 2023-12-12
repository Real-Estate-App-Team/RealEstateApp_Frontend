import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

const Menubar=()=> {
    return (
      <div >  
    <Navbar  expand="xs" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#" title="logo.png" style={{display:"flex"}} >
              <Image src="/assets/img/logo.png" className="img-fluid" alt="logo.png"/>
        
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#properties">Properties</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <div>  
            <UserOutlined />
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">/</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
      

            </div>
            
            </Navbar.Brand>
           
           
          </Container>
        </Navbar>
       
        </div>
       
  
       
      
    );
  }
  
  export default Menubar;