import React from "react";
import {Link} from "react-router-dom";
import './App.css';

export const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          
          <div className="App-header-main">
            <div className="App-header-title"><span>Rlamnji.</span></div>
            <div className="App-header-subtitle"><span>this is my web blog.</span></div>
          </div>
        </header>
  
        <div className="app-under-bar">
            <div className="info">
              <div><img></img></div>
              <div><img></img></div>
              <div><img></img></div>
              <div><img></img></div>
            </div>
            <div className="CSE">
              <a className="under-bar-cse-title">CSE</a>
              <div className="under-bar-con"><Link className="under-bar-con" to="/stack">stack</Link> {/* Link 사용 */}</div>
              <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >cs</a></div>
              <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >web & app</a></div>
              <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >blender</a></div>          
            </div>
            <div className="photobook">
            <a className="under-bar-cse-title">Photobook</a>
              <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >S/S</a></div>
              <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >F/W</a></div>
            </div>
            <div className="etc">
            <a className="under-bar-cse-title">etc.</a>
            <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >tour</a></div>
            <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >community</a></div>
            </div>
            
        </div>
      </div>
    );
};