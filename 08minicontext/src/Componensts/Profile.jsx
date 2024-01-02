/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import UserContext from '../context/User.Context'
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please login</div>
    else return <div>welcome {user.username}</div>
  
}

export default Profile