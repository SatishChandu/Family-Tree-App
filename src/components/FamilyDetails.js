import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FamilyDetails = () => {
    const [surname, setSurname] = useState('');
    const [gothram, setGothram] = useState('');
    const [origin, setOrigin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Family Details submitted successfully");
    };

    const handleNext = () => {
        console.log("Next button clicked");
    }
  return (
    <>
      <div className='family-details'>
        <h4>Family Details</h4>
        <Form.Group>
            <Form.Label>Surname</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
        </Form.Group>
        <Form.Group>
            <Form.Label>Gothram</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your Gothram"
                    value={gothram}
                    onChange={(e) => setGothram(e.target.value)}
                />
                <Form.Label>Origin</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your origin place"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
        </Form.Group>
        <div className='btn-group'>
            <Button onClick={handleSubmit} className='btn-submit'>Submit</Button>
            <Button variant="warning" onClick={handleNext} className='btn-submit'>Next</Button>
        </div>
      </div>
        
      
    </>
  )
}

export default FamilyDetails;