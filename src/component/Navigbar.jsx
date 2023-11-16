import React,{Fragment,useState} from "react";
import '../styles/Navigbar.css';
import {RiMovie2Line} from 'react-icons/ri';
import {Routes,Route, NavLink}  from  'react-router-dom';
//import Movie from '../Main/main';
import Home from "./Home";
import Tvshow from "./Tvshow";
import Trend from "./Trend";
//import Pricing from "./Pricing";
import Movie from "./Movie";
import {HiSearch} from 'react-icons/hi';
//import { createContext } from "react";

export const Container = React.createContext()


function Navbar() {

    const [toggle,setToggle]=useState(true)
    const [inputValue,setInputValue]=useState('')

    return(
        <Container.Provider value={{toggle,inputValue}}>
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
              <div className="nav-options">
                
                <div className="logoDiv">
                  <a href="#" className="logo flex">
                     <h1 className="heading"><RiMovie2Line className="icon"/> Movie.</h1>
                  </a>
                </div>
                
                {/*<span id={toggle ? 'Movies' : 'MovieLight'}>  </span>*/}
                 <NavLink  to="">
                <span id={toggle ? 'Movie' : 'MoviesLight'}> Home </span>
                </NavLink>

                <NavLink  to="/Movie">
                <span id= {toggle ? 'Movie' : 'MoviesLight'}> Movie </span>
                </NavLink>
                <NavLink  to="/Tvshow">
                <span id= {toggle ? 'Movie' : 'MoviesLight'}> Tvshow </span>
                </NavLink>
                <NavLink   to="/Trend">
                <span id= {toggle ? 'Movie' : 'MoviesLight'}> Trending </span>
                </NavLink>
                
              </div>

              <div className="input-group">
                 <input type="text" placeholder="Search what you want..." onChange={(e) => setInputValue(e.target.value)}/>
                 <HiSearch fontSize={21} color="black"  id="search"/>
                 <div id="Color-switcher"  onClick={() => setToggle(!toggle)}>
                 <div  id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
              </div>
            </div>
          </nav>
            <Routes>

                <Route path='' element={<Home/>}/>
                <Route path='Movie' element={<Movie/>}/>
                <Route path='Tvshow' element={<Tvshow/>}/>
                <Route path='Trend' element={<Trend/>}/>
                
                
            </Routes>
    
        </Fragment>
        
        </Container.Provider>

    )
}


export default Navbar