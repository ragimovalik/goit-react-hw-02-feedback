import React, { Component } from 'react';
import TitleOfSection from './components/TitleOfSection/TitleOfSection';
import Buttons from './components/Buttons/Buttons';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>HomeWork of React #2</h1>
        <TitleOfSection text={'Section 1'} />
        <Buttons />
      </>
    );
  }
}

export default App;
