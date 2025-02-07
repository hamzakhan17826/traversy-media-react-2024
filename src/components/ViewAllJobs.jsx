import React from "react";
import Button from "./Button";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Button href="/jobs" className="bg-black text-white hover:bg-gray-700" />
    </section>
  );
};

export default ViewAllJobs;
