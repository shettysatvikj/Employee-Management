// import React, { useState } from 'react'

// const AdminPage = () => {
//   const [title, setTitle] = useState('')
//   const [date, setDate] = useState('')
//   const [assignto, setAssignto] = useState('')
//   const [category, setCategory] = useState('')
//   const [description, setDescription] = useState('')
//   const [task, setTask] = useState({})
//   const onSubmit=(e)=>{
//     e.preventDefault()
//     setTask({title,date,assignto,category,description,active:true,newTask:true,failed:true,completed:false})
//     const data =JSON.parse(localStorage.getItem("employees"))
//     data.forEach(function(e){
//       if(assignto == e.firstName){
//         e.tasks.push(task)
//         console.log(e)
//       }
//     })
//     setAssignto('')
//     setCategory('')
//     setDate('')
//     setTitle('')
//     setDescription('')
//   }
//   return (
//     <div className='h-[65%] rounded px-5 py-4 mt-5 w-full flex justify-between items-center text-white bg-[#292828]'>
//         <form onSubmit={onSubmit} className='w-full flex justify-between ' >
//         <div className='w-[40%]' >
//             <h3>Task Title</h3>
//             <input value={title} onChange={(e)=>{
//               setTitle(e.target.value)
//             }} type="text" className='w-full' placeholder='Make UI Design' />
//             <h3>Date</h3>
//             <input value={date} onChange={(e)=>{
//               setDate(e.target.value)
//             }} type='date' className='w-full' />
//             <h3>Assign to</h3>
//             <input value={assignto} onChange={(e)=>{
//               setAssignto(e.target.value)
//             }} type="text" className='w-full' placeholder='Employee name' />
//             <h3>Category</h3>
//             <input value={category} onChange={(e)=>{
//               setCategory(e.target.value)
//             }} type="text" className='w-full' placeholder='design,dev,etc' />
//         </div>
//         <div className='w-[50%] flex flex-col'>
//             <h3>Description</h3>
//             <textarea value={description} onChange={(e)=>{
//               setDescription(e.target.value)
//             }} className='h-50 rounded  border-2 border-white'></textarea>
//             <button className='bg-emerald-400 rounded cursor-pointer mt-8 px-7 py-3'>Create Task</button>
//         </div>
//         </form>
//     </div>
//   )
// }

// export default AdminPage 
import React, { useState } from 'react';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignto, setAssignto] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setTask({
      title,
      date,
      assignto,
      category,
      description,
      active: true,
      newTask: true,
      failed: true,
      completed: false
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach(function (e) {
      if (assignto === e.firstName) {
        e.tasks.push(task);
      }
    });

    setAssignto('');
    setCategory('');
    setDate('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="bg-[#161a21] rounded-xl p-7 mt-6 border border-[#22262e] shadow-md">

      <h2 className="text-2xl font-semibold text-white mb-5">
        Create New Task
      </h2>

      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="flex flex-col gap-4">

          <label className="text-gray-300">Task Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Make UI Design"
            className="px-4 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />

          <label className="text-gray-300">Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
          />

          <label className="text-gray-300">Assign To</label>
          <input
            value={assignto}
            onChange={(e) => setAssignto(e.target.value)}
            placeholder="Employee name"
            className="px-4 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />

          <label className="text-gray-300">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="design, dev, etc"
            className="px-4 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col">

          <label className="text-gray-300">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-40 px-4 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button className="mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg shadow-md active:scale-95 transition-all">
            Create Task
          </button>

        </div>
      </form>
    </div>
  );
};

export default AdminPage;
