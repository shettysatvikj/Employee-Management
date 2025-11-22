// import React, { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider";

// const Alltask = () => {
//   const authData = useContext(AuthContext);
//   return (
//     <div className="bg-[#292828]  rounded p-7 mt-5">
//       <div className="bg-red-500 mb-3 p-4 rounded text-white flex justify-between ">
//         <h2 className="w-1/5  font-medium text-lg ">Name</h2>
//         <h5 className="w-1/5  font-medium text-lg ">Active</h5>
//         <h5 className="w-1/5  font-medium text-lg ">NewTask</h5>
//         <h5 className="w-1/5 font-medium text-lg ">Completed</h5>
//         <h5 className="w-1/5  font-medium text-lg ">Failed</h5>
//       </div>
//       {authData.employees.map(function (elem,idx) {
//         return (
//           <div key={idx} className="border-emerald-600 border-2 rounded mb-3 p-4  text-white flex justify-between ">
//             <h2 className="w-1/5 font-medium text-lg ">{elem.firstName}</h2>
//             <h3 className="w-1/5  font-medium text-blue-400 text-lg ">
//               {elem.taskCount.newTask}
//             </h3>
//             <h5 className="w-1/5  font-medium text-yellow-300 text-lg ">
//               {elem.taskCount.active}
//             </h5>
//             <h5 className="w-1/5  font-medium text-green-400 text-lg ">
//               {elem.taskCount.completed}
//             </h5>
//             <h5 className="w-1/5  font-medium text-red-600 text-lg ">
//               {elem.taskCount.failed}
//             </h5>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Alltask;
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

          <span className="w-1/5 text-blue-400 font-semibold">
            {elem.taskCount.newTask}
          </span>

          <span className="w-1/5 text-yellow-300 font-semibold">
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

