import React, { useEffect } from 'react'
import Ws1 from './Ws1'
import Nav from './Nav'
import Footer from './Footer'
import Ws2 from './Ws2'
import Ws3 from './Ws3'

function Women() {
    useEffect (()=>{
        window.scrollTo({ top: 0, behavior: "instant" })
      },[])

    return (
        <>
        <Nav/>
        <Ws1/>
        <Ws2/>
        <Ws3/>
        <Footer/>
        </>
    )
}

export default Women