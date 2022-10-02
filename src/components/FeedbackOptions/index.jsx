import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, handler}) => {
    return (
        <div className={css.buttonsBlock}>
      
        { options.map(item =>
        (
          <button
            value={item}
            className={css.button}
            type="button"
            onClick={handler}
          >
            {item}
          </button>))}

          
              </div>)
    
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handler: PropTypes.element.isRequired,
}