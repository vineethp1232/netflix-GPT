import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { USER_USER_AVATAR } from '../utils/constants';
import { useSelector } from 'react-redux';
const User = ({user,toggleGpt}) => {
    
const navigate=useNavigate();
const handleClick=()=>{
    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
     
}

  const isGpt=useSelector(store=>store.config.isGptSearch) 
  return (
    <div className='absolute right-1 top-24 md:top-10 bg-black bg-opacity-90 w-56 p-4 rounded-sm my-4 z-30'>
     <div className='flex my-2 bg-black w-full'>
      <img alt="user" className="rounded-full md:rounded-none w-6 md:w-auto"  src={USER_USER_AVATAR}/>
      <h2 className='px-4'>{user?.displayName}</h2>
      </div>
      <hr/>
      {!isGpt && <button className='block md:hidden py-2 cursor-pointer' onClick={toggleGpt}>Gpt search</button>}
    
      <h3 className='pb-2 md:py-3 cursor-pointer'onClick={handleClick}>Sign Out</h3>
    </div>
  )
}

export default User
