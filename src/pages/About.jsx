import React from 'react'
import rectangle1 from '../assets/images/Rectangle1.png';
import rectangle55 from '../assets/images/Rectangle 55.png';
import { FaFacebook, FaInstagram,FaLinkedin } from 'react-icons/fa';
import mission from '../assets/images/mission.png';
import goal from '../assets/images/goal.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const About = () => {
  return (
    <>
       {/* hero section */}
       <section
              className='relative min-h-screen bg-black bg-cover bg-center z-10'
              style={{ 
                backgroundImage: `url(${rectangle1})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center right', 
                backgroundAttachment: 'fixed'  // Ensure the background image stays fixed
              }}
            >
              {/* Background image */}
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage: `url(${rectangle1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center right',
                  backgroundAttachment: 'fixed',  // Ensure the background image stays fixed
                  filter: 'brightness(1) contrast(1.2)', // Adjusted for better sharpness
                }}
              ></div>
          
            {/* Text */}
            <div className='absolute inset-0 flex flex-col justify-center items-start p-6 lg:pl-16 lg:pr-24 text-white -top-5 lg:-top-10' >
              <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl -mt-44'>
                <span className='block'>OUR STORY </span>
              </h1>
          
              {/* Paragraph */}
              <p className='mt-6 text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl max-w-lg '>
                Delivering cutting-edge digital solutions tailored to your business needs
              </p>
          
              {/* Buttons */}
              <div className='mt-32 flex flex-col sm:flex-row gap-4'>
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

        {/* welcome */}
        <section className='mt-16 ml-16 sm:ml-8 md:ml-4 lg:ml-16'>
            <div className='text-center'>
                <div className='mb-20 relative inline-block'>
                    <h1 className='font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl relative inline-block'>Welcome
                       <div className='absolute left-0 bottom-[-8px] border-t-4 border-[#6A54F4] w-3/4'></div>
                      <span className='absolute right-[-30px] top-[10px]  text-5xl text-[#6A54F4]'>. . .</span> 
                    </h1>
                </div>
                <div className='mb-32 mx-auto w-full max-w-6xl text-left px-4 sm:px-6 md:px-8'>
                    <p className='text-lg sm:text-base md:text-lg lg:text-xl font-semibold '>
                        background or why we start a company ...Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh 
                        proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem 
                        ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices 
                        enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.
                    </p>
                </div>
            </div>
        </section>
          
        {/* our team */}

        <section>
            <div className='text-center'>
                <div className='mb-20 relative inline-block'>
                    <h1 className='font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl relative inline-block'>Our Team
                       <div className='absolute left-0 bottom-[-8px] border-t-4 border-[#6A54F4] w-3/4'></div>
                      <span className='absolute right-[-30px] top-[10px]  text-5xl text-[#6A54F4]'>. . .</span> 
                    </h1>
                </div>

                <div className='relative'>
                    {/* Outer Container */}
                    <div className='w-full max-w-6xl overflow-x-auto mx-auto flex justify-start pt-1 pb-8'>
                      {/* Inner Container */}
                        <div className='flex space-x-4'>
                          {/* Image 1 */}
                            <div className='bg-black flex-shrink-0 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[45%] h-[70%] sm:h-[25%] md:h-[20%] lg:h-[100%] relative'>
                            {/* Square Container */}
                                <div className='relative pb-[100%]'>
                                  <img src={rectangle55} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
                                </div>
                                {/* Content Below Image */}
                                <div className='text-center mt-4 mb-8'>
                                  <h1 className='text-lg font-semibold text-white'>Member Name</h1>
                                  <p className='text-sm text-gray-300'>Position in Company</p>
                                  <div className='flex w-full justify-center gap-4 mt-2'>
                                    <li className='flex'>
                                      <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                          </div>
                                      
                        {/* Image 2 */}
                        <div className='bg-black flex-shrink-0 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[45%] h-[70%] sm:h-[25%] md:h-[20%] lg:h-[100%] relative'>
                            {/* Square Container */}
                            <div className='relative pb-[100%]'>
                              <img src={rectangle55} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
                            </div>
                                {/* Content Below Image */}
                                <div className='text-center mt-4 mb-8'>
                                  <h1 className='text-lg font-semibold text-white'>Member Name</h1>
                                  <p className='text-sm text-gray-300'>Position in Company</p>
                                  <div className='flex w-full justify-center gap-4 mt-2'>
                                    <li className='flex'>
                                      <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                          </div>
                                  
                        {/* Image 3 */}
                        <div className='bg-black flex-shrink-0 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[45%] h-[70%] sm:h-[25%] md:h-[20%] lg:h-[100%] relative'>
                        {/* Square Container */}
                            <div className='relative pb-[100%]'>
                              <img src={rectangle55} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
                            </div>
                                {/* Content Below Image */}
                                <div className='text-center mt-4 mb-8'>
                                  <h1 className='text-lg font-semibold text-white'>Member Name</h1>
                                  <p className='text-sm text-gray-300'>Position in Company</p>
                                  <div className='flex w-full justify-center gap-4 mt-2'>
                                    <li className='flex'>
                                      <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                          </div>
                                  
                        {/* Image 4 */}
                        <div className='bg-black flex-shrink-0 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[45%] h-[70%] sm:h-[25%] md:h-[20%] lg:h-[100%] relative'>
                            {/* Square Container */}
                            <div className='relative pb-[100%]'>
                              <img src={rectangle55} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
                            </div>
                                {/* Content Below Image */}
                                <div className='text-center mt-4 mb-8'>
                                  <h1 className='text-lg font-semibold text-white'>Member Name</h1>
                                  <p className='text-sm text-gray-300'>Position in Company</p>
                                  <div className='flex w-full justify-center gap-4 mt-2'>
                                    <li className='flex'>
                                      <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                          </div>
                                  
                        {/* Image 5 */}
                        <div className='bg-black flex-shrink-0 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[45%] h-[70%] sm:h-[25%] md:h-[20%] lg:h-[100%] relative'>
                            {/* Square Container */}
                            <div className='relative pb-[100%]'>
                              <img src={rectangle55} alt="Team Member 1" className='absolute inset-0 w-full h-full object-cover' />
                            </div>
                                {/* Content Below Image */}
                                <div className='text-center mt-4 mb-8'>
                                  <h1 className='text-lg font-semibold text-white'>Member Name</h1>
                                  <p className='text-sm text-gray-300'>Position in Company</p>
                                  <div className='flex w-full justify-center gap-4 mt-2'>
                                    <li className='flex'>
                                      <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                    <li className='flex'>
                                      <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24} />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* our mission */}

        <section className='mb-32 py-8 shadow-xl relative'>
  <div className='flex flex-wrap items-center justify-between max-w-6xl mx-auto px-4 mb-32 flex-col-reverse md:flex-row'>
    {/* Text Container */}
    <div className='w-full md:w-1/2 lg:w-2/3 pl-8 relative space-x-6'>
      <h1 className='text-3xl font-bold mb-4 space-x-6'>
        Our Mission
      </h1>
      
      {/* Border and Dots */}
      <div className='relative mb-4'>
        <div className='w-32 border-t-4 border-[#6A54F4]'></div>
      </div>

      <p className='mt-20 text-lg text-gray-700'>
        Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. 
        Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pellentesque dictum viverra tempor. 
        Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi 
        morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo 
        donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit.
      </p>
    </div>

    {/* Image Container */}
    <div className='flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0'>
      <img src={mission} alt='Mission Image' className='w-full h-auto object-cover' />
    </div>
  </div>
        </section>



        {/* our goals */}

        
        <section className='mb-40 py-8 shadow-xl relative'>
  <div className='flex flex-wrap items-center justify-between max-w-6xl mx-auto px-4 mb-32'>
    {/* Text Container */}
    <div className='w-full md:w-1/2 lg:w-2/3 pr-8'>
      <h1 className='text-3xl font-bold mb-4'>
        Our Goals
      </h1>
      
      {/* Border and Dots */}
      <div className='relative mb-4'>
        <div className='w-32 border-t-4 border-[#6A54F4]'></div>
        
      </div>

      <p className='text-lg text-gray-700'>
        Lorem ipsum dolor sit amet consectetur. At leo ornare 
        sagittis volutpat feugiat volutpat nisl bibendum. Ac 
        faucibus enim justo tellus bibendum venenatis vel. 
        Elementum pellentesque dictum viverra tempor. Odio 
        pellentesque viverra fringilla eleifend laoreet commodo 
        odio elementum et. Massa a quis facilisi morbi at sit 
        consequat. Feugiat gravida justo massa et hac. Varius 
        sed orci tortor et nibh. Pretium leo donec tortor nibh 
        non pretium fringilla arcu. Nunc quis velit lacus sit.
      </p>
    </div>

    {/* Image Container */}
    <div className='flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0'>
      <img src={goal} alt='Mission Image' className='w-full h-auto object-cover' />
    </div>
  </div>
        </section>

        {/* Why You Chose Us */}
        <section className='mt-20 mb-4 bg-black text-white relative p-8 md:p-16 pb-24'>
  <div className='text-center p-4 md:p-8 mt-8 relative'>
    <h1 className='text-3xl md:text-4xl font-normal relative'>
      Why You Chose Us

      {/* Border */}
      <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-40 md:w-72 border-t-4 border-[#6A54F4]'></div>

      {/* Dots */}
      <span className='absolute left-[calc(50% + 8px)] md:left-[calc(50% + 52px)] top-[calc(12px + 4px)] text-3xl md:text-5xl text-[#6A54F4]'>
        ...
      </span>
    </h1>
  </div>

  {/* 3 Boxes */}
  <div className='flex flex-col md:flex-row justify-center mt-12 md:mt-40 gap-6 mx-auto mb-20'>
    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
      <h1 className='text-lg md:text-xl font-normal mb-4'>Customer-Centric Approach</h1>
      <p className='text-sm md:text-base'>
        Lorem ipsum dolor sit amet consectetur. Tortor 
        sapien commodo nisi volutpat. Lobortis 
        sed. Lorem ipsum dolor sit amet consectetur. 
        Tortor sapien commodo nisi volutpat. Lobortis 
        sed.                
      </p>
    </div>

    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
      <h1 className='text-lg md:text-xl font-normal mb-4'>Innovation</h1>
      <p className='text-sm md:text-base'>
        Lorem ipsum dolor sit amet consectetur. Tortor 
        sapien commodo nisi volutpat. Lobortis 
        sed. Lorem ipsum dolor sit amet consectetur. 
        Tortor sapien commodo nisi volutpat. Lobortis 
        sed.                
      </p>
    </div>

    <div className='bg-white text-black p-8 text-center w-full max-w-xs md:max-w-sm'>
      <h1 className='text-lg md:text-xl font-normal mb-4'>Reliability</h1>
      <p className='text-sm md:text-base'>
        Lorem ipsum dolor sit amet consectetur. Tortor 
        sapien commodo nisi volutpat. Lobortis 
        sed. Lorem ipsum dolor sit amet consectetur. 
        Tortor sapien commodo nisi volutpat. Lobortis 
        sed.                
      </p>
    </div>
  </div>
        </section>


        {/* Testimonial's */}

        <section className='mt-16 mb-16 bg-white text-black relative'>
            <div className='text-center'>
              <h1 className='text-4xl font-normal relative'>Testimonial's 
              <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-40 border-t-4 border-[#6A54F4]'>
                  </div>
                  <span className='absolute  left-[calc(50% + 40px)] top-[calc(12px + 4px)] top-2 text-5xl text-[#6A54F4]'>
                      ...
                  </span>
              </h1>
            </div>
    
            <div className='relative mt-20 mx-auto h-auto max-w-full flex flex-col items-center justify-center text-center px-4'>
          {/* Left Icon */}
          <div className='absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            <FiChevronLeft className='ml-4 sm:ml-6 md:ml-10 lg:ml-12 text-[#000000] font-bold' />
          </div>
    
          {/* Content */}
          <div className='flex flex-col items-center mb-4 w-full max-w-4xl px-4 shadow-xl p-6 sm:p-8 md:p-10 lg:p-12'>
            <div className='flex items-center justify-center sm:justify-start w-full mb-4'>
              <img src={logo} alt="company logo" className='mr-2 w-16 h-16 sm:w-20 sm:h-20' />
              <h2 className='font-bold text-xl sm:text-2xl md:text-3xl text-[#6A54F4]'>company name</h2>
            </div>
            <p className='max-w-xl mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-10 text-left font-medium text-sm sm:text-base md:text-lg'>
              Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
              Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
              Orci turpis magna mauris elit aliquam id arcu viverra.
              Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.
            </p>
          </div>
    
          {/* Right Icon */}
          <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            <FiChevronRight className='mr-4 sm:mr-6 md:mr-10 lg:mr-12 text-[#000000] font-bold'/>
          </div>
    
          {/* Dots */}
          <div className='flex space-x-2 mt-8 sm:mt-12 md:mt-16 mb-16 sm:mb-24 md:mb-32'>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${index === 2 ? 'bg-black' : 'bg-gray-400'}`}></div>
            ))}
          </div>
        </div>
        </section>
 
          <footer className='relative z-0 bg-black text-white p-6'>

          </footer>
    </>
  )
}

export default About