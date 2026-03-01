import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Certification from './Pages/Certification'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import LightRays from './component/LightRays';
import ScrollReveal from './component/ScrollReveal';

const App = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          background: "radial-gradient(circle at top, #111 0%, #000 60%)"
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00f2ff"
          raysSpeed={1.8}
          lightSpread={3.5}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.05}
          distortion={0.15}
          fadeDistance={1.2}
          saturation={1}
        />
      </div>
      <ScrollReveal>
        <Home />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Certification />
      </ScrollReveal>
      <ScrollReveal>
        <Project />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  )
}

export default App
