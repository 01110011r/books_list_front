import { googleLogout } from '@react-oauth/google'
// import { jwtDecode } from 'jwt-decode'
import React, { useContext } from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { GlobalContext } from '../Contextbox'


export default function Menu() {
  const {menu} = useContext(GlobalContext);

    const token = localStorage.getItem("token")
    // const credentials = jwtDecode(token ? token : "");
  return (
    <div className={`bg-gray-300/60 absolute top-10 right-1 py-6 px-4 border rounded-lg transition delay-50 ${!menu && 'scale-0'}`}>

    <h4>Username</h4>

    {
      !token
      ? <div>
        <button onClick={() => googleLogout()}>
          <div className='flex items-center gap-x-2'>
          <MdOutlineLogout/>
          <span>
            Logout
          </span>
          </div>
        </button>
      </div>
      : <div></div>
    }

    </div>
  )
}
