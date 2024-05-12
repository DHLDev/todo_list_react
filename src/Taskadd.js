import React, { useState } from "react";
import { useJobs } from "./varielbel";

function TaskAdd() {
  const [job, setJob] = useState("");
  const { setJobs } = useJobs();
  const handleAdd = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };

  return (
    <div className="col l-5 task-add">
      <p className="task-label">Todos</p>
      <div className="task-todo-input">
        <input type="text" placeholder="Nhập việc cần làm" className="task-todo-input-item"  value={job} onChange={(e) => setJob(e.target.value)}
        />
        <button type="button" className="btn btn-addTodo" onClick={handleAdd}>
          add
        </button>
      </div>
    </div>
  );
}

export default TaskAdd;
