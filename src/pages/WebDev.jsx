import React from 'react';
import HeroImage from '../assets/images/Rectangle 37.png';
import Image84 from '../assets/images/Rectangle 84.png';
import logo from '../assets/images/logo.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const WebDev = () => {
  return (
        <>
          
          
          {/* Hero Section */}
          <section
            className='relative h-screen bg-black bg-cover bg-center'
            style={{ 
              backgroundImage: `url(${HeroImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundAttachment: 'fixed'  // Ensure the background image stays fixed
            }}
          >
            {/* Background image */}
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',  // Ensure the background image stays fixed
                filter: 'brightness(0.5) contrast(1.2) sharpness(4)',
              }}
            ></div>
          
            {/* Text */}
            <div className='absolute inset-0 flex flex-col justify-center items-start p-6 lg:pl-16 lg:pr-24 text-white'>
              <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                <span className='block'>WEB</span>
                <span className='block mt-2'>DEVELOPMENT</span>
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
    
          {/* Service Description Section */}
          <section className=' mt-16 ml-16 '>
            <div className='text-left'>
                <h1 className='font-normal text-4xl inline-block relative'>
                  Service Description
                  <div className='absolute left-0 bottom-[-3px] top-12 border-t-4 border-[#6A54F4] w-4/5'></div>
                  <span className='absolute right-[-20px] left-64 top-2 bottom-[-14px] text-5xl text-[#6A54F4]'> . . .</span>
                </h1>
            </div>
            <div className='  mt-16 mb-28 max-w-4xl'>
              <p className='text-left ml-16'>
                Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc. In suscipit eget tristique pretium. Congue 
                quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor 
                lacus commodo. Elementum elementum orci etiam fames venenatis sed. Nibh non viverra purus nunc. In suscipit eget tristique pretium. Congue 
                quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor 
                lacus commodo. Elementum elementum orci etiam fames venenatis sed
                <span>
                <h4 className='inline text-sm text-blue-600 hover:underline'> More...</h4>
                </span>
              </p>
            </div>
          
            <div className='flex'>
              {/* lists */}
              <div className='w-2/4 mb-20 text-center p-8'>
                {['Front-End Development', 'Back-End Development', 'Content Management System (CMS) Integration', 'Word-Press Development', 'Shopify Development'].map((service, index) => (
                  <div key={index}>
                    <h2 className='text-xl font-semibold mt-4'>{service}</h2>
                    <div className='w-4/6 ml-28 border-t-4 mt-6 border-gray-400'></div>
                  </div>
                ))}
              </div>
            
              {/* image */}
              <div className='w-96 h-96  border-2 border-gray-300 rounded-lg ml-10'>
                <img src={Image84} alt="Description" className='w-full h-full object-cover'/>
              </div>
            </div>
          
            {/* advantages section */}
          
            <div>
            <div className='text-left'>
              <h1 className='font-normal text-4xl inline-block relative'>
                Advantages
                <div className='absolute left-0 bottom-[-3px] top-12 border-t-4 border-[#6A54F4] w-4/5'></div>
                <span className='absolute right-[-45px] top-[-2px] text-6xl text-[#6A54F4]'>
                  . . .
                </span>    
              </h1>
            </div>
              <div className='mt-16 mb-28 max-w-6xl'>
              <ul className='text-left ml-16 list-disc list-inside'>
                  {['Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum felis enim eleifend tellus leo hac.', 'Tristique morbi suspendisse sit vestibulum euismod sit in aliquam. Ipsum pellentesque aliquam elementum sed.', 'Dictum velit eros amet morbi augue egestas.', 'Congue facilisis senectus amet commodo aliquam vitae mi amet duis.', 'Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae vel id diam.', 'Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet in diam sit vel non.'].map((advantage, index) => (
                    <li key={index} className='text-xl mt-6'>{advantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>      

          {/* Our process section */}
          <section className='mt-20 mb-4 bg-black text-white relative p-8 md:p-16 pb-24'>
            <div className='text-center p-4 md:p-8 mt-8 relative'>
              <h1 className='text-3xl md:text-4xl font-normal relative'>
                Our Process
                <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-32 md:w-40 border-t-4 border-[#6A54F4]'></div>
                <span className='absolute left-[calc(50% + 20px)] md:left-[calc(50% + 52px)] top-[calc(12px + 4px)] top-2 text-3xl md:text-5xl text-[#6A54F4]'>
                  . . .
                </span>
              </h1>
              <p className='mt-4 md:mt-8 text-gray-300 text-sm md:text-base'>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
              </p>
            </div>
          
            {/* 4 boxes */}
            <div className='flex flex-col md:flex-row justify-center mt-12 md:mt-40 gap-6 mx-auto'>
              <div className='bg-white text-black p-4 text-center w-full max-w-xs md:max-w-sm'>
                <h1 className='text-lg md:text-xl font-normal mb-4'>Discovery</h1>
                <p className='text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.
                </p>
              </div>
          
              <div className='bg-white text-black p-4 text-center w-full max-w-xs md:max-w-sm'>
                <h1 className='text-lg md:text-xl font-normal mb-4'>Planning</h1>
                <p className='text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.
                </p>
              </div>
          
              <div className='bg-white text-black p-4 text-center w-full max-w-xs md:max-w-sm'>
                <h1 className='text-lg md:text-xl font-normal mb-4'>Execution</h1>
                <p className='text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.
                </p>
              </div>
          
              <div className='bg-white text-black p-4 text-center w-full max-w-xs md:max-w-sm'>
                <h1 className='text-lg md:text-xl font-normal mb-4'>Evaluation</h1>
                <p className='text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.
                </p>
              </div>
            </div>
          
            <div className='text-end mt-12 md:mt-36'>
              <button className='bg-[#6A54F4] hover:bg-[#5a45e3] text-white p-3 rounded'>
                SEE OUR WORK
              </button>
            </div>
          </section>


          {/* Client reviews section */}
    
          <section className='mt-16 mb-16 bg-white text-black relative'>
            <div className='text-center'>
              <h1 className='text-4xl font-normal relative'>Client Reviews
              <div className='absolute top-12 left-1/2 transform -translate-x-1/2 bottom-[-10px] w-40 border-t-4 border-[#6A54F4]'>
                  </div>
                  <span className='absolute  left-[calc(50% + 40px)] top-[calc(12px + 4px)] top-2 text-5xl text-[#6A54F4]'>
                      . . .
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
        {/* FAQs... */}
        <div className='relative text-center mb-8 '>
          <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>FAQs</h1>
          <div className='absolute left-1/2 transform -translate-x-1/2 mt-3 w-6 border-t-4 border-[#6A54F4]'></div>
          <span className='absolute left-[calc(50% + 28px)] top-0 mt-2 text-3xl sm:text-4xl md:text-5xl text-[#6A54F4]'>
            . . .
          </span>
        </div>

        <div className='mb-12 px-4 sm:mb-24 sm:px-6 md:mb-32 md:px-8 lg:mb-44 lg:max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur. Dignissim varius id.
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur. Blandit leo et lectus curabitur aliquam.
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur. Auctor vel phasellus eget consectetur
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
            <div className='mb-6 w-full'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 flex justify-between items-center'>
                Lorem ipsum dolor sit amet consectetur. Eu nunc eget nunc eget. Habitant quis.
                <span className='bg-[#6A54F4] text-white rounded-full inline-flex items-center justify-center w-6 h-6 text-sm leading-none hover:bg-[#5a45e3]'>+</span>
              </h2>
              <div className='border-t-4 mt-3 border-gray-400'></div>
            </div>
          </div>
        </div>





      </section>


    </>
  );
};

export default WebDev;
