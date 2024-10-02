import React from 'react'
import {motion} from "framer-motion"
import mapImg from "../assets/world-map.png"

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
    {/*from section  */}
<div className=" space-y-8">
    <motion.h1 
    initial={{ opacity:0, y:100}}
    whileInView={{opacity:1, y:0 }}
    transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.2,
    }}
    className='text-4xl font-bold text-darkGray font-serif'> Buy our Product from anywhere</ motion.h1>
    <motion.div
    initial={{ opacity:0, y:100}}
    whileInView={{opacity:1, y:0 }}
    transition={{
        delay:0.4,
    }}
     className=" flex items-end gap-4">
        <input type="text" placeholder='Name' className='input-style w-full lg:[150px]' />
        <input type="email" placeholder='Email'className='input-style w-full' />
        </motion.div>
        <motion.div
        initial={{ opacity:0, y:100}}
        whileInView={{opacity:1, y:0 }}
        transition={{
            delay:0.6,
        }}
        className=" flex items-end gap-4">

        <input type="text" placeholder='Country' className='input-style w-full ' />

        <input type="text" placeholder='Zipcode'className='input-style w-full lg:[150px]' />
        </motion.div>
        <motion.button 
        initial={{ opacity:0, y:100}}
        whileInView={{opacity:1, y:0 }}
        transition={{
            delay:0.8,
        }}
        className='primary-btn w-full'> Order Now</motion.button>
    
</div>
    {/*location section  */}
   <div className=" col-span-2 ">
  
     <motion.img
       initial={{ opacity:0, scale:0.5}}
       whileInView={{opacity:1, scale:1}}
       transition={{
           type:"spring",
           stiffness:100,
           damping:10,
           delay:1,
       }}
    
      src={mapImg} alt=""  className=' w-full max-[500px] mx-auto'/>
    
    </div>
      </div>
    </div>
  )
}

export default WhereToBuy
