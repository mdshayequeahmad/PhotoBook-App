import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImageId, modalChanger } from '../../redux/photoBookSlice';
import { ThreeCircles } from 'react-loader-spinner';

const Images = () => {
    const images = useSelector((state) => state.photobook.imagesList);
    const isLoading = useSelector((state) => state.photobook.isLoading);
    const dispatch = useDispatch();

    const imageIdHandler = (id) => {
        dispatch(modalChanger());
        dispatch(addImageId(id));
    };

    return (
        <Fragment>
            <div className='pt-10 mx-3 sm:mx-8'>
                {isLoading ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {images?.map((image) => (
                            <div key={image.id}>
                                <div onClick={() => imageIdHandler(image.id)} className='cursor-pointer'>
                                    <img src={image.webformatURL} alt="image" className='xl:h-[280px] rounded-lg' />
                                </div>
                                <p
                                    className='text-center mt-2'
                                >
                                    {image.tags.split(',').map((el, i) => (
                                        <span key={i} className='bg-slate-100 mx-1 px-3 py-[3px] rounded-md'>{el}</span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center mt-[-150px]">
                        <ThreeCircles
                            visible={true}
                            height="50"
                            width="50"
                            color="#67C167"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Images;