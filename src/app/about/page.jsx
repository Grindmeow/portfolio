"use client"

import { motion } from 'framer-motion'
const AboutPage = () => {
  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

      {/* CONTAINER */}
      <div>

        {/* TEXT CONTAINER */}
        <div className='p h-full p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 
        '>

          {/* BIOGRAPHY CONTAINER */}
          <div>Biography</div>
          {/* SKILLS CONTAINER */}
          <div>SKILLS</div>
          {/* EXPERIENCE CONTAINER */}
          <div>EXPERIENCE</div>
        </div>

        {/* SVG CONTAINER */}
        <div className='hidden'></div>
      </div>
    </motion.div>
  )
}

export default AboutPage
