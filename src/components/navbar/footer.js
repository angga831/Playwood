import React from 'react'
import {FaFacebookF,FaGithub,FaInstagram,FaEnvelope} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
	<div className='max-w-4xl mx-auto px-4 sm:px-9 lg:px-12 py-10 mt-20 flex flex-wrap'>
	
		<div className='w-full '>
		<div className='flex py-5 gap-5 text-2xl dark:text-gray-400  justify-center'>
            <a href='' className='hover:text-gray-400 dark:hover:text-white hover:scale-150 transition'><FaGithub/></a>
            <a href='' className='hover:text-blue-600  hover:scale-150 transition'><FaFacebookF/></a>
            <a href='' className='hover:text-red-500  hover:scale-150 transition'><FaInstagram/></a>
            <a href='' className='hover:text-gray-500 dark:hover:text-white hover:scale-150 transition'><FaEnvelope/></a>
          </div>

		  <div className='flex justify-center text-gray-400 mt-4'>
			<h3 className='text-xl  font-semibold '>2022</h3>
			<div className='py-1 text-xl px-1'>
			<BiCopyright/>
			</div>
			<h2 className='text-xl font-semibold uppercase'>Angga Bimantoro</h2>
		  </div>

		</div>

	</div>
  )
}

export default Footer