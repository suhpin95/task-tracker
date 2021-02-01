import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
};

export default Header;
