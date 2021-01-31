import PropTypes from "prop-types";

export const Button = ({ text, color, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {" "}
        {text}{" "}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "green",
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
