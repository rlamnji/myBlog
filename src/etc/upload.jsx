import {Link} from "react-router-dom";
import React, { createContext, useState, useContext } from 'react';
import {useBlog} from "../etc/blogProvider";
//img
import insta from "../assets/insta.jpg";
import git from "../assets/git.jpg";
import youtube from "../assets/youtube.jpg";
//css
import '../css/tour.css';
import '../css/content.css';
import '../css/contentM.css';

import imgTest from "../assets/home/homeimg2.jpg";
import addtag from "../assets/contentM/addtag.jpg";
import bold from "../assets/contentM/bold.jpg";
import img from "../assets/contentM/img.jpg";
import italic from "../assets/contentM/Italic.jpg";
import line from "../assets/contentM/line.jpg";
import link from "../assets/contentM/link.jpg";
import text from "../assets/contentM/text.jpg";
import underline from "../assets/contentM/underline.jpg";
import content from "./content";


export const Upload = () =>{
    const {state, setState} = useBlog();

    return(
        <body>
            <div className="App">
                <header className="App-header">
                    <div className="App-header-main">
                        <div className="App-header-title"><input name="title" placeholder="제목을 입력해주세요." value = {state.title}  
                        onChange={(e)=>{
                            setState({
                                title : e.target.value, // 바뀜
                                ...state
                            })
                        }} /></div>
                        <div className="App-header-sub">
                        <div className="App-header-subtitle"><input name="date" placeholder="날짜를 입력해주세요." value={state.date} 
                        onChange={(e)=>{
                            setState({
                                ...state,  
                                date : e.target.value

                            })
                        }}
                        /></div>
                        <div className="app-header-img-list">
                            <div className="App-header-list  app-header-content-remove"><a href="#" className="app-header-list">remove</a></div>
                            <div className="App-header-img app-header-content-share"><a href="#" className="app-header-img app-header-content-share">upload</a></div>
                        </div>
                        </div>
                    </div>
                    <div className="tour-content-main"></div>
                    <div className="content-main">
                        <div className="content-main-left">
                            <input name="content" placeholder="내용을 입력해주세요." value = {state.content}  
                        onChange={(e)=>{
                            setState({
                                content : e.target.value, // 바뀜
                                ...state
                            })
                        }} />
                        </div>
                        <div className="content-main-right">
                            <div className="addtagdiv"><img src={addtag} className="addtag"/></div>
                            <div className="content-main-modify">
                                <div className="textdiv"><img src={text} className="text"/></div>
                                <div className="textstyle">
                                    <div className="textstyle-1"><img src={bold} className="bold"/></div>
                                    <div className="textstyle-2"><img src={underline} className="underline"/></div>
                                    <div className="textstyle-3"><img src={italic} className="italic"/></div>
                                </div>
                                <div><img src={line} className="line"/></div>
                                <div className="imgdiv"><img src={img} className="img"/></div>
                                <div><img src={line} className="line"/></div>
                                <div className="linkdiv"><img src={link} className="link"/></div>
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

export default Upload;