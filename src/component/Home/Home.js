import React, { useEffect } from 'react'
import Hero from './Hero'
import Offer from './Offer'
import OurApp from './OurApp'
import Community from './Community'
import DownloadApp from './DownloadApp'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero/>
      <Offer/>
      <OurApp/>
      <DownloadApp/>
      <Community/>
    </>
  )
}

export default Home
