import React from 'react'
import Nav from "./Nav"
import Slider from "./Slider"
import Sec1 from "./Sec1"
import Sec2 from "./Sec2"
import Sec3 from "./Sec3"
import Footer from "./Footer"

function Landing() {
  return (
    <>
     <Nav />
      <Slider />
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Footer/>
    </>
  )
}

export default Landing