import React from 'react'
import rectangle39 from '../assets/images/Rectangle 39.png';
import img1 from '../assets/images/img1.png';
import rectangle6 from '../assets/images/Rectangle 6.png';
import rectangle7 from '../assets/images/Rectangle 7.png';
import img2 from '../assets/images/img2.png';
import rectangle12 from '../assets/images/Rectangle 12.png';
import rectangle13 from '../assets/images/Rectangle 13.png';
import rectangle14 from '../assets/images/Rectangle 14.png';
import rectangle15 from '../assets/images/Rectangle 15.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import starLogo from '../assets/images/starlogo.png';
import profileIcon from '../assets/images/profileicon.png'
import starg from '../assets/images/starg.png';
const Home = () => {
  return (
    <>
        {/* Hero Section */}
        <section
            className='relative h-screen bg-black bg-cover bg-center'
            style={{
              backgroundImage: `url(${rectangle39})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',  // Ensure the background image stays fixed
              overflow: 'hidden',
              zIndex: 1 // Ensure the hero section stays on top of other content
            }}
        >
            {/* Text */}
            <div className='absolute inset-0 flex flex-col justify-center items-start p-6 lg:pl-16 lg:pr-24 text-white'>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                  <span className='block text-center'>Empowering Your Business with IT Innovation</span>
                </h1    >
      
                {/* Paragraph */}
                <p className='mt-16 text-center w-full text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl'>
                  We specialize in delivering cutting-edge IT services tailored to meet the unique needs of 
                  businesses across industries. Our expert team is dedicated to providing comprehensive 
                  s    olutions that drive efficiency, enhance security, and foster innovation.
                </p    >
      
                {/* Buttons */}
                <div className='mt-32 ml-32 flex flex-col sm:flex-row gap-4'>
                  <button className='bg-[#6A54F4] px-6 py-3 hover:bg-[#5a45e3] transition-colors w-full sm:w-auto'>
                    BOOK A DEMO
                  </button>
                  <button className='bg-transparent border border-[#FFFFFF] px-6 py-3 w-full sm:w-auto'>
                    REQUEST A QUOTE
                  </button>
                </div>
            </div>
        </section>


        {/* GitHub display section */}
        <section className='flex flex-wrap items-center justify-between shadow-lg'>
            {[...Array(5)].map((_, index) => (
              <div key={index} className='p-4 md:p-6 lg:p-8 xl:p-14 flex-1 min-w-[200px]'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>GitHub</h1>
              </div>
            ))}
        </section>

        {/* image with explanation  */}

        <section className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center'>
              <div className='w-full max-w-7xl mx-auto mt-16 lg:mt-32'>
                <img
                  src={img1}
                  alt="img 1"
                  className='w-full h-auto max-w-full'
                />
                <p className='mt-4 mb-16 lg:mb-32 font-semibold text-base sm:text-lg md:text-xl w-full max-w-2xl mx-auto text-center lg:text-left'>
                  Give your company a faster, more agile way to work with freelancers and contractors.
                  Find, contract, and pay your external workforce in one click, with 100% compliance.
                </p>
              </div>
            </div>
        </section>

        {/* gray box */}

        <div className='bg-gray-300 p-4 m-4 md:m-8 rounded-lg'>
            <div className='text-left ml-32'>
              <h1 className='font-semibold text-lg sm:text-xl md:text-2xl m-4'>
                THAT LOT
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-800 w-full max-w-4xl m-4'>
                Give your company a faster, more agile way to work with freelancers and contractors. Find, contract, and
                pay your external workforce in one click, with 100% compliance.
              </p>
            </div>
        </div>

        {/*  Everything you need to get ahead */}
       <section className='mb-40 py-16 shadow-xl relative'>
            {/* 1st */}
            <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 mb-32'>
                          {/* Image Container */}
              <div className='mt-32 flex-shrink-0 w-full md:w-[60%] lg:w-[40%] mb-8 md:mb-0 md:mr-8'>
                <img src={rectangle6} alt='Mission Image' className='w-full h-full object-cover' />
              </div>
                          {/* Text Container */}
              <div className='w-full md:w-3/4 lg:w-2/3 flex flex-col justify-center'>
                <h1 className='text-3xl font-bold mb-4'>
                  Everything you need to get ahead
                </h1>
                            {/* Border and Dots */}
                <div className='relative mb-4 flex justify-start'>
                  <div className='w-96 border-t-4 border-[#6A54F4]'></div>
                </div>
                            <h1 className='text-4xl font-bold w-full max-w-lg p-6 m-5'>
                  The Fastest Hiring And Payments
                </h1>
                            <p className='text-lg text-gray-700 w-full max-w-md m-5'>
                  We specialize in delivering cutting-edge IT services 
                  tailored to meet the unique needs of businesses across 
                  industries. Our expert team is dedicated to providing 
                  comprehensive solutions that drive efficiency, enhance 
                  security, and foster innovation.
                </p>
                            <ul className='list-disc ml-10'>
                  <li className='font-semibold text-lg'>Managed IT Services:</li>
                  <li className='font-semibold text-lg'>Cloud Solution</li>
                  <li className='font-semibold text-lg'>Cybersecurity:</li>
                  <li className='font-semibold text-lg'>IT Consulting</li>
                </ul>
                            <h4 className='underline mt-8 font-semibold text-sm ml-10'>
                  Pay your external workforce in one click.
                </h4>
              </div>
            </div>
            {/* 2nd  */}
            <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 mb-32'>
              
                          {/* Text Container */}
              <div className='w-full md:w-3/4 lg:w-2/3 flex flex-col justify-center'>

                            <h1 className='text-4xl font-bold w-full max-w-lg p-6 m-5'>
                  The Fastest Hiring And Payments
                </h1>
                            <p className='text-lg text-gray-700 w-full max-w-md m-5'>
                  We specialize in delivering cutting-edge IT services 
                  tailored to meet the unique needs of businesses across 
                  industries. Our expert team is dedicated to providing 
                  comprehensive solutions that drive efficiency, enhance 
                  security, and foster innovation.
                </p>
                            <ul className='list-disc ml-10'>
                  <li className='font-semibold text-lg'>Managed IT Services:</li>
                  <li className='font-semibold text-lg'>Cloud Solution</li>
                  <li className='font-semibold text-lg'>Cybersecurity:</li>
                  <li className='font-semibold text-lg'>IT Consulting</li>
                </ul>
                            <h4 className='underline mt-8 font-semibold text-sm ml-10'>
                  Pay your external workforce in one click.
                </h4>
              </div>
                          {/* Image Container */}
                            <div className='mt-32 flex-shrink-0 w-full md:w-[60%] lg:w-[40%] mb-8 md:mb-0 md:mr-8'>
                               <img src={rectangle7} alt='Mission Image' className='w-full h-full object-cover' />
                            </div>
            </div>
            {/* 3rd  */}
            <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 mb-32'>
                          {/* Image Container */}
              <div className='mt-32 flex-shrink-0 w-full md:w-[60%] lg:w-[40%] mb-8 md:mb-0 md:mr-8'>
                <img src={img2} alt='Mission Image' className='w-full h-full object-cover' />
              </div>
                          {/* Text Container */}
              <div className='w-full md:w-3/4 lg:w-2/3 flex flex-col justify-center'>
                
               
                            <h1 className='text-4xl font-bold w-full max-w-lg p-6 m-5'>
                  The Fastest Hiring And Payments
                </h1>
                            <p className='text-lg text-gray-700 w-full max-w-md m-5'>
                  We specialize in delivering cutting-edge IT services 
                  tailored to meet the unique needs of businesses across 
                  industries. Our expert team is dedicated to providing 
                  comprehensive solutions that drive efficiency, enhance 
                  security, and foster innovation.
                </p>
                            <ul className='list-disc ml-10'>
                  <li className='font-semibold text-lg'>Managed IT Services:</li>
                  <li className='font-semibold text-lg'>Cloud Solution</li>
                  <li className='font-semibold text-lg'>Cybersecurity:</li>
                  <li className='font-semibold text-lg'>IT Consulting</li>
                </ul>
                            <h4 className='underline mt-8 font-semibold text-sm ml-10'>
                  Pay your external workforce in one click.
                </h4>
              </div>
            </div>


                    {/* gray box -2 */}

        <div className='bg-gray-300 p-4  m-4 md:m-8 rounded-lg'>
            <div className='text-left ml-32'>
              <h1 className='font-semibold text-lg sm:text-xl md:text-2xl m-4'>
                THAT LOT
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-800 w-full max-w-4xl m-4'>
                Give your company a faster, more agile way to work with freelancers and contractors. Find, contract, and
                pay your external workforce in one click, with 100% compliance.
              </p>
            </div>


            <div className='text-center mb-6 mr-3 md:text-right mt-8'>
          <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors'>
            BOOK A DEMO
          </button>
        </div>
        </div>
        </section>

        {/* black box */}

        <section className='mt-20 mb-4 bg-black text-white relative p-8 md:p-16 pb-24'>
  <div className='text-center p-4 md:p-8 mt-8  relative'>
    {/* Outer Container */}
    <div className='w-full max-w-6xl mx-auto flex justify-between gap-4 pt-1 pb-8'>
  {/* Image 1 */}
  <div className='bg-black w-[24%] relative'>
    {/* Square Container */}
    <div className='relative pb-[100%]'>
      <img src={rectangle12} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
    </div>
  </div>
  {/* Image 2 */}
  <div className='bg-black w-[24%] relative'>
    {/* Square Container */}
    <div className='relative pb-[100%]'>
      <img src={rectangle13} alt="Team Member 2" className='absolute inset-0 w-full h-full object-cover' />
    </div>
  </div>
  {/* Image 3 */}
  <div className='bg-black w-[24%] relative'>
    {/* Square Container */}
    <div className='relative pb-[100%]'>
      <img src={rectangle14} alt="Team Member 3" className='absolute inset-0 w-full h-full object-cover' />
    </div>
  </div>
  {/* Image 4 */}
  <div className='bg-black w-[24%] relative'>
    {/* Square Container */}
    <div className='relative pb-[100%]'>
      <img src={rectangle15} alt="Team Member 4" className='absolute inset-0 w-full h-full object-cover' />
    </div>
  </div>
</div>


  </div>

  {/* Description Box */}
  <div className='bg-black text-white p-8 text-center w-full max-w-xs md:max-w-sm mx-auto'>
    <p className='text-xl font-bold text-left md:text-base'>
      We specialize in delivering cutting edge 
      IT services tailored to meet the unique 
      needs of businesses across industries. 
      Our expert team is dedicated to 
      providing comprehensive solutions that 
      drive efficiency, enhance security, and 
      foster innovation.               
    </p>
  </div>
        </section>

        {/* Don t just take our word for it.. */}
        <section className='mt-16 mb-16 bg-white text-black relative'>
            <div className='text-center'>
              <h1 className='text-4xl font-normal relative'> Don t just take our word for it..
              <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-96 border-t-4 border-[#6A54F4]'>
                  </div>
                  <span className='absolute  left-[calc(50% + 50px)] top-[calc(12px + 4px)] top-2 text-5xl text-[#6A54F4]'>
                      ...
                  </span>
              </h1>
            </div>
    
            <div className='relative mt-20 mx-auto h-auto max-w-full flex flex-col items-center justify-center text-center px-4'>
                {/* Left Icon */}
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                  <FiChevronLeft className='ml-4 sm:ml-6 md:ml-10 lg:ml-12 text-[#000000] font-bold' />
                </div>
          
      
          
                {/* Right Icon */}
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                  <FiChevronRight className='mr-4 sm:mr-6 md:mr-10 lg:mr-12 text-[#000000] font-bold'/>
                </div>
                  {/* 3 Boxes */}
                  <div className='flex flex-col md:flex-row items-center justify-center mt-12 md:mt-40 gap-6 mx-auto mb-20'>
                     {/* Review Box 1 */}
                    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
                            <div className='flex flex-col items-center'>
                              <div className='flex items-center justify-between w-full mb-2'>
                                {/* Star Logo */}
                                <img src={starLogo} alt="Star Logo" className='w-10 h-10 text-red-500' />
                                
                                {/* REVIEW Text */}
                                <h1 className='text-lg md:text-xl font-normal flex-grow text-center'>
                                  REVIEW
                                </h1>
                              </div>
                              
                              {/* Line Under Review */}
                              <div className='border-b border-black w-96 md:w-48 lg:w-64 mt-7 mb-4'></div>
                              <div className='flex items-center mb-4'>
                            {/* Profile Icon */}
                            <img 
                              src={profileIcon} 
                              alt="Profile Icon" 
                              className='w-16 h-16 rounded-full border border-gray-300 mr-4 object-cover' 
                            />
                            {/* Profile Info */}
                            <div className='flex flex-col'>
                              {/* Person's Name */}
                              <span className='text-sm md:text-base font-medium'>
                                JOHN SMITH
                              </span>
                              {/* Job Title */}
                              <span className='text-gray-300 text-sm'>
                                CUSTOMER AGENT
                              </span>
                            </div>
                        </div>
                        
                        
                        
                              
                              {/* Description */}
                              <p className='text-sm p-6 text-left md:text-base'>
                                Give your company a faster, more agile 
                                way to work with freelancers and 
                                contractors. Find contract and pay your 
                                external workforce in one click, with 
                                100% compliance.
                              </p>
                            </div>
                    </div>
                    
                    {/* Review Box 2*/}
                    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
                            <div className='flex flex-col items-center'>
                              <div className='flex items-center justify-between w-full mb-2'>
                                {/* Star Logo */}
                                <img src={starg} alt="Star Logo" className='w-10 h-10 text-green-500' />
                                
                                {/* REVIEW Text */}
                                <h1 className='text-lg md:text-xl font-normal flex-grow text-center'>
                                  REVIEW
                                </h1>
                              </div>
                              
                              {/* Line Under Review */}
                              <div className='border-b border-black w-96 md:w-48 lg:w-64 mt-7 mb-4'></div>
                              <div className='flex items-center mb-4'>
                            {/* Profile Icon */}
                            <img 
                              src={profileIcon} 
                              alt="Profile Icon" 
                              className='w-16 h-16 rounded-full border border-gray-300 mr-4 object-cover' 
                            />
                            {/* Profile Info */}
                            <div className='flex flex-col'>
                              {/* Person's Name */}
                              <span className='text-sm md:text-base font-medium'>
                                JOHN SMITH
                              </span>
                              {/* Job Title */}
                              <span className='text-gray-300 text-sm'>
                                CUSTOMER AGENT
                              </span>
                            </div>
                        </div>
                        
                        
                        
                              
                              {/* Description */}
                              <p className='text-sm p-6 text-left md:text-base'>
                                Give your company a faster, more agile 
                                way to work with freelancers and 
                                contractors. Find contract and pay your 
                                external workforce in one click, with 
                                100% compliance.
                              </p>
                            </div>
                    </div>

                    {/* Review Box 3*/}
                    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
                            <div className='flex flex-col items-center'>
                              <div className='flex items-center justify-between w-full mb-2'>
                                {/* Star Logo */}
                                <img src={starLogo} alt="Star Logo" className='w-10 h-10 text-red-500' />
                                
                                {/* REVIEW Text */}
                                <h1 className='text-lg md:text-xl font-normal flex-grow text-center'>
                                  REVIEW
                                </h1>
                              </div>
                              
                              {/* Line Under Review */}
                              <div className='border-b border-black w-96 md:w-48 lg:w-64 mt-7 mb-4'></div>
                              <div className='flex items-center mb-4'>
                            {/* Profile Icon */}
                            <img 
                              src={profileIcon} 
                              alt="Profile Icon" 
                              className='w-16 h-16 rounded-full border border-gray-300 mr-4 object-cover' 
                            />
                            {/* Profile Info */}
                            <div className='flex flex-col'>
                              {/* Person's Name */}
                              <span className='text-sm md:text-base font-medium'>
                                JOHN SMITH
                              </span>
                              {/* Job Title */}
                              <span className='text-gray-300 text-sm'>
                                CUSTOMER AGENT
                              </span>
                            </div>
                        </div>
                        
                        
                        
                              
                              {/* Description */}
                              <p className='text-sm p-6 text-left md:text-base'>
                                Give your company a faster, more agile 
                                way to work with freelancers and 
                                contractors. Find contract and pay your 
                                external workforce in one click, with 
                                100% compliance.
                              </p>
                            </div>
                    </div>
                  </div>
            </div>
            
                {/* gray box -3 */}
        
                <div className='bg-gray-300 p-4  m-4 md:m-8 rounded-lg'>
                    <div className='text-left ml-32'>
                      <h1 className='font-semibold text-lg sm:text-xl md:text-2xl m-4'>
                        THAT LOT
                      </h1>
                      <p className='text-base sm:text-lg md:text-xl text-gray-800 w-full max-w-4xl m-4'>
                        Give your company a faster, more agile way to work with freelancers and contractors. Find, contract, and
                        pay your external workforce in one click, with 100% compliance.
                      </p>
                    </div>
        
        
                    <div className='text-center mb-6 mr-3 md:text-right mt-8'>
                  <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors'>
                    BOOK A DEMO
                  </button>
                </div>
                </div>
        </section>
    </>        
  )
}

export default Home