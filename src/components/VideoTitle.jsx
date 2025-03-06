import React from 'react';
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from to-black '>
        <h1 className='text-white font-bold text-6xl '>{title}</h1>
        <p className='text-white text-lg py-6 w-1/4'>{overview}</p>
        <div className='flex'>
            <button className='bg-white p-4 px-12 text-xl rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-50'><FaPlay /> Play</button>
            <button className=' mx-2 bg-white  p-4 px-12 text-xl opacity-40 rounded-2xl cursor-pointer'>More Info</button>
        </div>
    </div>
  )
};
export default VideoTitle;