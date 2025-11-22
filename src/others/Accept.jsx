// import React from 'react'

// const Accept = ({data}) => {
   
    
//   return (
//     <div> <div className='bg-blue-500 shrink-0 h-full px-5 py-3 rounded w-[300px]'>
//         <div className='flex items-center justify-between'>
//             <h2 className='bg-red-600 text-base font-semibold py-1 px-3 rounded'>{data.category}</h2>
//             <h3 className='text-sm font-medium'>{data.date}</h3>
//         </div>
//         <div>
//             <h2 className='mt-4 text-lg font-semibold'>{data.title}</h2>
//             <p className='mt-2 text-sm font-medium'>{data.description} </p>
//         </div>
//         <div className='mt-4'>
//             <button className='bg-black rounded text-sm py-1 px-2 text-white'>Accept Task</button>
//         </div>
//         </div>
//         </div>
//   )
// }

// export default Accept
import React from 'react';

const Accept = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px]">
      <div className="bg-[#1e1f26] border border-[#2a2b33] shadow-xl 
                      rounded-2xl px-5 py-4 h-full 
                      hover:shadow-[#3b82f633] transition-all duration-300">

        {/* Top Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold px-3 py-1 rounded-full 
                         bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white">
            {data.category}
          </h2>

          <h3 className="text-xs font-medium text-gray-400">{data.date}</h3>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="mt-4 text-lg font-semibold text-white">{data.title}</h2>
          <p className="mt-2 text-sm font-medium text-gray-400">
            {data.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 w-full">
          <button
            className="w-full text-sm py-2 rounded-xl 
                       bg-[#3b82f6]/20 border border-[#3b82f6]/30 
                       text-[#3b82f6] font-semibold
                       hover:bg-[#3b82f6]/30 transition-all"
          >
            Accept Task
          </button>
        </div>

      </div>
    </div>
  );
};

export default Accept;
