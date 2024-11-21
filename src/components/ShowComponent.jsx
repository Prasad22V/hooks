import React from 'react';

const ShowComponent = ({ inputs }) => {
  return (
    <div>
      <h1>Form Data</h1>
      {inputs.length > 0 ? (
        inputs.map((input) => (
          <details key={input.id}>
            <summary>Input {input.id}</summary>
            <p>{input.value}</p>
          </details>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ShowComponent;
