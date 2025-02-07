import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";
import JobsPage from "./JobsPage";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsPage isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
