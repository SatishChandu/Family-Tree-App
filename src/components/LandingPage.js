import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import familyTreeImg from "../assets/img/family-tree-img.jpg";
import "../App.css";
import DataView from "./DataView";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdd = () => {
    navigate("/home");
  }
  return (
    <>
      <div className="landing-page">
        <div className="logout-button">
          <Button variant="dark" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="img-container">
          <div className="bg-img">
            <img src={familyTreeImg} alt="familyImg" width="1024" height="786" />
          </div>
          <div className="add-family">
            <h3>You can also build your family tree by clicking the below button</h3>
            <div className="add-family-button">
              <Button onClick={handleAdd}>Add Family Details</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DataView />
      </div>
    </>
  );
};

export default LandingPage;
