

export default function Statistics({ good, neutral, bad, total, positiveFeedback }) {
    return (
<div>
                  <p>Statistics:</p>
        <ul>
                      <li>Good: { good }</li>
                      <li>Neutral: { neutral }</li>
                  <li>Bad: {bad}</li>
                  <li>Total: {total}</li>
                  <li>Positive feedback: { positiveFeedback }%</li>
                  </ul>
              </div>
    )
}

/*Statistics.PropTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
        positiveFeedback: PropTypes.number
        
}*/