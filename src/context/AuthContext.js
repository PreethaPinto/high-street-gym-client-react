import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // Send cookies with the request
  crossDomain: true, // Treat the request as cross-origin
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await axiosInstance.post('/login', inputs);
    document.cookie = 'token=' + res.data.token;

    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    axios.post('http://localhost:8080/logout');
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
