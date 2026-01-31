import React from "react";
import { Bookmark } from "lucide-react";

//job is a props 
const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.logo} alt={job.company} />
        <button>
          Save <Bookmark size={16} />
        </button>
      </div>

      <div className="center">
        <h3>{job.company}</h3>
        <h5>{job.date}</h5>
        <h1>{job.title}</h1>
        <div>
          <h4>{job.type}</h4>
          <h4>{job.level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h2>{job.salary}</h2>
          <h3>{job.location}</h3>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;