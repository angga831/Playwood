import React from 'react'

function Kementrian() {
  return (
    <div className='max-w-2xl mx-auto text-center mt-20 px-2 '>
        <h2 className='font-semibold text-2xl'>We are register on</h2>
        <p className='text-gray-400'>This company has been registered in various ministries in Indonesia</p>
        <div className='flex align-center justify-center gap-5 md:gap-11 mt-5 '>
            <img src='../../images/dagang.png' className='w-2/12 opacity-80 hover:opacity-100 duration-300'></img>
            <img src='../../images/ham.png' className='w-2/12 opacity-80 hover:opacity-100 duration-300'></img>
            <img src='../../images/pajak.png' className='w-2/12 opacity-80 hover:opacity-100 duration-300'></img>
            <img src='../../images/sucofindo.png' className='w-3/12 opacity-80 hover:opacity-100 duration-300'></img>
        </div>
    </div>
  )
}

export default Kementrian