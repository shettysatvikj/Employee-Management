
import { useEffect, useState } from "react";
import Header from '../others/Header';
import TaskRecord from '../others/TaskRecord';
import Tasklist from '../others/Tasklist';

const Employee = ({ data }) => {
  const [employee, setEmployee] = useState(data);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("employees")) || [];
    const updated = all.find((emp) => emp.id === data.id);

    if (updated) {
      setEmployee(updated);  // ⬅️ now Employee page gets updated tasks
    }
  }, []);

  return (
    <div className='h-screen w-screen py-7 px-10 bg-[#1b1a1a]'>
      <Header data={employee} />
      <TaskRecord data={employee} />
      <Tasklist data={employee} />
    </div>
  );
};

export default Employee;
