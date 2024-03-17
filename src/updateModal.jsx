import { React, useState, useEffect } from "react";

import './style.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiStudent } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineBadge } from "react-icons/md";
import Validate_fields from "Validation";


const updateModal = () => {



    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [errors, setErrors] = useState({})

    const [details, setDetails] = useState({
        firstName: { value: "", type: "text" },
        lastName: { value: "", type: "text" },
        email: { value: "", type: "email" },
        dateOfBirth: { value: "", type: "date" },
        gender: { value: "", type: "text" },
        address: { value: "", type: "textarea" },
        phone_num: { value: "", type: "number" },
        emergency_contact: { value: "", type: "number" },
        security_number: { value: "", type: "text" },
        specialization: { value: "", type: "text" },
        qualification: { value: "", type: "text" },
        subjects: { value: "", type: "text" },
        grade_level: { value: "", type: "text" },
        teaching_experience: { value: "", type: "text" },
        joining_date: { value: "", type: "date" },
        salary: { value: "", type: "number" },
        position: { value: "", type: "text" },
      });
    
    
    
      const formatLabel = (key) => {
        return key
          .replace(/([A-Z])/g, " $1")
          .replace(/_/g, " ")
          .replace(/^./, (str) => str.toUpperCase());
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevStringData) => ({
          ...prevStringData,
          [name]: { ...prevStringData[name], value }, // Update the 'value' property within the corresponding object
        }));
    
    
      };
    
      const changeDateFormat = () => {
        const updatedDetails = {};
        for (const key in details) {
          const field = details[key];
          if (field.type === "date" && field.value) {
            // Convert date format if the type is "date" and value exists
            const parts = field.value.split("-");
            const formattedDate = `${parts[0]}-${parts[1]}-${parts[2]}`;
            updatedDetails[key] = { ...field, value: formattedDate };
          } else {
            updatedDetails[key] = field;
          }
        }
        setDetails(updatedDetails);
      };
    
    
      const onSubmit = async (e) => {
        changeDateFormat();
        const values = Object.values(details);
    
        // Creating a new object with only values and the same keys
        const postData = values.reduce((acc, { value }, index) => {
          const key = Object.keys(details)[index];
          acc[key] = value;
          return acc;
        }, {});
    
        console.log(postData);
        setErrors(Validate_fields(postData));
        console.log(errors)
        if (Object.keys(errors).length === 0) {
          console.log("Ready to send data")
        }
    
        // e.preventDefault();
        // const data = await teacherRegister(postData);
        // console.log("Return "+data);
        // window.location.reload();
      }
    
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Open Modal
          </Button>
          <Modal show={show} onHide={handleClose} backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>Edit Teacher Info</Modal.Title>
    
            </Modal.Header>
            <Modal.Body >
              <div className="container">
                {Object.entries(details).map(([menuItem, component]) => (
                  <div key={menuItem.key}>
    
                    <span className="field-name">{formatLabel(menuItem)}</span>
    
    
                    {
    
                      component.type === "textarea" ? (
                        <textarea
                          className="form-control"
                          name={menuItem}
                          value={component.value}
                          onChange={(e) => handleInputChange(e)}
                          placeholder={`Enter your ${formatLabel(menuItem)}`}
                          required
                        />
                      ) : (
    
                        <input
                          className="form-control input-field"
                          name={menuItem}
                          value={component.value}
                          onChange={(e) => handleInputChange(e)}
                          placeholder={`Enter your ${formatLabel(menuItem)}`}
                          type={component.type}
                          onInput={(e) => {
                            if (component.type === 'number' && e.target.value.length > 10) {
                              e.target.value = e.target.value.slice(0, 10);
                            }
                          }}
                          required
                        />
    
                      )
    
                    }
                    {errors[menuItem] && <span style={{ color: 'red' }}>{errors[menuItem]}</span>}
    
    
    
    
    
                  </div>
    
                ))}
    
                <div className="form-group mt-2 col-md-12">
                  <button className="btn btn-block btn-primary" onClick={onSubmit} type="submit">
                    Create teacher
                  </button>
                </div>
    
    
    
    
    
    
              </div>
            </Modal.Body>
          </Modal>
    
    
    
      



</>

  )
}

export default updateModal
