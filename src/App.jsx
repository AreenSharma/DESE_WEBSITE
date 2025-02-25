import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'
import FloatingShape from './components/FloatingShape'
import Footer from './components/Footer'
import GoldenJubilee from './pages/GoldenJubilee'
import ScrollToTop from './components/ScrollToTop'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor'


const App = () => {
  return (
    <Router>
      <div className='relative z-5 opacity-10'>
        
<SplashCursor />
      </div>
      <ScrollToTop />
      <div className='relative z-50'>
        <Navbar />
        <FloatingShape />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/GoldenJubilee" element={<GoldenJubilee />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App