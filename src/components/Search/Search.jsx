import React, { useState } from 'react';
import axios from 'axios';
import { pixabayAPI } from "../../api/API";
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addImages, addSearchInput, loadingChanger } from '../../redux/photoBookSlice';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const searchResults = (search) => {
        dispatch(loadingChanger());
        axios
            .get(`${pixabayAPI.url}?key=${pixabayAPI.key}&q=${search}&per_page=30&safeSearch=true`)
            .then((res) => {
                dispatch(addImages(res.data.hits));
                dispatch(addSearchInput(searchInput));
                dispatch(loadingChanger());
            })
            .catch((err) => console.log(err));
    };

    const searchImageHandler = () => {
        if (searchInput.trim().length < 1) {
            return;
        } else {
            searchResults(searchInput);
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[85%] md:w-[65%] xl:w-[40%] mt-20 py-3 bg-slate-400 border-solid border-2 border-slate-300 rounded-md'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center mx-1 sm:mx-6'>
                        <FiSearch className='bg-slate-400 text-white text-2xl font-extrabold' />
                        <div className='bg-slate-400 text-white text-3xl mx-1 md:mx-5 mt-[-10px]'>|</div>
                        <input
                            type="text"
                            placeholder='Search'
                            className='w-[135px] sm:w-[200px] md:w-auto text-white text-xl sm:text-2xl bg-slate-400 outline-none px-1 sm:px-2 rounded-md'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            required
                        />
                    </div>
                    <Link to="/images-results">
                        <button
                            onClick={searchImageHandler}
                            className='text-white text-xl border-solid border-2 white mx-1 sm:mx-5 px-2 sm:px-3 hover:bg-slate-300 rounded-md'
                        >
                            GO!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Search;