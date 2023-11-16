import React,{useEffect} from "react";
import '../styles/home.css';
import video from './video.mp4'
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import {TbApps} from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {BsFillArrowRightCircleFill} from "react-icons/bs";

const Home = () => {
   
    useEffect(() =>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="home">
          <div className="overlay"></div>
          <video  src={video} muted autoPlay loop type="video/mp4"></video>

          <div className="homeContent container">
            <div  className="textDiv">
            
                <p data-aos="fade-right" className="homeTitle">
                    Welcome to Movie Hub!!
                </p>
                <span data-aos="fade-left"  className="smallText">
                    Watch what you like   <button className="btn">Get Started <BsFillArrowRightCircleFill className="icon"/></button>
                </span>

            </div>

           <div className="homeFooterIcons">
             <div data-aos="fade-left" className="rightIcons">
                <FiFacebook className="icon"/>
                <AiOutlineInstagram className="icon"/>
                <MdOutlineMovieFilter className="icon"/>
             </div>

             <div className="leftIcons">
                <BsListTask className="icon"/>
                <TbApps className="icon"/>
             </div>
            </div>
          </div>
        </section>
    )
}

export default Home