import React from 'react';
import './Counter.css';
import ButtonOptions from 'components/ButtonOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
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
            let positivePercentage = ((prevState.good / prevState.total) * 100)
            return { positiveFeedback: positivePercentage.toFixed(2) }
        })
    };
      
    

   
            render() {
                return (
                  
                    <div className="statisticsCounter">
                        {this.state.total === 0 && <Notification message="There is no feedback" />}
                        <ButtonOptions onGood={this.onGood} onNeutral={this.onNeutral} onBad={this.onBad} />
              
                        {this.state.total !== 0 && <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positiveFeedback={this.state.positiveFeedback} />}
                   
        
                    </div>
        
                );
            }
        }
    
    

export default Counter;
