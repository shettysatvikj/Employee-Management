import React from 'react'
import Header from '../others/Header'
import TaskRecord from '../others/TaskRecord'
import Tasklist from '../others/Tasklist'

const Employee = ({data}) => {
 
  return (
    <div className='h-full w-screen py-7 px-10  bg-[#1b1a1a]' >
    
        <Header data={data}/>
        <TaskRecord data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default Employee