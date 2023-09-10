import React from 'react'
import Announcement from '../components/Announcement'
import Catagories from '../components/Catagories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Announcement/>
        <Navbar/>
        <Slider/>
        <Catagories/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home