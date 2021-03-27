import React, { Component } from 'react';
import TitleOfSection from './components/TitleOfSection/TitleOfSection';
import StatisticsTable from './components/StatisticsTable/StatisticsTable';
import Buttons from './components/Buttons/Buttons';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // console.log(this.state);
    const buttonsNames = Object.keys(this.state);

    return (
      <>
        <h1>HomeWork of React #2</h1>
        <TitleOfSection text={'Please leave feedback'} />
        <Buttons buttonsNames={buttonsNames} />
        <TitleOfSection text={'Statistics'} />
        <StatisticsTable rating={this.state} />
      </>
    );
  }
}

export default App;
