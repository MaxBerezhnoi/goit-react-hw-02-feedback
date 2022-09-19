import React, { Fragment } from 'react';
import Button from 'components/Button';
import button from '../../button.json';
class Counter extends React.Component {
    hendeleCounter = event => {
            console.log("+2");
    };
    
    render() {
      return (
          <Fragment>
              <Button button={button} key={button.id} func={this.hendeleCounter} />     
      <div className="statisticsCounter">
        <p>Statistics:</p>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </div></Fragment>
        
    );
  }
}

export default Counter;
