/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserContext from "./User.Context";

const UserContextProvider = ({children})=>{
    const [user,setUser]= useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider