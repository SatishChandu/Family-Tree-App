import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import { savePersonData } from '../Util';
import { useNavigate } from 'react-router-dom';

const PersonDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [grandFatherName, setGrandFatherName] = useState("");
    const [grandMotherName, setGrandMotherName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [address, setAddress] = useState(""); 
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [siblings, setSiblings] = useState([""]); 
    const navigate = useNavigate();

    const handleAddSibling = () => {
        setSiblings([...siblings, ""]);
    };

    const handleSiblingChange = (index, value) => {
        const updatedSiblings = [...siblings];
        updatedSiblings[index] = value;
        setSiblings(updatedSiblings);
    };

    const handleRemoveSibling = (index) => {
        const updatedSiblings = siblings.filter((_, i) => i !== index);
        setSiblings(updatedSiblings);
    };

    const handleSubmit = () => {
        if(firstName && middleName && dateOfBirth && fatherName && motherName
            && grandFatherName && grandMotherName && occupation && address && gender && maritalStatus
         ) {
            const formData = {
                firstName,
                middleName,
                dateOfBirth,
                fatherName,
                motherName,
                grandFatherName,
                grandMotherName,
                occupation,
                address,
                gender,
                maritalStatus,
                siblings
            };
            savePersonData(formData);
            console.log("Form data submitted:", formData);
            navigate('/view-data');
        } else {
            alert("Please fill all the fields");
        }
    };

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
                    <FloatingLabel controlId="floatingInputGrid" label="Father's Name">
                        <Form.Control 
                        type="text" 
                        placeholder="Please enter your father's name"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}  
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Mother's Name">
                        <Form.Control 
                        type="text" 
                        placeholder="Please enter your mother's name"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}  
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mb-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Grandfather Name">
                        <Form.Control 
                        type="text" 
                        placeholder="Enter your grandfather's name"
                        value={grandFatherName}
                        onChange={(e) => setGrandFatherName(e.target.value)} 
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Grandmother Name">
                        <Form.Control 
                        type="text" 
                        placeholder="Enter your grandmother's name"
                        value={grandMotherName}
                        onChange={(e) => setGrandMotherName(e.target.value)} 
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mb-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Date of Birth">
                        <Form.Control 
                        type="date" 
                        placeholder="Please enter your date of birth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}  
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Marital Status">
                        <Form.Select
                            value={maritalStatus}
                            onChange={(e) => setMaritalStatus(e.target.value)}
                        >
                            <option>Select marital status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </Form.Select>
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
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
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
            </Row>
            

            {/* Siblings Section */}
            <Row className="g-2 mb-3">
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
                <Col md={6}>
                    <h6>Siblings</h6>
                    {siblings.map((sibling, index) => (
                        <InputGroup className="mb-2" key={index}>
                            <InputGroup.Text>Sibling {index + 1}</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder={`Enter name of sibling ${index + 1}`}
                                value={sibling}
                                onChange={(e) => handleSiblingChange(index, e.target.value)}
                            />
                            <Button
                            variant="danger"
                            onClick={() => handleRemoveSibling(index)}
                            className="ms-2"
                            >
                            Delete
                            </Button>
                        </InputGroup>
                    ))}
                    <Button variant="link" onClick={handleAddSibling}>
                        + Add Sibling
                    </Button>
                </Col>
            </Row>

            <div className='btn-submit'>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </>
    );
};

export default PersonDetails;
