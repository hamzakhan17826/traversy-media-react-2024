import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Job = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isLongDescription = job.description.length > 140;
  let description = job.description;
  if (!showFullDescription && isLongDescription) {
    description = job.description.substring(0, 140) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="">{description}</div>
        {isLongDescription && (
          <button
            className="text-sm text-indigo-500 cursor-pointer"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}

        <h3 className="text-indigo-500 mb-2 mt-5">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex gap-2 items-center text-orange-700">
            <FaMapMarker />
            <div>{job.location}</div>
          </div>

          <NavLink
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Job;
