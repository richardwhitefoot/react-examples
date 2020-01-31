import React from 'react';
import './App.css';
import { Button, TomatoButton } from './components/Button';
import { ThemeProvider } from 'styled-components';

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button>Normal!</Button>
        <Button primary>Primary!</Button>
        <TomatoButton>Tomato Button!</TomatoButton>
      </ThemeProvider>
    </>
  );
}

export default App;
