import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);


export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);


  useEffect(() => {
    if(!token){
      return setUser(null)
    }
    const fetchUser = async () => {
      const {data} = await axios.get('https://ktx-be.herokuapp.com/getUser', {
        headers:{
          'Authorization': token,
        }
      })
      setUser(data)
    }
    fetchUser()
  },[token])

  return (
    <UserContext.Provider value={{
      user, setToken, token
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
