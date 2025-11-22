// import React from 'react'

// const NewTask = ({data}) => {
//   return (
//     <div>
//         <div className='bg-yellow-500 shrink-0 h-full px-5 py-3 rounded w-[300px]'>
//         <div className='flex items-center justify-between'>
//             <h2 className='bg-red-600 text-base font-semibold py-1 px-3 rounded'>{data.category}</h2>
//             <h3 className='text-sm font-medium'>{data.date}</h3>
//         </div>
//         <div>
//             <h2 className='mt-4 text-lg font-semibold'>{data.title}</h2>
//             <p className='mt-2 text-sm font-medium'>{data.description} </p>
//         </div>
//          <div className='flex mt-4 justify-between'>
//             <button className='bg-green-500 rounded py-1 px-2 text-sm'>Mark as Complete</button>
//             <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as failed</button>
//         </div>
//         </div>
       
//         </div>
//   )
// }

// export default NewTask
import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px]">
      <div className="bg-[#1e1f26] border border-[#2a2b33] shadow-xl 
                      rounded-2xl px-5 py-4 h-full 
                      hover:shadow-yellow-400/30 transition-all duration-300">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold px-3 py-1 rounded-full 
                         bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
            {data.category}
          </h2>

          <h3 className="text-xs font-medium text-gray-400">{data.date}</h3>
        </div>

        {/* Body */}
        <div>
          <h2 className="mt-4 text-lg font-semibold text-white">{data.title}</h2>
          <p className="mt-2 text-sm font-medium text-gray-400">
            {data.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 w-full flex gap-3">
          <button
            className="w-1/2 text-sm py-2 rounded-xl 
                       bg-green-400/10 border border-green-400/30 
                       text-green-300 font-semibold
                       hover:bg-green-400/20 transition-all"
          >
            ✔ Complete
          </button>

          <button
            className="w-1/2 text-sm py-2 rounded-xl 
                       bg-red-400/10 border border-red-400/30 
                       text-red-300 font-semibold
                       hover:bg-red-400/20 transition-all"
          >
            ✘ Failed
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewTask;
