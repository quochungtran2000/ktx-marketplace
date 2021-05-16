import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);


export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);
console.log(token)


  useEffect(() => {
    if(!token){
      return setUser(null)
    }
    const fetchUser = async () => {
      const {data} = await axios.get('http://localhost:1708/getUser', {
        headers:{
          'Authorization': token,
        }
      })
      console.log(data)
      setUser(data)
    }
    fetchUser()
  },[token])

  return (
    <UserContext.Provider value={{
      user, setToken
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
