/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <>
    <div className="flex items-center h-screen w-full justify-center ">
    <div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://i.pinimg.com/564x/44/4b/d6/444bd6f7040c5ead15609750140c3713.jpg" alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer </p>
            </div>
            <table className="text-xs my-3">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">User ID:</td>
                    <td className="px-2 py-2">{id}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">Kolkata-******, West Bengal, India</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">+977 9874999999</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                </tr>
            </tbody></table>
        </div>
    </div>
</div>

</div>
    </>
    
  )
}

export default User