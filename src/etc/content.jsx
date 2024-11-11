import {Link} from "react-router-dom";
import React from "react";
import insta from "../assets/insta.jpg";
import git from "../assets/git.jpg";
import youtube from "../assets/youtube.jpg";
import '../css/tour.css';
import '../css/content.css';
import imgTest from "../assets/home/homeimg2.jpg";

export const content = () =>{
    return(
        <body>
            <div className="App">
                <header className="App-header">
                    <div className="App-header-main">
                        <div className="App-header-title"><span>Content Title</span></div>
                        <div className="App-header-sub">
                        <div className="App-header-subtitle"><span>2024.01.02-2024.01.05</span></div>
                        <div className="app-header-img-list">
                            <div className="App-header-img app-header-content-share"><a href="#" className="app-header-img app-header-content-share">share</a></div>
                            <div className="App-header-list  app-header-content-remove"><a href="#" className="app-header-list">remove</a></div>
                            <div className="App-header-list"><Link to="/content_edit" className="app-header-list app-header-content-edit">edit</Link></div>
                        </div>
                        </div>
                    </div>
                    <div className="tour-content-main"></div>
                    <div className="content-main">
                        <div className="content-main-left"></div>
                        <div className="content-main-right">
                            <div className="right-title">Recommend</div>
                            <div className="right-content">
                                <div className="detail-contents-right">
                                    <Link to="/content"><img src={imgTest}></img></Link>
                                    
                                    <div className="detail-contents-title-right">
                                        <div className="detail-title-right">고림동 스벅꾼</div>
                                        <div className="detail-subtitle-right">2024.02.03-2024.02.07</div>
                                    </div>
                                </div>
                    
                            </div>
                            
                        </div>
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

export default content;