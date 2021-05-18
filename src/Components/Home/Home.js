import React from 'react'
import './Home.css'
import ContinetPage from '../ContinetPage/ContinetPage'
import Developers from '../DevelopersPage/Developers'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import ProductPage from '../ProductPage/ProductPage'
import Story from '../StoryPage/Story'
import Solution from '../SolutionPage/Solution'
import Ready from '../ReadyPage/Ready'
import Footer from '../Footer/Footer'
// import ProductCard from '../ProductCard/ProductCard'

function Home() {
  return (
    <div className='MasterHomeDiv'>
      <div>
        <Header />
        <LandingPage />
        <ProductPage />
        <Story />
        <Solution />
        <Developers />
        <ContinetPage />
        <Ready />
        <Footer />
      </div>
    </div>
  )
}

export default Home
