import React from "react";
import Card from "./assets/Card";
import { jobs } from "./data";

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;