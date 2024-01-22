import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';

const HomePage = () => {
    return (
        <Fragment>
            <div
                className="w-full h-screen bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/6430097/pexels-photo-6430097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            >
                <Header />
                <div className='mx-5 sm:mx-36 mt-28'>
                    <p
                        className='text-white text-6xl sm:text-7xl text-center font-bold'
                    >
                        Discover over 2,000,000 free Stock Images
                    </p>
                </div>
                <Search />
                <div className='bg-[#D9D9D91D] mx-[55px] sm:mx-[200px] lg:mx-[350px] xl:mx-[540px] mt-16 xl:mt-10 py-2 rounded-md'>
                    <p className='text-white text-center'
                    >
                        <span className='font-bold'>Trending: </span>
                        flowers, love, forest, river</p>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;