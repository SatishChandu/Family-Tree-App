import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { saveFamilyData } from '../Util';

const FamilyDetails = ({ onNext }) => {
    const [surname, setSurname] = useState('');
    const [gothram, setGothram] = useState('');
    const [origin, setOrigin] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(surname && gothram && origin) {
            const formData = {
                surname,
                gothram,
                origin
            };
            saveFamilyData(formData);
            console.log("Family Details submitted successfully", formData);
            setIsSubmitted(true);
        } else {
            alert("Please fill all the fields");
        }
    }; 

  return (
    <>
      <div className='family-details'>
        <h4>Family Details</h4>
        <Form.Group>
            <Form.Label>Surname</Form.Label>
                <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder="Enter Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
        </Form.Group>
        <Form.Group>
            <Form.Label>Gothram</Form.Label>
                <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder="Enter your Gothram"
                    value={gothram}
                    onChange={(e) => setGothram(e.target.value)}
                />
                <Form.Label>Origin</Form.Label>
                <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder="Enter your origin place"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
        </Form.Group>
        <div className='btn-group'>
            <Button onClick={handleSubmit} className='btn-submit'>Submit</Button>
            <Button variant="warning" onClick={onNext} className='btn-submit' disabled={!isSubmitted}>Next</Button>
        </div>
      </div>
        
      
    </>
  )
}

export default FamilyDetails;