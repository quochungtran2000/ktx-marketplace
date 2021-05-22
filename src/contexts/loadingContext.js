import { createContext, useState, useContext } from 'react';

export const LoadingContext = createContext(null);

export const useLoading = () => useContext(LoadingContext);


export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoadingContext.Provider value={{
      loading, setLoading
    }}>
      {props.children}
    </LoadingContext.Provider>
  )
}
