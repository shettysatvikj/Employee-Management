
import React, { useEffect, useState } from "react";

const TaskRecord = ({ data }) => {
  const [counts, setCounts] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0,
  });

  useEffect(() => {
    // load tasks from localStorage (based on employee id)
    const savedTasks = JSON.parse(localStorage.getItem(`tasks_${data.id}`));

    const currentTasks = savedTasks || data.tasks;

    // calculate counts
    const newCounts = {
      newTask: currentTasks.filter(t => t.newTask).length,
      active: currentTasks.filter(t => t.active).length,
      completed: currentTasks.filter(t => t.completed).length,
      failed: currentTasks.filter(t => t.failed).length,
    };

    setCounts(newCounts);
  }, [data]);

  return (
    <div className="w-full flex gap-6 mt-10">

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-yellow-400">
          {counts.newTask}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">New Tasks</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-blue-400">
          {counts.active}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Active Tasks</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-green-400">
          {counts.completed}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Completed</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-red-500">
          {counts.failed}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Failed</p>
      </div>

    </div>
  );
};

export default TaskRecord;
