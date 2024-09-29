import {Link} from "react-router-dom";
import React from "react";
import insta from "../assets/insta.jpg";
import git from "../assets/git.jpg";
import youtube from "../assets/youtube.jpg";

import imgTest from "../assets/home/homeimg2.jpg";
import '../css/tour.css';

export const tour = () =>{
    return(
        <body>
        <div className="App">
            <header className="App-header-tour">
                <div className="App-header-main">
                    <div className="App-header-title"><span>Tour</span></div>
                    <div className="App-header-sub">
                        <div className="App-header-subtitle"><span>빈티지와 소품 그리고 ...</span></div>
                        <div className="app-header-img-list">
                            <div className="App-header-img"><a href="#" className="app-header-img">img</a></div>
                            <div className="App-header-list"><a href="#" className="app-header-list">list</a></div>
                        </div>
                    </div>
               
                   
                </div>
            </header>

            <div className="tour-content">
                <div className="tour-select">
                    
                </div>
                <div className="tour-contets">
                    <div className="tour-row">
                        <div className="detail-contents">
                            <Link to="/content"><img src={imgTest}></img></Link>
                            
                            <div className="detail-contents-title">
                                <div className="detail-title">고림동 스벅꾼</div>
                                <div className="detail-subtitle">2024.02.03-2024.02.07</div>
                            </div>
                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                            </div>
            
                    </div>
                    <div className="tour-row">
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                            </div>
            
                    </div>
                    <div className="tour-row">
                        <div className="detail-contents">

                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                        </div>
                        <div className="detail-contents">
                            
                            </div>
            
                    </div>
                </div>

            </div>

            <div className="App-content-upload">
                <div className="app-content-upload"><a href="#" className="app-header-img">upload</a></div>
            </div>

          

            
            <div className="nextPage">
                <div><a href="#">1</a></div>
            </div>

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
                <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >S/S</a></div>
                <div className="under-bar-con"><a className="under-bar-con" href="#" target="_self" >F/W</a></div>
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

export default tour;