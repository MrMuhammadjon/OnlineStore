import React from 'react'
import { Heart, Search } from 'lucide-react'
import AutoCarousel from '../components/AutoCarousel'
import Products from '../components/Products'
import Combo from '../components/Combo'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <>
            <AutoCarousel />
            <Combo/>
            <Products />
            <Banner />
        </>
    )
}

export default Home
