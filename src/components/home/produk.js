import React from 'react'
import Produkcard from './produkcard'

function Produk() {
  return (
    <div className='max-w-4xl mx-auto  mt-10'>
        <h2 className='text-3xl  text-center'> Our product <span className='font-bold'>Wooden</span><span className='text-purple-700 font-bold'>Go</span></h2>
       <p className='text-gray-500 text-center mb-5'>We have Timber Legalization Verification Standard Certification.Our products are as follows</p>
        <Produkcard/>

        <div className='text-center '>
          <a href='/product' className='px-3 py-2 bg-purple-500 hover:bg-purple-700 rounded-lg duration-300 text-white'>More Product</a>
        </div>
    </div>
  )
}

export default Produk