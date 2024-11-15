import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Ms1 from './Ms1'
import Ms2 from './Ms2'
import Ms3 from './Ms3'

function Men() {
  useEffect  (()=>{
    window.scrollTo({ top: 0, behavior: "instant" })
  },[])
  return (
    <>
    <Nav/>
    <Ms1/>
    <Ms2/>
    <Ms3/>
    <Footer/>
    </>
  )
}

export default Men