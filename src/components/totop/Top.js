import React from 'react'
import { BiChevronsUp } from "react-icons/bi";

function Top() {
    const goToBtn = () =>{
        window.scrollTo({ top:0, left:0, behavior:"smooth"});
    }
  return (
    <div className='text-3xl md:hidden' onClick={goToBtn}>
        <h3 className='cursor-pointer fixed bottom-4 right-7 bg-purple-700 rounded-md text-white'><BiChevronsUp/></h3>
    </div>
  )
}

export default Top