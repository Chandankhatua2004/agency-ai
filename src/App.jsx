import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'

import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (outlineRef.current) {
         outlineRef.current.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className='dark:bg-black relative overflow-hidden'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme} />
    
        {/* Custom cursor Ring*/}
        <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]' style={{ transition:'transform 0.1s ease-out'}}></div>
         {/* Custom cursor dot*/}
        <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] -ml-1.5 -mt-1.5'></div>
    </div>
  )
}

export default App
