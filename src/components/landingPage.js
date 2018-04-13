import React from 'react'
import PortfolioPieces from './portfolioPieces'
import Home from './home'
import Contact from './contact'

const LandingPage = () => {
  return (
    <div>
      <Home />
      <div id='bottomHalf'>
        <PortfolioPieces />
        <Contact />
      </div>
    </div>
  )
}

export default LandingPage
