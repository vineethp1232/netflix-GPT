import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addItem, removeItem } from "../utils/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { HEADER_NETFLIX_LOGO, HEADER_USER_AVATAR } from "../utils/constants";
import { changeLanguage, gptSearch } from "../utils/Redux/configSlice";
import { LANGUAGES } from "../utils/constants";
import { addPopupTrailer, addSearch, toggleMoviePopup } from "../utils/Redux/movieSlice";
const Header = () => {
  const [isUserTab, setIsUserTab] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGpt = useSelector((store) => store.config.isGptSearch);
  const langRef = useRef(null);
  const search = useRef(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addItem({ uid, email, displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeItem());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleUserTab = () => {
    setIsUserTab((prev) => !prev);
  };
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang);

  const toggleGpt = () => {
    dispatch(gptSearch());
    isGpt ? navigate("/browse") : navigate("/gptSearch");
    dispatch(toggleMoviePopup({isPopup:false,id:null}))
    dispatch(addSearch(null))
    dispatch(addPopupTrailer(null))
  };

  const changeLang = () => {
    dispatch(changeLanguage(langRef.current.value));
  };
  const searchMovie=()=>{
    dispatch(addSearch(search.current.value))
    dispatch(toggleMoviePopup({isPopup:false,id:null}))
    navigate("/searchResults")
    dispatch(addPopupTrailer(null))
  }
  const getHome =()=>{
    navigate("/browse")
    dispatch(addSearch(null))
    dispatch(toggleMoviePopup({isPopup:false,id:null}))
    dispatch(addPopupTrailer(null))
  
  }
  return (
    <div className="bg-gradient-to-b from-black px-8 py-4 md:py-2 pb-16 md:pb-0 md:absolute z-20 w-full flex flex-col md:flex-row justify-between text-white bg-black md:bg-transparent">
      <img className=" w-32 md:w-48 cursor-pointer" src={HEADER_NETFLIX_LOGO} alt="logo" onClick={getHome}/>
      {user && (
        <button
          className=" bg-black rounded-md  px-0 w-28 md:w-auto md:px-6 py-0 border border-white h-8 relative left-36 md:-left-36 -top-2 md:top-6 hover:bg-gray-900"
          onClick={toggleGpt}
        >
          {isGpt ? "Home" : "Gpt Search"}
        </button>
      )}
      {isGpt && (
        <form>
          <select
            className="bg-black border border-white text-white h-8 rounded-md relative top-6 right-48 px-3 cursor-pointer"
            ref={langRef}
            onChange={changeLang}
            value={selectedLang}
          >
            {LANGUAGES.map((item) => (
              <option value={item.identifier}>{item.lang}</option>
            ))}
          </select>
        </form>
      )}
      {user && !isGpt && (
        <form
          className="absolute top-28 md:top-8 md:left-80"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="w-60  md:w-72 rounded-l-md  h-8 border border-white bg-black  bg-opacity-65 p-2 "
            ref={search}
          />
          <button className="border border-white py-1 px-4 bg-black rounded-r-md" onClick={searchMovie}>
            search
          </button>
        </form>
      )}
      {user && (
        <div className="flex md:justify-between py-4 absolute right-1 top-12 md:top-4">
          <img
            className="h-6 md:h-8"
            alt="user"
            src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          />
          <p onClick={toggleUserTab} className="cursor-pointer mx-3">
            {isUserTab ? "▲" : "▼"}
          </p>
        </div>
      )}
      {isUserTab && <User user={user} toggleUserTab={toggleUserTab} />}
    </div>
  );
};

export default Header;
