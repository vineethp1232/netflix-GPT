import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import User from './User'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addItem,removeItem } from '../utils/Redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { HEADER_USER_AVATAR } from '../utils/constants'
const Header = () => {
const [isUserTab,setIsUserTab]=useState(false)
const dispatch=useDispatch();
const navigate=useNavigate();
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      
const {uid,email,displayName}=user;
      dispatch(addItem({uid,email,displayName}))
      navigate("/browse")
      // ...
    } else {
      // User is signed out
      // ...
     dispatch(removeItem())
     navigate("/")
      
    }
  });
  return ()=> unsubscribe();
},[])

const toggleUserTab =()=>{
  setIsUserTab(prev=>!prev)
}
const user = useSelector(store=>store.user)
  return (
    <div className='bg-gradient-to-b from-black px-8 py-2 absolute z-20 w-screen flex justify-between text-white'>
      <img className=' w-48 '
      
      src={HEADER_USER_AVATAR} alt="logo"/>
{user && <div className="flex justify-between py-4 ">
  <img  className="h-8"alt="user"src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
  <p onClick={toggleUserTab} className='cursor-pointer mx-3'>{isUserTab?"▲":"▼"}</p>
  </div>}
  {
    isUserTab && <User user={user} toggleUserTab={toggleUserTab}/>
  }
    </div>
  )
}

export default Header
