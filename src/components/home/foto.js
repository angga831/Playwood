import React,{useState,useEffect,useRef } from 'react'
import {motion} from 'framer-motion'
import {foto} from '../../data/Data'


function Foto() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <motion.div className='max-w-5xl mx-auto overflow-hidden px-2'>
      <motion.div ref={carousel} className='flex gap-5'>
      {foto.map((val, id) => {
      const {img} = val
      return(
        <motion.div
        drag="x"
        dragConstraints={{right:0, left: -width }} 
        className='w-60 py-14 ' key={id}>
         
        <img src={img} alt='gambar1'  className='rounded-xl  shadow-lg'></img>
        </motion.div>
        )
      })}
        
        </motion.div>

    </motion.div>
  )
}

export default Foto