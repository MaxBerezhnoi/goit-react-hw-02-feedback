import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
    };
    
    onGood = () => {
 
        this.setState(prevState => {
            return { good: prevState.good + 1 }
        })
        this.countTotalFeedback();
    };
    
    onNeutral = () => {
 
        this.setState(prevState => {
            return { neutral: prevState.neutral + 1 }
        })
        this.countTotalFeedback();
    };
    
    onBad = () => {
 
        this.setState(prevState => {
            return { bad: prevState.bad + 1 }
        })
        this.countTotalFeedback();
    };
    
    countTotalFeedback = () => {
        this.setState(prevState => {
            return { total: prevState.good + prevState.neutral + prevState.bad }
        })
        this.countPositiveFeedbackPercentage();
    };

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
    return { positiveFeedback: ((prevState.good/prevState.total)*100)}
})
    }
      
    
    render() {
      return (
                  
              <div className="statisticsCounter">
              <div className="buttonsBlock">
      
        <button
          className="button"
          type="button"
          onClick = {this.onGood}
        >
          <span className="button_name">Good</span>
                      </button>
                      
                      <button
          className="button"
          type="button"
          onClick = {this.onNeutral}
        >
          <span className="button_name">Neutral</span>
                      </button>
                      <button
          className="button"
          type="button"
          onClick = {this.onBad}
        >
          <span className="button_name">Bad</span>
        </button>
      
    </div>
        <p>Statistics:</p>
        <ul>
                      <li>Good: { this.state.good }</li>
                      <li>Neutral: { this.state.neutral }</li>
                  <li>Bad: {this.state.bad}</li>
                  <li>Total: {this.state.total}</li>
                  <li>Positive feedback: { this.state.positiveFeedback }%</li>
        </ul>
      </div>
        
    );
  }
}

export default Counter;
