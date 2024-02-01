import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Offerings from '../components/Offerings/Offerings';
import Features from '../components/Features/Features';
import WhyUs from '../components/WhyUs/WhyUs';
import How from '../components/How/How';
import Footer from '../components/Footer/Footer';
Footer

const Home = () => {
  return (
    <div>
    <Navbar />
        <Header />
        <Offerings />
        <Features />
        <How />
        <WhyUs />
        <Footer />

    </div>
  )
}

export default Home