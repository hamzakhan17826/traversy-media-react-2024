import React from "react";
import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinner;
