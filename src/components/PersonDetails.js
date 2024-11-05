import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import { savePersonData } from '../Util';

const PersonDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [address, setAddress] = useState(""); 
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const handleSubmit = () => {
        const formData = {
            firstName,
            middleName,
            dateOfBirth,
            fatherName,
            motherName,
            occupation,
            address,
            gender,
            maritalStatus
        };
        savePersonData(formData);
        console.log("Form data submitted:", formData);
    }
  return (
    <>
      <div className='person-details'>
        <h4 className='text-center mb-3'>Person Details</h4>
        <Row className="g-2 mb-3">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="First Name">
                  <Form.Control 
                  type="text" 
                  placeholder="Please enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} 
                  />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Middle Name">
                    <Form.Control 
                    type="text" 
                    placeholder="Please enter your middle name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}  
                    />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2 mb-3">
            <Col md>
            <FloatingLabel controlId="floatingSelect" label="Gender">
                <Form.Select 
                aria-label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                  <option>Select your gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </Form.Select>
            </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="DOB">
                    <Form.Control 
                    type="date" 
                    placeholder="Please enter your date of birth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}  
                    />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2 mb-3">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Father Name">
                  <Form.Control 
                  type="text" 
                  placeholder="Please enter your father name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}  
                  />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Mother Name">
                    <Form.Control 
                    type="text" 
                    placeholder="Please enter your mother name"
                    value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}  
                    />
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2 mb-3">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Occupation">
                  <Form.Control 
                  type="text" 
                  placeholder="Please enter your occupation" 
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)} 
                  />
                </FloatingLabel>
            </Col>
            <Col md>
                <div className="mb-3">
                    <h6>Marriage Status</h6>
                  <Form.Check
                    inline
                    label="single"
                    name="single"
                    type="radio"
                    value="Single"
                    checked={maritalStatus === "Single"}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="married"
                    name="married"
                    type="radio"
                    value="Married"
                    checked={maritalStatus === "Married"}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="divorced"
                    name="divorced"
                    type="radio"
                    value="Divorced"
                    checked={maritalStatus === "Divorced"}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  />
                </div>
            </Col>
        </Row>

        <Row className='g-2 mb-3'>
            <Col md>
                <InputGroup>
                    <InputGroup.Text>Address</InputGroup.Text>
                    <Form.Control 
                    as="textarea" 
                    aria-label="Address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                    />
                </InputGroup>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                    <Form.Control 
                    type="text" 
                    placeholder="Please enter your phone number" 
                    />
                </FloatingLabel>
            </Col>
        </Row>
        <div className='btn-submit'>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
       

      </div>
    </>
  )
}

export default PersonDetails;