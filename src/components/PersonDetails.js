import React from 'react';
import { Col, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';

const PersonDetails = () => {
  return (
    <>
        <div className='person-details'>
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Firstname">
                  <Form.Control type="text" placeholder="Please enter your firstname" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Middlename">
                    <Form.Control type="text" placeholder="Please enter your middlename" />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2">
            <Col md>
            <FloatingLabel controlId="floatingSelect" label="Gender">
                <Form.Select aria-label="Gender">
                  <option>Select your gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </Form.Select>
            </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="DOB">
                    <Form.Control type="date" placeholder="Please enter your date of birth" />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Fathername">
                  <Form.Control type="text" placeholder="Please enter your fathername" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Mothername">
                    <Form.Control type="text" placeholder="Please enter your mothername" />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Occupation">
                  <Form.Control type="text" placeholder="Please enter your occupation" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Marriage status">
                    <Form.Control type="text" placeholder="Please enter your mothername" />
                </FloatingLabel>
            </Col>
        </Row>


        <InputGroup>
            <InputGroup.Text>Address</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Address" />
        </InputGroup>

        </div>
    </>
  )
}

export default PersonDetails;