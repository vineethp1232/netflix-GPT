import React, { useRef, useState } from "react";
import Header from "./Header";
import {validateInput} from "../utils/Validate"
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage]=useState(null)
  const dispatch=useDispatch();
  const toggleSign = () => {
    setIsSignIn((prev) => !prev);
  };
const emailRef=useRef(null)
const passwordRef=useRef(null)
const nameRef=useRef(null)
  const handleClick =()=>{
  const message=validateInput(emailRef.current.value,passwordRef.current.value)
  setErrorMessage(message)
  if(message) return ;
  if(!isSignIn){
 createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    // const user = userCredential.user;
   
    updateProfile(auth.currentUser, {
      displayName:nameRef.current.value
    }).then(() => {
      // Profile updated!
      
      const {uid,email,displayName}=auth.currentUser;
      dispatch(addItem({uid,email,displayName}))
      
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ""+ errorMessage)
  });

  }else{
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "" + errorMessage)
    });
  }
  }
  return (
    <div className="text-white">
      <Header />
      <form onSubmit={e=>e.preventDefault()} className="absolute w-full md:w-3/12 bg-black bg-opacity-70 py-7 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-normal px-6">
        <h1 className="font-bold text-3xl my-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn === false && (
          <input
            type="text"
            placeholder="name"
            ref={nameRef}
            className="w-full border border-white rounded-md bg-gray-800 bg-opacity-80 py-3 px-3 my-3"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          className="w-full border border-white rounded-md bg-gray-800 bg-opacity-80 py-3 px-3 my-3"
        />
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          className="w-full  border border-white rounded-md  bg-gray-800 bg-opacity-80 py-3 px-3 my-3"
        />
       { errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button className="bg-red-700 rounded-md w-full py-2 my-3" onClick={handleClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <div className="my-7">
            <span>New to Netflix? </span>
            <span onClick={toggleSign} className="font-bold cursor-pointer">
              Sign Up now
            </span>
          </div>
        )}
      </form>

      <div>
        <img className="h-screen md:h-auto object-cover"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
