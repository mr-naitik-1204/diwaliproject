import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Cs1 from './Cs1'
import Cs2 from './Cs2'
import Cs3 from './Cs3'

function Children() {
    useEffect (()=>{
        window.scrollTo({ top: 0, behavior: "instant" })
      },[])
  return (
    <>
    <Nav/>
    <Cs1/>
    <Cs2/>
    <Cs3/>
    <Footer/>
    </>
  )
}

export default Children