import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import A3 from './A3.jpg';
import '../styles/videos.css';
import { Container } from './Navigbar';
import TrailerMovies from '../trailer/TrailerMovie';

function Movie() {
  const {toggle,inputValue} = useContext(Container)
  const input=inputValue
  const [movieData, setMovieData] = useState([]);
  const [trailer,setTrailer] = useState(true)
  const [movieTitle,setMovieTitle] = useState('')
  const Shown= input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const images = 'https://image.tmdb.org/t/p/w500/'

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "01175b3d8d9e5368e5b354fdef4569c8",
        query : input
      },
    });

    const results = data.data.results;
    setMovieData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    },100)
  }, [input]);

  const MovieTitle = (movie) => {
     setMovieTitle(movie.title)
     setTrailer(!trailer)
  }
 // console.log(movieData);

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {movieData.map((movie) => {
            return(
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color="green" fontSize={40} id={trailer ? "playIcon" :  'hide'} onClick={() => MovieTitle(movie)}/>
                <img src={movie.poster_path ? `${images}${movie.poster_path}` : A3} alt="images" onClick={() => MovieTitle(movie)} />
                <h3 id={movie.title.length >28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3>
                </div>
              </Fragment>
            )
            })}
            
            {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} toggle={toggle}/>}
            <AiOutlineClose id={trailer  ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="#fff"  cursor={'pointer'} onClick={() => setTrailer(true)}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Movie;
