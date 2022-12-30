import React from "react";
import { MdDelete } from "react-icons/md";
import "./Problem.css";

const Problem = ({problem, handleDelete}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="cardHead">
          <a href={problem.link} target="_blank" rel="noreferrer">
            {problem.name}
          </a>
          <MdDelete
            className="deleteProblem"
            style={{ fontSize: "1.5em" }}
            onClick={() => handleDelete(problem.link)}
          />
        </div>
        <ul className="cardItems">
          <li className="card-text">Difficulty: {problem.difficulty}</li>
          <li className="card-text">Platform: {problem.platform}</li>
          <li className="card-text">Topic: {problem.topic}</li>
          <li className="card-text">
            helpUsed: {problem.helpUsed ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Problem;
