import React, { useEffect } from 'react'
import Hero from './Hero'
import DownloadApp from './DownloadApp'
import Contact from '../Contact/Contact';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{paddingTop:"70px"}}>
      <Hero/>
      <DownloadApp/>
      <Contact/>
    </div>
  )
}

export default Home
