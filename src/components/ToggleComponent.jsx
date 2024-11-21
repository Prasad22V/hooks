import React, { useState, useContext } from 'react';
import { InputContext } from '../context/InputContext';
import FormComponent from './FormComponent';
import ShowComponent from './ShowComponent';

const ToggleComponent = () => {
  const { inputs } = useContext(InputContext);
  const [showForm, setShowForm] = useState(true); // Toggle state for form and data display
  const [formData, setFormData] = useState([]); // Store form data when submitted

  const handleFormSubmit = (inputs) => {
    setFormData(inputs); // Store the form data
    setShowForm(false);  // Switch to ShowComponent view
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowForm(true)}>Show Form</button>
        <button className='sd' onClick={() => setShowForm(false)}>Show Data</button>
      </div>

      {showForm ? (
        <FormComponent onFormSubmit={handleFormSubmit} />
      ) : (
        <ShowComponent inputs={formData} />
      )}
    </div>
  );
};

export default ToggleComponent;
