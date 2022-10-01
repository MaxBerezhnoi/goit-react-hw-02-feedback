//import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
}

/*Section.PropTypes = {
    title: PropTypes.string.isRequired
}*/
