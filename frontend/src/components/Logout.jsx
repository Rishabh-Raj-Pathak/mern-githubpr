import React from 'react'
import {MdLogout} from "react-icons/md"


function Logout() {
  return <div>
      <img src="ndwndinw" alt="avatar" className='w-10 h-10 rounded-full border border-gray-800'/>

        <div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-900'>
            <MdLogout size={22}/>
        </div>
    </div>
  
}

export default Logout
