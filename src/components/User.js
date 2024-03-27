import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { USER_USER_AVATAR } from '../utils/constants';
const User = ({user}) => {
    
const navigate=useNavigate();
const handleClick=()=>{
    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
     
}
   
  return (
    <div className='absolute right-1 top-10 bg-black bg-opacity-80 w-56 p-4 rounded-sm my-4'>
     <div className='flex my-2'>
      <img alt="user" className=""  src={USER_USER_AVATAR}/>
      <h2 className='px-4'>{user?.displayName}</h2>
      </div>
      <hr/>
      <h3 className='py-3 cursor-pointer'onClick={handleClick}>Sign Out</h3>
    </div>
  )
}

export default User
