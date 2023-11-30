import React, { useEffect } from 'react'
import Hero from './Hero'
import Offer from './Offer'
import EightProduct from './EightProduct'
import OurApp from './OurApp'

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
    </>
  )
}

export default Home
