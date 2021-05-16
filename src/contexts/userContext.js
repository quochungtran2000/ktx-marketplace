import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

const useUser = () => useContext(UserContext);


const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState({});

  const onLogin = () => {

  }

  useEffect(() => {
    const fetchUser = async () => {
      console.log('login');
    }
    fetchUser()
  },[])

  return (
    <UserContext.Provider value={{
      user, setToken
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default { useUser, UserProvider }