
import React from "react";

const Failed = ({ data,onStatusChange }) => {
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
      <button
       onClick={() => onStatusChange(data.id, "failed")}
       className="mt-6 w-full py-2 rounded-lg text-sm font-semibold
          bg-red-600/30 text-red-300 border border-red-400/40
          hover:bg-red-600/50 transition">
        Failed
      </button>
    </div>
  );
};

export default Failed;

