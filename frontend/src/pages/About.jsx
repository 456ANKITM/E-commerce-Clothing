import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-112.5  ' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto velit consequatur nihil asperiores, quod numquam adipisci aliquid doloremque, reiciendis quisquam quam ipsum distinctio deleniti sequi error repellat sunt odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis quibusdam, quam perferendis pariatur porro sit aspernatur! Molestiae quod officia sint ex tempore ducimus, dolor neque, ad possimus magnam consequuntur!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit odio error non reiciendis unde deserunt ratione ex esse est.</p>
         </div> 
      </div>
      <div className='text-xl py-4 '>
             <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsa at consequatur dolorem harum sapiente excepturi nostrum accusamus a nisi corporis quia incidunt impedit deleniti ullam odit delectus fuga eligendi.</p>
         </div>
         <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsa at consequatur dolorem harum sapiente excepturi nostrum accusamus a nisi corporis quia incidunt impedit deleniti ullam odit delectus fuga eligendi.</p>
         </div>
         <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsa at consequatur dolorem harum sapiente excepturi nostrum accusamus a nisi corporis quia incidunt impedit deleniti ullam odit delectus fuga eligendi.</p>
         </div>
      </div> 
      <NewsLetterBox />
    </div>
  )
}

export default About
