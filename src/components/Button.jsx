import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Button = ({ href, className }) => {
  return (
    <NavLink
      to={href}
      className={clsx("flex justify-center py-4 px-6 rounded-xl", className)}
    >
      View All Jobs
    </NavLink>
  );
};

export default Button;
