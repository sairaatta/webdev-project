import React from 'react';
import HeroImage from '../assets/images/Rectangle 37.png';
import UIUX from '../assets/images/UIUX.png';
import Group44 from '../assets/images/Group 44.png';
import Rectange3 from '../assets/images/Rectangle 3.png';
import settings from '../assets/images/settings.png';
import projects from '../assets/images/projects.png';
import revenue from '../assets/images/revenue.png';
import user from '../assets/images/user.png';
const Services = () => {
  return (
    <>
        {/* Hero Section */}
        <section
        className='relative h-screen bg-black bg-cover bg-center'
        style={{
          backgroundImage: `url(${HeroImage})`,
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
            <span className='block'>OUR SERVICES</span>
          </h1>

          {/* Paragraph */}
          <p className='mt-6 text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl max-w-lg'>
            Delivering cutting-edge digital solutions tailored to your business needs
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
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

        {/* client section  */}
        <section  ection className='mt-16 mb-20 bg-white text-black relative'>
            <div className='text-center'>
              <h1 className='text-4xl font-normal relative'>Our Offerings
              <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-40 border-t-4 border-[#6A54F4]'>
                  </div>
                  <span className='absolute  left-[calc(50% + 40px)] top-[calc(12px + 4px)] top-2 text-5xl text-[#6A54F4]'>
                      . . .
                  </span>
              </h1>
            </div>
                {/* Grid of images */}
            <div className='grid grid-cols-3 gap-4 p-20 mt-12'>
              {/* Replace src with actual image paths */}
              <div className='flex justify-center items-center'>
                <img src={Rectange3} alt='Client 1' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={Rectange3} alt='Client 2' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={Rectange3} alt='Client 3' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={UIUX} alt='Client 4' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={UIUX} alt='Client 5' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={UIUX} alt='Client 6' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={Group44} alt='Client 7' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={Group44} alt='Client 8' className='w-full h-auto object-cover' />
              </div>
              <div className='flex justify-center items-center'>
                <img src={Group44} alt='Client 9' className='w-full h-auto object-cover' />
              </div>
            </div>
    
            <div className='text-center mt-10 md:mt-20'>
                  <button className='bg-[#6A54F4] hover:bg-[#5a45e3] text-white p-3 rounded'>
                    SEE OUR WORK
                  </button>
            </div>
              
        </section>

        {/* that lot section */}
        <section className='mt-16 mb-32 bg-black text-white relative p-6 md:p-12 lg:p-16 pb-20 lg:pb-32'>
      <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>THAT LOT</h1>
        <p className='mt-4 text-base md:text-lg lg:text-xl'>
          Give your company a faster, more agile way to work with freelancers and contractors. Find contract and
          pay your external workforce in one click, with 100% compliance.
        </p>
        <div className='text-center md:text-right mt-8'>
          <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors'>
            BOOK A DEMO
          </button>
        </div>
      </div>

      <div className='flex flex-wrap gap-8 mt-12 mx-auto items-center justify-center'>
        <div className='flex flex-col items-center p-2'>
          <img src={settings} alt="settings" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24' />
          <h2 className='mt-2 text-gray-400 font-bold text-lg md:text-xl lg:text-2xl'>12 Services</h2>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src={projects} alt="projects" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24' />
          <h2 className='mt-2 text-gray-400 font-bold text-lg md:text-xl lg:text-2xl'>200+ Projects</h2>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src={revenue} alt="revenue" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24' />
          <h2 className='mt-2 text-gray-400 font-bold text-lg md:text-xl lg:text-2xl'>$200k+ Revenue</h2>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src={user} alt="user" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24' />
          <h2 className='mt-2 text-gray-400 font-bold text-lg md:text-xl lg:text-2xl'>300+ Happy Clients</h2>
        </div>
      </div>
        </section>

    </>
  );
};

export default Services;
