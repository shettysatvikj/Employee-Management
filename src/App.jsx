
import Login from './components/auth/Login'
import Employee from './dashboard/Employee'
import Admin from './dashboard/Admin'

import { AuthContext } from './Context/AuthProvider'
import { useEffect, useState } from 'react'

import { useContext } from 'react'
import { setLocalStorage, getLocalStorage } from './LocalStorage/Localstorage';

// Initialize once in App.jsx or main entry
setLocalStorage();

const App = () => {
 useEffect(() => {
  getLocalStorage();
}, []);
  
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)

 const authData = useContext(AuthContext)

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userdata = JSON.parse(loggedInUser)
    setUser(userdata.role)
    setLoggedInUserData(userdata.data)
  }
}, [])


  
  const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee =authData.employees.find((e)=> email == e.email && e.password == password)
      if (employee){
     setUser('employee')
     setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))

      }

    }else{
      alert('Invaild Credentials')
    }
  }

  return (
    <div >
      {!user ? <Login handleLogin={handleLogin}/> :""}
     {user == 'admin' ? <Admin/> : (user == 'employee'? <Employee data ={loggedInUserData}/>:null)}
      </div>
  )
}

export default App