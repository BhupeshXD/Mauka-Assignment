import { Routes, Route } from 'react-router-dom'
import './App.css'
import Offerings from './components/Offerings/Offerings'
import Features from './components/Features/Features'
import WhyUs from './components/WhyUs/WhyUs'
import How from './components/How/How'
import GetAccess from './components/GetAccess/GetAccess'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Header />
    <Footer/>
 <Routes>
  <Route path="/offerings" element={<Offerings />} />
  <Route path="/features" element={<Features />} />
  <Route path="/whyus" element={<WhyUs />} />
  <Route path="/how" element={<How />} />
  <Route path="/getaccess" element={<GetAccess />} />
 </Routes>
    </>
  )
}

export default App
