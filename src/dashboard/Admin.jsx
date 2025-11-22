import React from 'react'
import Header from '../others/Header'
import AdminPage from '../others/AdminPage'
import Alltask from '../others/Alltask'
import Header1 from '../others/Header1'

const Admin = () => {
  return (
    <div className='bg-[#141414] h-full py-7 px-10 w-full'>
        <Header1/>
        <AdminPage/>
        <Alltask/>
    </div>
  )
}

export default Admin