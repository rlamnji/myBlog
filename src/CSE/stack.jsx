import {Link} from "react-router-dom";
import React from "react";
import insta from "../assets/insta.jpg";
import git from "../assets/git.jpg";
import youtube from "../assets/youtube.jpg";

export const stack = () =>{
    return(
        <body>
            <div className="App">
                <header className="App-header">
                    <div className="App-header-main">
                        <div className="App-header-title"><span>Stack</span></div>
                        <div className="App-header-subtitle"><span>기술 스택</span></div>
                    </div>
                    <div>
                        <div className="app-stack-content">(not yet)</div>
                    </div>
                </header>
                <div className="app-under-bar">
            <div className="info">
              <div><img ></img></div>
              <div className="info-img">
                <div className="img1"><a href="https://www.instagram.com/rlamnji?igsh=NXE2ZmY2YXRydDg5&utm_source=qr"><img src={insta} /></a></div>
                <div className="img2"><a href="https://github.com/rlamnji"><img src={git} /></a></div>
                <div className="img3"><a href=""></a><img src={youtube}/></div>
              </div>
            </div>
            <div className="CSE">
              <a className="under-bar-cse-title">CSE</a>
              <div className="under-bar-title-con">
                <div className="under-bar-con"><Link className="under-bar-con" to="/stack">stack</Link></div>
                <div className="under-bar-con"><Link className="under-bar-con" to="/cs" target="_self" >cs</Link></div>
                <div className="under-bar-con"><Link className="under-bar-con" to="/project" target="_self" >web & app</Link></div>
                <div className="under-bar-con"><Link className="under-bar-con" to="/blender" target="_self" >blender</Link></div>          
              </div>
             
            </div>
            <div className="photobook">
            <a className="under-bar-cse-title">Photobook</a>
                <div className="under-bar-title-con">
                <div className="under-bar-con"><Link className="under-bar-con" to="/photoSS" target="_self" >SSFW</Link></div>
                </div>
            </div>
            <div className="etc">
            <a className="under-bar-cse-title">etc.</a>
            <div className="under-bar-title-con">
            <div className="under-bar-con"><Link className="under-bar-con" to="/tour" target="_self" >tour</Link></div>
            <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >community</a></div>
            </div>
            </div>
            
        </div>
            </div>           
        </body>

    );
}

export default stack;