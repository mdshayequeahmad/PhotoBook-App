import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import { FiXSquare } from "react-icons/fi";
import { modalChanger } from '../../redux/photoBookSlice';

const SingleImage = () => {
    const dispatch = useDispatch();
    const imagesList = useSelector((state) => state?.photobook?.imagesList);
    const imageId = useSelector((state) => state?.photobook?.imageId);

    const image = imagesList?.find((item) => imageId === item.id);

    const closeModalHandler = () => {
        dispatch(modalChanger());
    };

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
        >
            <div className="mx-16 pb-5 bg-white shadow-lg rounded-md">
                <div className="flex justify-between items-center bg-[#F5F5F5] py-3 px-6 rounded-md">
                    <h2 className="text-2xl font-medium">Preview ID: {image?.id}</h2>
                    <button
                        onClick={closeModalHandler}
                        className="text-3xl font-medium text-black"
                    >
                        <FiXSquare />
                    </button>
                </div>
                <div className="sm:flex sm:justify-between items-center">
                    <div>
                        <img
                            src={image?.webformatURL}
                            alt="image"
                            className="mt-5 mx-3 sm:mx-5 w-[320px] sm:w-[720px] sm:h-[410px] rounded-lg"
                        />
                    </div>
                    <div className="mx-10">
                        <h1 className='mb-3 mt-5 text-3xl'>Download</h1>
                        <div className=' rounded-lg'>
                            <div className='grid grid-cols-3 gap-28 items-center bg-[#DEE8F4] px-5 py-2'>
                                <p>Small</p>
                                <p className='font-semibold'>{image?.webformatHeight + "x" + image?.webformatWidth}</p>
                                <FaCheckCircle className='text-green-500' />
                            </div>
                            <div className='grid grid-cols-3 gap-28 items-center border border-slate-300 px-5 py-2'>
                                <p>Medium</p>
                                <p className='font-semibold'>1920x2660</p>
                                <FaCheckCircle className='text-slate-200' />
                            </div>
                            <div className='grid grid-cols-3 gap-28 items-center border border-slate-300 px-5 py-2'>
                                <p>Big</p>
                                <p className='font-semibold'>2400x3600</p>
                                <FaCheckCircle className='text-slate-200' />
                            </div>
                            <div className='grid grid-cols-3 gap-28 items-center border border-slate-300 px-5 py-2'>
                                <p>Original</p>
                                <p className='font-semibold'>{image?.imageHeight + "x" + image?.imageWidth}</p>
                                <FaCheckCircle className='text-slate-200' />
                            </div>
                        </div>
                        <button className="bg-green-500 text-white my-5 px-4 py-2 rounded-lg hover:bg-green-400">
                            <a href={image?.previewURL}>
                                Download for free!
                            </a>
                        </button>
                        <p className="text-lg font-medium mb-2 ">User Information</p>
                        <div className='grid grid-cols-3 gap-8'>
                            <p>Username <br /> <span className='font-bold'>{image?.user}</span></p>
                            <p>User <br /> <span className='font-bold'>{image?.user_id}</span></p>
                            <p>Type <br /> <span className='font-bold'>{image?.type.toUpperCase()}</span></p>
                        </div>
                        <div className='grid grid-cols-3 gap-8'>
                            <p>Views <br /> <span className='font-bold'>{image?.views}</span></p>
                            <p>Downloads <br /> <span className='font-bold'>{image?.downloads}</span></p>
                            <p>Likes <br /> <span className='font-bold'>{image?.likes}</span></p>
                        </div>
                    </div>
                </div>
                <div className='mx-5 mt-5 text-xl text-center font-bold'>Tags:  <span className='bg-[#767676] px-2 py-[3px] font-medium rounded-md'>{image?.tags.split(",")}</span></div>
            </div>
        </div>
    )
}

export default SingleImage;