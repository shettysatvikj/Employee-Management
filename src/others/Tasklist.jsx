// import React from 'react'

// import NewTask from './NewTask'
// import Accept from './Accept'
// import CompletedTask from './CompletedTask'
// import Failed from './Failed'

// const Tasklist = ({data}) => {
//   return (
//     <div id='task' className=' overflow-x-auto  text-white flex  flex-nowrap gap-3  h-[53%] w-full mt-10'>
//        {data.tasks.map((e,idx)=>{
//           if(e.active){
//              return <Accept key={idx} data={e}/>
//           }
//           if(e.newtask){
//              return <NewTask key={idx} data={e}/>
//           }
//           if(e.completed){
//              return <CompletedTask key={idx} data={e}/>
//           }
//           if(e.failed){
//              return <Failed key={idx} data={e}/>
//           }
//        })}
          
//     </div>
//   )
// }

// export default Tasklist
import React from "react";

import NewTask from "./NewTask";
import Accept from "./Accept";
import CompletedTask from "./CompletedTask";
import Failed from "./Failed";

const Tasklist = ({ data }) => {
  return (
    <div
      id="task"
      className="overflow-x-auto flex flex-nowrap gap-4 h-[53%] w-full mt-10 p-2 text-white"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) return <Accept key={idx} data={task} />;
        if (task.newTask) return <NewTask key={idx} data={task} />;
        if (task.completed) return <CompletedTask key={idx} data={task} />;
        if (task.failed) return <Failed key={idx} data={task} />;
      })}
    </div>
  );
};

export default Tasklist;
