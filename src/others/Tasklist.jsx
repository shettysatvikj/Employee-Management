
import React, { useState, useEffect } from "react";
import Active from "./Active";
import CompletedTask from "./CompletedTask";
import Failed from "./Failed";
import Newtask from "./NewTask";

const Tasklist = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  // LOAD TASKS FROM LOCALSTORAGE
  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const emp = employees.find((e) => e.id === data.id);

    if (emp) {
      setTasks(emp.tasks || []);
    }
  }, [data.id]);

  // SAVE UPDATED TASKS BACK TO STORAGE
  const saveTasksToStorage = (updatedTasks) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const updated = employees.map((e) =>
      e.id === data.id ? { ...e, tasks: updatedTasks } : e
    );

    localStorage.setItem("employees", JSON.stringify(updated));
  };

  // ACCEPT NEW TASK → move to active
  const handleAccept = (index) => {
    const updated = tasks.map((task, idx) =>
      idx === index
        ? { ...task, active: true, newTask: false }
        : task
    );

    setTasks(updated);
    saveTasksToStorage(updated);
  };

  // UPDATE STATUS
  const updateStatus = (index, newStatus) => {
    const updated = tasks.map((task, idx) =>
      idx === index
        ? {
            ...task,
            active: newStatus === "active",
            completed: newStatus === "completed",
            failed: newStatus === "failed",
            newTask: false,
          }
        : task
    );

    setTasks(updated);
    saveTasksToStorage(updated);
  };

  return (
    <div
      id="task"
      className="overflow-x-auto flex flex-nowrap gap-4 h-[53%] w-full mt-10 p-2 text-white"
    >
      {tasks.map((task, idx) => {
        if (task.newTask)
          return (
            <Newtask
              key={idx}
              data={task}
              onAccept={() => handleAccept(idx)}
            />
          );

        if (task.active)
          return (
            <Active
              key={idx}
              data={task}
              onStatusChange={(newStatus) => updateStatus(idx, newStatus)}
            />
          );

        if (task.completed)
          return (
            <CompletedTask
              key={idx}
              data={task}
              onStatusChange={(newStatus) => updateStatus(idx, newStatus)}
            />
          );

        if (task.failed)
          return (
            <Failed
              key={idx}
              data={task}
            onStatusChange={(newStatus) => updateStatus(idx, newStatus)}
            />
          );

        return null;
      })}
    </div>
  );
};

export default Tasklist;
