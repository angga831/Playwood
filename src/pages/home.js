import React from 'react'
import {motion} from 'framer-motion'
import Foto from '../components/home/foto'
import Hero from '../components/home/hero'
import Kementrian from '../components/home/kementrian'
import Produk from '../components/home/produk'
import Unggul from '../components/home/unggul'

function Home() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
     <Hero/>
     <Foto/>
     <Unggul/>
     <Produk/>
     <Kementrian/>
   </motion.div>
  )
}

export default Home