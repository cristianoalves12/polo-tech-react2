import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import NumbersList from './components/NumbersList/NumbersList';

const App = () => {
  return (
    <div>
      <ButtonCounter titleDecrement="-" titleIncrement="+"/>
      <NumbersList />
    </div>
  );
};

export default App;
