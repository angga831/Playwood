import React from 'react'
import About from '../components/about/about'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
      <About/>
    </motion.div>

  )
}

export default Contact