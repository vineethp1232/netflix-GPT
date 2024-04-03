import React, { useRef } from "react";
import { BACKGROUND_IMG, LANGUAGES } from "../utils/constants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GptSearch = () => {
     const searchQuery=useRef(null);
    const languageIdentifier = useSelector((store) => store.config.lang);
    const language = LANGUAGES.filter(item=>item.identifier===languageIdentifier)

   const handleClick =async ()=>{
    const aiSearch="act as a movie recommendation system for the query:"+searchQuery.current.value+" and give 5 comma seperated movie names as in example given ahead, examble:Don,kinglier,kal ho na ho, don't breathe, avengers"
      const movieNames = await openai.chat.completions.create({
        messages: [{ role: 'user', content:aiSearch  }],
        model: 'gpt-3.5-turbo',
      });
      
      
    }
  return (
    <div>
      <img src={BACKGROUND_IMG} className="h-screen md:h-auto object-cover"/>
      <form onSubmit={e=>e.preventDefault()}className="absolute left-2 md:left-72 top-32 z-20  bg-black bg-opacity-80 p-2 w-full md:w-1/2 grid grid-cols-12 rounded-sm">
        <input
          type="text"
          ref={searchQuery}
          className=" bg-black border border-white h-10 col-span-9 md:col-span-10 rounded-md mx-2 md:mx-4 text-white p-2 "
          placeholder={language[0].placeHolder}
        />
        <button className="text-white bg-red-800 h-10 rounded-lg px-2 md:px-4 col-span-2 md:col-span-2" onClick={handleClick}>
          {language[0].button}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
