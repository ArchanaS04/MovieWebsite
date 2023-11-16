import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillPlayCircle ,AiOutlineClose} from 'react-icons/ai';
import A3 from './A3.jpg';
import '../styles/videos.css';
import { Container } from './Navigbar';
import TrailerTrend from '../trailer/TrailerTrend';

function Trend() {
  const {toggle} = useContext(Container)
  //const input=inputValue
  //const Shown= input ? 'search' : 'discover'
  const Api = 'https://api.themoviedb.org/3'
  const TrendShown = '/trending/all/week'
  const [trendArray, setTrendArray] = useState([]);
  const [trendTitle,setTrendTitle] = useState('')
  const [trailer,setTrailer] = useState(true)
  const images= 'https://image.tmdb.org/t/p/w500/'
  
  const Trend = async () => {
    const data = await axios.get(`${Api}${TrendShown}`,{
      params: {
        api_key: "01175b3d8d9e5368e5b354fdef4569c8",
      },
    });

    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
      Trend();
  }, []);

  const TrendTitle = (trend) => {
     setTrendTitle(trend.title)
     setTrailer(!trailer)
  }
  console.log(trendArray);

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return(
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color="green" fontSize={40} id={trailer ? "playIcon" :  'hide'} onClick={() => TrendTitle(trend)}/>
                <img src={trend.poster_path ? `${images}${trend.poster_path}` : A3} alt='' onClick={() => TrendTitle(trend)} />
                <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3>
                </div>
              </Fragment>
            )
            })}
            {trailer ? console.log : <TrailerTrend  trendsTitle ={trendTitle} toggle={toggle} />}
            <AiOutlineClose id={trailer  ? 'Nothing' : 'Exit1'} className={toggle ?  'DarkTheme' : 'LightThemeClose'} fontSize={40} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Trend;
