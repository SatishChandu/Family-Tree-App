import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FamilyDetails from './FamilyDetails';
import PersonDetails from './PersonDetails';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('family');
  const [familySubmitted, setFamilySubmitted] = useState(false);

  const handleNext = () => {
    setActiveTab('person'); 
  };
  return (
    <>
      <div className='m-3'>
        <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
        justify
        >
          <Tab eventKey="family" title="Family">
            <FamilyDetails onSubmit={() => setFamilySubmitted(true)} onNext={handleNext} />
          </Tab>
          <Tab eventKey="person" title="Person" disabled={!familySubmitted}>
            <PersonDetails />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default HomePage;