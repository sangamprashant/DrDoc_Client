import React, { useEffect } from 'react'
import Hero from './Hero'
import DownloadApp from './DownloadApp'
import Contact from '../Contact/Contact';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero/>
      <DownloadApp/>
      <Contact/>
    </>
  )
}

export default Home
