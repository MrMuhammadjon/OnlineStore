import React from 'react'
import { Heart, Search } from 'lucide-react'
import HomeSlider from '../components/HomeSlider'

const Home = () => {
    return (
        <>
            <div className="w-[90%] mx-auto">
                <form action="" className='flex items-center justify-center mt-5 border-1 p-1 px-3 gap-2 rounded-3xl bg-gray-100'>
                    <Search />  <input type="search" className='rounded-2xl p-2 text-gray-500 flex-1 outline-0' placeholder='Seacrh...' />
                </form>
            </div>
            <HomeSlider />
        </>
    )
}

export default Home
