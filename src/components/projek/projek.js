import React from 'react'
import {List} from '../../data/Data'

function ProjekList() {
  return (
<div className='max-w-4xl mx-auto mt-15'>
    <h3 className='font-bold text-2xl text-center'>Our <span className='text-purple-700'>Product</span></h3>
    <p className='text-gray-500 text-center'>We have Timber Legalization Verification Standard Certification.Our products are as follows</p>
    <div className='flex flex-wrap mt-20'>
    {List.map((val, id) => {
      const {img,nama,material,panjang,lebar,tebal,lem,finis} = val
    return(
    <div className='md:w-4/12' key={id}>
        <div className='mb-12 px-7 cursor-pointer'>
            <div className='rounded-md shadow-md overflow-hidden'>
                <img src={img} className='w-full'></img>
            </div>
            <h3 className='font-semibold text-xl mt-5 mb-3  uppercase dark:text-gray-100'>{nama}</h3>
            <p className='text-gray-500  dark:text-gray-300'>Material	:	{material}</p>
            <p className='text-gray-500  dark:text-gray-300'>Panjang	:	{panjang}</p>
            <p className='text-gray-500  dark:text-gray-300'>Lebar	:	{lebar}</p>
            <p className='text-gray-500  dark:text-gray-300'>Tebal	:	{tebal}</p>
            <p className='text-gray-500  dark:text-gray-300'>Lem	:	{lem}</p>
            <p className='text-gray-500  dark:text-gray-300'>Finishing	:	{finis}</p>
      
             </div>
    </div>
       )
    })}
</div>
</div>
    
  )
}

export default ProjekList