import React, { useEffect } from 'react'
import Hero from './Hero'
import Offer from './Offer'
import EightProduct from './EightProduct'
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
      <EightProduct/>
      <OurApp/>
      <DownloadApp/>
      <Community/>
    </>
  )
}

export default Home
