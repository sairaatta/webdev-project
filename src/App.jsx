import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebDev from './pages/WebDev';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <div  className='flex flex-col min-h-screen'>
        <Navbar/>
          <div className='flex-grow'>
            <Routes>
              <Route path='/' element={<WebDev/>}></Route>
              <Route path='/Services' element={<Services/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/home' element={<Home/>}></Route>

            </Routes>
          </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App