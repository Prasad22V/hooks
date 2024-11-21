import React, { createContext, useState } from 'react';

// Create the context
export const InputContext = createContext();

// InputProvider component to wrap our app
export const InputProvider = ({ children }) => {
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

  // Function to add a new empty input
  const addInput = () => {
    setInputs([...inputs, { id: inputs.length + 1, value: '' }]);
  };

  // Function to remove an input by id
  const removeInput = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  // Function to update the value of a specific input
  const updateInput = (id, value) => {
    setInputs(
      inputs.map(input => (input.id === id ? { ...input, value } : input))
    );
  };

  return (
    <InputContext.Provider value={{ inputs, addInput, removeInput, updateInput }}>
      {children}
    </InputContext.Provider>
  );
};
