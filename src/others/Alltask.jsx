
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Alltask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#161a21] rounded-xl p-7 mt-6 border border-[#22262e] shadow-md text-white">

      {/* Header Row */}
      <div className="bg-[#1f242d] mb-4 p-4 rounded-lg flex justify-between font-semibold text-gray-300">
        <h2 className="w-1/5 text-lg">Name</h2>
        <h2 className="w-1/5 text-lg">New Task</h2>
        <h2 className="w-1/5 text-lg">Active</h2>
        <h2 className="w-1/5 text-lg">Completed</h2>
        <h2 className="w-1/5 text-lg">Failed</h2>
      </div>

      {authData.employees.map((elem, idx) => (
        <div
          key={idx}
          className="p-4 mb-3 rounded-lg bg-[#0f1217] border border-[#2c323b] flex justify-between"
        >
          <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>

          <span className="w-1/5 text-yellow-400 font-semibold">
            {elem.taskCount.newTask}
          </span>

          <span className="w-1/5 text-blue-300 font-semibold">
            {elem.taskCount.active}
          </span>

          <span className="w-1/5 text-green-400 font-semibold">
            {elem.taskCount.completed}
          </span>

          <span className="w-1/5 text-red-500 font-semibold">
            {elem.taskCount.failed}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Alltask;

