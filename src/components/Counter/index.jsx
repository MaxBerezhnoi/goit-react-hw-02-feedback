import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions';
import Section from 'components/Section';
import { Statistics } from "../Statistics"
import { Notification } from '../Notification';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    
    handelFeedback = (e) => {
        let vote = e.currentTarget.value;
    this.setState(prevState => {
      return { [vote]: prevState[vote] + 1 };
    });
    //this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    /* this.setState(prevState => {
            return { total: prevState.good + prevState.neutral + prevState.bad }
        })
        this.countPositiveFeedbackPercentage();*/
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(result.toFixed(0));
    /*this.setState(prevState => {
            let positivePercentage = ((prevState.good / prevState.total) * 100)
            return { positiveFeedback: positivePercentage.toFixed() }
        })*/
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
                    handler={this.handelFeedback}
                    //state={this.state}
          />
        </Section>
        <Section title="Statistics:">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercent={positivePercent}
            />
          )}
        </Section>
      </>
    );

    /* <div className="statisticsCounter">
                        {this.state.total === 0 && <Notification message="There is no feedback" />}
                        <ButtonOptions onGood={this.onGood} onNeutral={this.onNeutral} onBad={this.onBad} />
              
                        {this.state.total !== 0 && <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positiveFeedback={this.state.positiveFeedback} />}
                   
        
                    </div>*/
  }
}

export default Counter;
