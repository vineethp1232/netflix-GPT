import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    
    <div className='absolute pt-12 md:pt-52 pl-10 md:pl-20 text-white aspect-video w-screen bg-gradient-to-r from-black' >
    <h1 className='text-2xl md:text-3xl font-bold w-3/5 text-shadow-lg'>{title}</h1>
    <p className='w-2/5 pt-5 hidden sm:block'>{overview}</p>
    <div className='flex pt-4 '>
        <button className='bg-white text-black rounded-md px-6 md:px-8 py-1 md:py-2 hover:bg-opacity-80 mr-2' onClick={()=>{
          alert("Subscribe to watch")
        }}> Play </button>
        <button className='bg-gray-500 text-white rounded-md px-6 md:px-8 py-1 md:py-2 bg-opacity-60 hover:bg-opacity-20'>More Info</button>
    </div>
    </div>
    
  )
}

export default VideoTitle
