import {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import axios from 'axios'

import Header from '../Header/Header';
import MovieContainer from '../MovieContainer/MovieContainer';
const cx = classNames.bind(style);
function MovieWrapper() {
    const [movie,setMovie] = useState("");
    const getMovie = async (movieID)=>{
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`);
        setMovie(data.data);
    }
    useEffect(()=>{
        getMovie(157336);

    },[]);
    return ( 
       <>
                <div className={cx("wrapper")}>
                    <div className={cx("main")}>
                        <Header getMovie={getMovie}/>
                        <MovieContainer data={movie}></MovieContainer>
                    </div>
                </div>
                <div className={cx("background-movie")}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />
                </div>
       </>
     );
}

export default MovieWrapper;