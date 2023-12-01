import React, { useEffect } from 'react'
import Hero from './Hero'
import Offer from './Offer'
import EightProduct from './EightProduct'
import OurApp from './OurApp'
import Community from './Community'

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
      <Community/>
    </>
  )
}

export default Home
