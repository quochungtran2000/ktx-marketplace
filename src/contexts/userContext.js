import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);


export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState({});
console.log(token)


  useEffect(() => {
    const fetchUser = async () => {
      const {data} = await axios.get('https://ktx-be.herokuapp.com/user/getUser', {
        headers:{
          'Authorization': token,
          // 'Access-Control-Allow-Origin' : '*',
          // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          // 'Accept': "*/*",

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
