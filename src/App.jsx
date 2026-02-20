import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Certification from './Pages/Certification'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import LightRays from './component/LightRays';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{  position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1}}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1.5}
    lightSpread={2}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.13}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={2}
          saturation={0.8}
/>
</div>  
      <Home />
      <Certification />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </>
  )
}

export default App
