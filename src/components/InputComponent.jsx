import React from 'react';
import { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const InputComponent = ({ id }) => {
  const { removeInput, updateInput } = useContext(InputContext);

  return (
    <div>
      <input
        type="text"
        placeholder={`Input ${id}`}
        onChange={(e) => updateInput(id, e.target.value)}
      />
      <button className="remove-btn" onClick={() => removeInput(id)}>Remove</button>
    </div>
  );
};

export default InputComponent;
