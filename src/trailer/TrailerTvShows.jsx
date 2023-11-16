import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer';
import '../styles/TrailerMovie.css'

function TrailerTvShows({ showsTitle, toggle }) {
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    movieTrailer(showsTitle).then((res) => {
      setVideoURL(res);
    });
  }

  useEffect(() => {
    handleSearch();
  }, [showsTitle]);

  return (
    <Fragment>
      <div className="Container">
      </div>
      <div className="player">
        <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{showsTitle}</h1>
        <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={'700px'} muted={false} />
      </div>
    </Fragment>
  )
}

export default TrailerTvShows;
