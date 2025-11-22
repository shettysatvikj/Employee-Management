import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../LocalStorage/Localstorage"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [datauser, setDatauser] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employees,admin}=getLocalStorage()
  setDatauser({employees,admin})
  }, [])
  
  return (
    <div><AuthContext.Provider value={datauser}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider