import React from 'react'
import { Link } from 'react-router-dom';
import ItemsContainer from "./ItemsContainer";


function Footer() {
  return (
      <div className='bg-gray-100 mt-10'>
    <footer className="max-w-4xl mx-auto ">
    <div className=" md:justify-between md:items-center sm:px-12 px-4 bg-gray-300] py-7">
      <h1
        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
       text-center w-full "
      >
     Wooden  <span className="text-purple-700">Go</span>
      </h1>
      <div className='mt-5 text-center'>
      <p className=''>PT WooodenGo international was established in 2013 in Lumajang City, east Java. Indonesia actively participates in developing the State of Indonesia through the wood processing industry.</p>
 
   </div>
    </div>
    <ItemsContainer />
    <div className='max-w-3xl mx-auto '>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8"
    >
      <span>© 2020 Appy. All rights reserved.</span>
      <span>Terms · Privacy Policy</span>
    </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer