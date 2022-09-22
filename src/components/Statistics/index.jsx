export default function Statistics({good, neutral, bad, total, positiveFeedback}) {
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