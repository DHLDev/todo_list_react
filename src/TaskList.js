import React from "react";
import { useJobs } from "./varielbel";
function TaskList() {
  const { jobs } = useJobs();

  return (
    <div className="col l-7 task-form-list">
      <div className="check-all">
        <div className="check-all-wrap">
          <input type="checkbox" className="checkbox-all-box checkbox" />
          <span className="check-all-title">All complete</span>
        </div>
        <div className="clear-todo">Clear todo complete</div>
      </div>
      <ul className="task-list">
        {jobs.map((job, index) => (
          <li className="task-item" key={index}>
            <div className="task-view">
              <div className="view">
                <input type="checkbox" className="task-item-check-box checkbox" />
                <span className="task-view-item">{job}</span>
              </div>
              <div className="action">
                <button type="submit" className="btn btn-edit">
                  <i className="fas fa-pen"></i>
                </button>
                <button type="submit" className="btn btn-download">
                  <i className="fas fa-download"></i>
                </button>
                <button type="submit" className="btn btn-delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
