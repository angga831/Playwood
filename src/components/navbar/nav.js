import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link} from 'react-router-dom'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div>
      <nav className="bg-white-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-9 lg:px-12 py-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <h1 className="text-3xl font-semibold">Wooden<span className="font-bold text-purple-700 animate-ping">Go</span></h1>
              </div>
              <div className="hidden md:block">
                <div className=" ml-60 mt-2 flex items-baseline font-semibold space-x-4 text-gray-400">
                 
				<Link
	
					to=""
					smooth={true}
					offset={50}
					duration={500}
					className="cursor-pointer hover:bg-purple-400 duration-300   hover:text-white px-3 py-1 rounded-md text-lg"
				>
					Home
				</Link>
				<Link
		
					
					to="about"
					smooth={true}
					offset={50}
					duration={500}
					className="cursor-pointer duration-300  hover:text-white px-3 py-1  rounded-md text-lg hover:bg-purple-400"
				>
					About
				</Link>
				<Link
					
					to="product"
					smooth={true}
					offset={50}
					duration={500}
					className="cursor-pointer  duration-300  hover:bg-purple-400  hover:text-white px-3 py-1 rounded-md text-lg "
				>
					Product
				</Link>
				
      
                </div>
              </div>
            </div>


            <div className="-mr-2 flex md:hidden px-3">
          
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-500  inline-flex items-center justify-center p-2 rounded-md text-white   hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			

     

			  <Link
                	 to=""
                	 smooth={true}
                	 offset={50}
                	 duration={500}
                	className="cursor-pointer hover:bg-purple-400 duration-300 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            	>
            	 Home
            	</Link>
            	<Link
                	
                
                	to="about"
                	smooth={true}
                	offset={50}
                	 duration={500}
                	className="cursor-pointer hover:bg-purple-400 duration-300 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            	>
            	About
            	</Link>

            	<Link
                	 
                	 to="product"
                	 smooth={true}
                	 offset={50}
                	 duration={500}
                	 className="cursor-pointer hover:bg-purple-400 duration-300 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            	>
                	 Produk
            	</Link>
            
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;