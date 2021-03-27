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

  changer(nameOf) {
    return this.setState(prevState => ({
      [nameOf]: prevState[nameOf] + 1,
    }));

    /*
    switch (nameOf) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;

      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        console.log('nononono');
    }*/
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, num) => num + acc, 0);
  }

  countPositiveFeedbackPercentage() {
    return Object.values(this.state).reduce((acc, num) => {
      const percentageCounter =
        (this.state.good / this.countTotalFeedback()) * 100;
      return Math.floor(percentageCounter) || null;
    }, 0);
  }

  render() {
    const buttonsNames = Object.keys(this.state);
    const statObj = {
      ...this.state,
      totalFeedback: this.countTotalFeedback(),
      totalPositiveFeedback: this.countPositiveFeedbackPercentage(),
    };

    // console.log(statObj);

    // console.log(
    //   this.countTotalFeedback(),
    //   this.countPositiveFeedbackPercentage(),
    // );

    return (
      <>
        <h1>HomeWork of React #2</h1>
        <TitleOfSection text={'Please leave feedback'} />
        <Buttons
          buttonsNames={buttonsNames}
          onClick={event => {
            console.log(event.target.name, event.currentTarget);
            return this.changer(event.target.textContent);
          }}
        />
        <TitleOfSection text={'Statistics'} />
        <StatisticsTable rating={statObj} />
      </>
    );
  }
}

export default App;
