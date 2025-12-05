
import React from "react";

const Newtask = ({ data, onAccept }) => (
  <div className="shrink-0 h-full w-[300px]">
    <div className="bg-[#1e1f26] border border-[#2a2b33] shadow-xl rounded-2xl px-5 py-4 h-full hover:shadow-[#daf63b4b] transition-all duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#f9fd132c] to-[#ebd725a8] text-white">
          {data.category}
        </h2>
        <h3 className="text-xs font-medium text-gray-400">{data.date}</h3>
      </div>

      <div>
        <h2 className="mt-4 text-lg font-semibold text-white">{data.title}</h2>
        <p className="mt-2 text-sm font-medium text-gray-400">{data.description}</p>
      </div>

      <div className="mt-6 w-full">
        <button
          onClick={onAccept}
          className="w-full text-sm py-2 rounded-xl bg-[#d0e612]/20 border border-[#e1fa02]/30 text-[#f3f716] font-semibold hover:bg-[#e1fa02]/30 transition-all"
        >
          Accept Task
        </button>
      </div>
    </div>
  </div>
);

export default Newtask;
