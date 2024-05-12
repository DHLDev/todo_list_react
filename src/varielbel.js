import { useState } from "react";

// Tạo một custom hook để quản lý trạng thái jobs
export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  
  return { jobs,setJobs };
};
