import React from 'react';
import './App.css';
import { AppLayoutContainer, GlobalStyle } from './styles';
import ListView from './screens/ListView/ListView';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppLayoutContainer>
        <ListView />
      </AppLayoutContainer>
    </>
  );
};

export default App;
