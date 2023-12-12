import React from 'react'
import "../about-page/header.scss";
import { Col, Container, Row } from 'react-bootstrap';

const PageHeader = () => {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col>
          <h1>ABOUT US </h1>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default PageHeader