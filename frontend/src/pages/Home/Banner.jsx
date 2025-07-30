import React from 'react'
import bannerImg from "../../assets/banner.png"


export default function Banner() {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 '>
         {/* right side */}
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>
        {/* left side */}
      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7 '>New Releases This Week</h1>
        <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. Form heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
        <button className='bg-amber-500 rounded-xl font-semibold px-10 py-3'>
            Subscribe
        </button>
      </div>

       
    </div>
  )
}
