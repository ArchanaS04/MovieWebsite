import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import A3 from './A3.jpg';
import '../styles/videos.css';
import { Container } from './Navigbar';
import TrailerTvShows from '../trailer/TrailerTvShows'

function Tvshow() {
  const {toggle,inputValue} = useContext(Container)
  const input=inputValue
  const [showData, setShowData] = useState([]);
  const [trailer,setTrailer] = useState(true)
  const [title,setTitle] = useState('')
  const Shown= input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const images = 'https://image.tmdb.org/t/p/w500/'

  const Tvshow = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "01175b3d8d9e5368e5b354fdef4569c8",
        query : input
      }
    });

    const results = (data.data.results)
    setShowData(results);
  }

  useEffect(() => {
    setTimeout(() => {
      Tvshow();
    },100)
  }, [input]);

  console.log(showData);

  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => {
            return(
              <Fragment key={shows.id}>
                <div id={trailer  ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color="green" fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=> TvShowTitle(shows)} />
                <img src={shows.poster_path ? `${images}${shows.poster_path}` : A3} alt="images" onClick={() => TvShowTitle(shows)}/>
                <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor': 'secondaryColor'}>{shows.name}</h3>
                </div>
              </Fragment>
            )
            })}
            {trailer  ? console.log  : <TrailerTvShows  showsTitle={title} toggle={toggle}/>}
            <AiOutlineClose id={trailer  ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="#fff"  cursor={'pointer'} onClick={() => setTrailer(true)}/>
            </div>
            </div>
    </Fragment>
  );
}

export default Tvshow;
