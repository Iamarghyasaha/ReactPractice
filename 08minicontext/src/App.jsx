/* eslint-disable no-unused-vars */
import React from 'react'
import UserContextProvider from './context/User.ContextProvider'
import Login from './Componensts/Login'
import Profile from './Componensts/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
