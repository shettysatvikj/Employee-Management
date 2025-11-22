// import React from 'react'

// const Failed = ({data}) => {
//   return (
//     <div> <div className='bg-red-500 shrink-0 h-full px-5 py-3 rounded w-[300px]'>
//         <div className='flex items-center justify-between'>
//             <h2 className='bg-red-600 text-base font-semibold py-1 px-3 rounded'>{data.category}</h2>
//             <h3 className='text-sm font-medium'>{data.date}</h3>
//         </div>
//          <div>
//             <h2 className='mt-4 text-lg font-semibold'>{data.title}</h2>
//             <p className='mt-2 text-sm font-medium'>{data.description} </p>
//         </div>
//         <div className='mt-4'> 
//             <button className='bg-red-600 rounded py-1 px-2 text-sm'>
//                 Failed
//             </button>
//         </div>
//         </div>
//         </div>
//   )
// }

// export default Failed
import React from "react";

const Failed = ({ data }) => {
  return (
    <div className="shrink-0 w-[300px] h-full p-5 rounded-xl 
      bg-gradient-to-br from-red-900/40 to-red-700/20
      border border-red-400/30 backdrop-blur-md shadow-lg hover:shadow-red-500/20 transition">
      
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold px-3 py-1 rounded-lg 
            bg-red-500/20 border border-red-400/40 text-red-300">
          {data.category}
        </h2>
        <h3 className="text-xs text-gray-300">{data.date}</h3>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-white">{data.title}</h2>
        <p className="mt-2 text-sm text-gray-300">{data.description}</p>
      </div>

      {/* Button */}
      <button className="mt-6 w-full py-2 rounded-lg text-sm font-semibold
          bg-red-600/30 text-red-300 border border-red-400/40
          hover:bg-red-600/50 transition">
        Failed
      </button>
    </div>
  );
};

export default Failed;
