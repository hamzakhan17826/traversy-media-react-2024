import React from "react";
import clsx from "clsx";

const Button = ({ href, className }) => {
  return (
    <a
      href={href}
      className={clsx("flex justify-center py-4 px-6 rounded-xl", className)}
    >
      View All Jobs
    </a>
  );
};

export default Button;
