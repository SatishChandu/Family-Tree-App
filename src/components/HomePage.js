import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FamilyDetails from './FamilyDetails';
import PersonDetails from './PersonDetails';

const HomePage = () => {
  return (
    <>
      <div className='m-3'>
        <Tabs
        defaultActiveKey="family"
        className="mb-3"
        justify
        >
          <Tab eventKey="family" title="Family">
            <FamilyDetails />
          </Tab>
          <Tab eventKey="person" title="Person">
            <PersonDetails />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default HomePage;