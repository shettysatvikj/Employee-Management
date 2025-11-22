// import React from 'react'

// const TaskRecord = ({data}) => {
//   return (
//     <div className='w-full flex gap-5 mt-10'>
//         <div className='bg-yellow-400 p-8 rounded-2xl  w-[25%]'>
//         <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
//         <h2 className='text-2xl font-bold'>New Task</h2>
//         </div>
//         <div className='bg-blue-400 p-8 rounded-2xl  w-[25%]'>
//         <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
//         <h2 className='text-2xl font-bold'>Active Task</h2>
//         </div>
//         <div className='bg-green-400  p-8 rounded-2xl  w-[25%]'>
//         <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
//         <h2 className='text-2xl font-bold'>Completed Task</h2>
//         </div>
//         <div className='bg-red-400 p-8 rounded-2xl  w-[25%]'>
//         <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
//         <h2 className='text-2xl font-bold'>Failed Task</h2>
//         </div>
//     </div>
//   )
// }

// export default TaskRecord
import React from "react";

const TaskRecord = ({ data }) => {
  return (
    <div className="w-full flex gap-6 mt-10">

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-yellow-400">
          {data.taskCount.newTask}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">New Tasks</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-blue-400">
          {data.taskCount.active}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Active Tasks</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-green-400">
          {data.taskCount.completed}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Completed</p>
      </div>

      <div className="bg-[#1d2129] border border-[#2c323b] p-6 rounded-xl w-1/4 shadow">
        <h2 className="text-3xl font-bold text-red-500">
          {data.taskCount.failed}
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">Failed</p>
      </div>

    </div>
  );
};

export default TaskRecord;
