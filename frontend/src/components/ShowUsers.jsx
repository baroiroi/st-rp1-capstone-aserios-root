// import { Users } from '../services/Users'
// import { useEffect, useState } from 'react'
// import { Loader } from './Loader'
// import { EditUser } from './EditUser'
// import React from 'react'
// import { Modal } from './Modal'

// export const ShowUsers = () => {
//     const [userDetails, setUserDetails] = useState(false)
//     const [ToggleEdit, setToggleEdit] = useState(false)

//     useEffect(() => {
//         getAllUsers()
//             .then((users) => {
//                 setUserDetails(users)
//             })
//             .catch((error) => console.log(error))
//     }, [])

//     const handleEdit = () => {
//         setToggleEdit((prev) => !prev)
//     }

//     return (
//         //read
//         <>
//             {/* <div
//                 className={`fixed flex items-center justify-center ${
//                     ToggleEdit ? '' : 'hidden'
//                 } w-full h-screen backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50`}
//             ></div> */}
//             {userDetails ? (
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3">
//                                     Name
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Address
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Role
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Actions
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userDetails.map((user, index) => {
//                                 return (
//                                     <tr
//                                         key={index}
//                                         className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                                     >
//                                         <td className="px-6 py-4">
//                                             {user.name}
//                                         </td>
//                                         <td className="px-6 py-4">
//                                             {user.address}
//                                         </td>
//                                         <td className="px-6 py-4">
//                                             {user.role}
//                                         </td>
//                                         <td className="flex gap-5 px-6 py-4">
//                                             <EditUser user={user} />
//                                             <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-blue-700">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 <Loader />
//             )}
//         </>
//     )
// }
