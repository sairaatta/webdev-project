import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube , FaBehance} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='bg-black text-white py-4 mt-auto'>
      <div className='container mx-auto flex flex-wrap justify-between'>
        <div className='flex-1'>
          {/* logo and paragraph */}
        <div className='font-semibold text-5xl mb-4 p-2'>
          LOGO 
        </div>       
          <p className='text-left text-gray-300 p-2'>
            Lorem ipsum dolor sit amet consectetur. 
            Laoreet cras egestas.Lorem ipsum dolor 
            sit amet consectetur. Laoreet cras 
            egestas.Lorem ipsum dolor sit amet 
            consectetur. Laoreet cras egestas.Lorem 
            ipsum dolor sit amet consectetur. 
            Laoreet cras egestas.Lorem ipsum dolor 
            sit amet consectetur. Laoreet cras 
            egestas.Lorem ipsum dolor sit amet 
            consectetur. Laoreet cras egestas.
          </p>
      </div>

      {/* services */}

      <div className='flex-1 text-center'>
        <div className='mb-4 mt-20 p-2'>
          <h4 className='font-semibold text-lg hover:text-yellow-400 transition-colors duration-300'>Services</h4>
          <div className='pl-28 justify-between text-center '>         
            <ul className='mt-6 text-gray-400 text-left space-y-2 px-4 md:px-0'>
              <li> <a href='#webdev'  >Web Development   </a></li>
              <li> <a href='#ui/ux'   >UI/UX Design      </a></li>
              <li> <a href='#graphics'>Graphic Design    </a></li>
              <li> <a href='#graphics'>Graphic Design    </a> </li>
              <li> <a href='#business'>Business Planning </a></li>
            </ul>
          </div>
        </div>
      </div>

        {/* useful links */}

        <div className='flex-1 text-center'>
        <div className='mb-4 mt-20 p-2'>
          <h4 className='font-semibold text-lg hover:text-yellow-400 transition-colors duration-300 ' >Useful Links </h4>
          <div className='pl-28 justify-between text-center '>
            <ul className='mt-6 text-gray-500 text-left space-y-2 px-4 md:px-0'>
              <li> <a href='#link1'>Lorem </a></li>
              <li> <a href='#link2'>Contact Us </a></li>
              <li> <a href='#link3'>Lorem ipsum </a></li>
              <li> <a href='#link3'>Lorem ipsum </a></li>
              <li> <a href='#link3'>Testimonials  </a></li>  
            </ul>
          </div>
        </div>
        </div>

           
      {/* follow us */}
      
      <div className='flex-1 mt-20 text-center p-2' >
        <h4 className='font-semibold text-lg mb-4 hover:text-yellow-400 transition-colors duration-300'>Follow Us </h4>
          <ul className='mt-6 flex justify-center flex-wrap'>
            {/* instagram, facebook, linkedin icons */}
            <div className='flex w-full justify-center gap-4 mb-4'>            
              <li  className=' flex '>
                <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                  <FaInstagram className='text-pink-500 hover:text-pink-600 transition-colors duration-300' size={24} />
                </a>
              </li>
              <li className=' flex '>
                <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' >
                  <FaFacebook className='text-blue-600 hover:text-blue-800 transition-colors duration-300' size={24} />
                </a>
              </li>              
              <li className=' flex'>
                <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='text-blue-700 hover:text-blue-900 transition-colors duration-300' size={24}/>
                </a>
              </li>
              </div>
              {/* twitter, youtube icons */}
              <div  className='flex w-full justify-center gap-4'>                    
              <li className='flex '>
                <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer'>
                  <FaTwitter className='text-blue-400 hover:text-blue-600 transition-colors duration-300' size={24}/>
                </a>
              </li>
              <li className=' flex'>
              <a href="https://www.youtube.com" target='_blank' rel='noopener noreferrer' >
                  <FaYoutube className='text-red-700 hover:text-red-800 transition-colors duration-300' size={24}/>
                </a>
              </li>
              <li>
              <a href="https://www.behance.com" target='_blank' rel='noopener noreferrer'>
                <FaBehance className='text-blue-500 hover:text-blue-700 transition-colors duration-300' size={24}/>
              </a>
            </li>
              </div>
 
           
          </ul>
      </div>
      </div>
     
    </footer>
  )
}

export default Footer