import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentMember, setCurrentMember] = useState(
    JSON.parse(localStorage.getItem('member' || null))
  );

  const

  return <div>AuthProvider</div>;
};

export default AuthProvider;
