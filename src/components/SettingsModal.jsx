import React from 'react';
import "./style.css";
import { Button,Modal } from 'react-bootstrap';
import Settings from "./Settings.jsx";

function SettingsModal() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="SettingsModal">
        <button className="nav-link settingsbutton" onClick={handleShow}>
          Settings
        </button>
  
        <Modal size="lg" className="special_modal"show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Settings />

          </Modal.Body>
          <Modal.Footer>
            <button className="odark lb bsm scale" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
 
export default SettingsModal;