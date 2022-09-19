import './Button.css';
export default function Button({ button, func }) {
    
    return (
    <div className="buttonsBlock">
      {button.map(button => (
        <button
          className="button"
          type="button"
          key={button.id}
          onClick = {func}
        >
          <span className="button_name">{button.name}</span>
        </button>
      ))}
    </div>
  );
}
