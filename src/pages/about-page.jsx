import React from 'react'
import Spacer from '../components/common/spacer'
import Footer from '../components/common/footer'
import OffcanvasExample from '../components/common/navbar'
import Header from '../components/about-page/header'

const AboutPage = () => {
  return (
    <>
       
       <OffcanvasExample/>
         <Spacer/>
         <Header/>
        <Spacer/>
       
        <Spacer/>
        <Footer />
    </>
  )
}

export default AboutPage