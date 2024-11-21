import React from 'react';
import { InputProvider } from './context/InputContext';
import ToggleComponent from './components/ToggleComponent';
import './App.css';

const App = () => {
  return (
    <InputProvider>
      <ToggleComponent />
    </InputProvider>
  );
};

export default App;
