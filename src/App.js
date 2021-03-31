import React, { Component } from 'react';
import PageTitle from './components/PageTitle/PageTitle';
import Section from './components/Section/Section';
import StatisticsTable from './components/StatisticsTable/StatisticsTable';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback(nameOf) {
    return this.setState(prevState => ({
      [nameOf]: prevState[nameOf] + 1,
    }));
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
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <PageTitle title={'Cafe Xpresso at the TrainStation'} />

        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={buttonsNames}
            onLeaveFeedback={event => {
              return this.onLeaveFeedback(event.target.textContent);
            }}
          />
        </Section>

        <Section title={'Statistics'}>
          <StatisticsTable
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;

/*
    // Object for props
    const statObj = {
      ...this.state,
      totalFeedback: this.countTotalFeedback(),
      totalPositiveFeedback: this.countPositiveFeedbackPercentage(),
    };
    //USAGE in Render 
    <StatisticsTable rating={statObj} />
    */

/*
        {total > 0 ? (
          <Section title={'Statistics'}>
            <StatisticsTable
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : null}

*/
