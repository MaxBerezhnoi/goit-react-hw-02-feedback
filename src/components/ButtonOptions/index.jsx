export default function ButtonOptions({onGood, onNeutral, onBad }) {
    return (
        <div className="buttonsBlock">
      
        <button
          className="button"
          type="button"
          onClick = {onGood}
        >
          <span className="button_name">Good</span>
                      </button>
                      
                      <button
          className="button"
          type="button"
          onClick = {onNeutral}
        >
          <span className="button_name">Neutral</span>
                      </button>
                      <button
          className="button"
          type="button"
          onClick = {onBad}
        >
          <span className="button_name">Bad</span>
                  </button>
    
          
              </div>
    )
}