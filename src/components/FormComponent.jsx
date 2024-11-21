import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';
import InputComponent from './InputComponent';

const FormComponent = ({ onFormSubmit }) => {
  const { inputs, addInput } = useContext(InputContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputs); // Pass the inputs to the parent component on form submit
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <InputComponent key={input.id} id={input.id} />
      ))}
      <div className="footer">
        <button type="button" onClick={addInput}>Add Input</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
