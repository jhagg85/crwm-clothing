import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, isGooglSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGooglSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
