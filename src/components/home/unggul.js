import React from 'react'
import { BsFillAwardFill,BsGraphUp,BsPeopleFill } from "react-icons/bs";


function Unggul() {
  return (
    <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl text-center text-gray-500 '>We are <span className='font-bold text-black'>the best</span> choice for your supplier of <span className='text-purple-600 font-bold'>Playwood</span></h2>
    <div className='flex flex-wrap gap-2 mt-10'>

        <div className='w-full px-10 sm:px-0 gap-1 sm:w-3/12 mx-auto  mt-5' >
            <span className='text-4xl text-yellow-400 animate-pulse'><BsFillAwardFill/></span>
            <h2 className='text-xl font-semibold '>Sustainable</h2>
            <p className='text-gray-400'>Sustainable Condition for Better Life: Nature is
             important so we want to ensure that our next generation still feel the benefits.
        </p>     
        </div>
      
        <div className='w-full px-10 sm:px-0 gap-1 sm:w-3/12 mx-auto  mt-5' >
            <span className='text-4xl text-blue-600 animate-pulse'><BsPeopleFill/></span>
            <h2 className='text-xl font-semibold '>Commitment</h2>
            <p className='text-gray-400'>Our Commitment to Relate Stakeholders: We really care and are willing to help
             the welfare of farmers, fishermen, communities, and relate stakeholders.
      </p>     
        </div>


        <div className='w-full px-10 sm:px-0 gap-1 sm:w-3/12 mx-auto  mt-5' >
            <span className='text-4xl text-green-400  animate-pulse'><BsGraphUp/></span>
            <h2 className='text-xl font-semibold '>Growth</h2>
            <p className='text-gray-400'>Always Grow Up to Learn: Until now and the next, we still learning to improve our
             company to fit and be the solution for our customer needed of frozen crab and the variants.
      </p>     
        </div>
      
          
    </div>
    </div>
  )
}

export default Unggul