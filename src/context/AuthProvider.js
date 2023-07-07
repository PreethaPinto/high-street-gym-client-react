import { createContext, useState } from 'react';

const AuthContext = createContext({})

const AuthProvider = ({children}) => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider