import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Images from '../components/Images/Images';
import { useSelector } from 'react-redux';
import SingleImage from '../components/SingleImage/SingleImage';

const ImgResultsPage = () => {
    const searchInput = useSelector((state) => state.photobook.searchInput);
    const isModalOpen = useSelector((state) => state.photobook.isModalOpen);

    return (
        <Fragment>
            <div
                className="w-full h-screen bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/05/10/15/05/himalayas-2301040_1280.jpg')" }}
            >
                <Header />
                <div className='pt-10'>
                    <Search />
                </div>
                <h2 className='text-white text-center text-4xl font-bold mt-24'>Resultes: {searchInput}</h2>
            </div>
            <div>
                <Images />
            </div>
            {isModalOpen && (<SingleImage />)}
        </Fragment>
    )
}

export default ImgResultsPage;