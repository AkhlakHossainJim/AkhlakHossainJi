import React from "react";
import { Link } from "react-router-dom";
import './css/App.css';
import himg from './media/Untitled-1.webp';
// import $ from 'jquery';
// import {useState} from "react";

function Home() {

  //   $(window).load(function(){
  //     $("span").show("slide", {
  //       direction: "up"
  //     }, 2000);
  // }); 
  
  function compiOver (){
    document.getElementById('compi').classList.add('hidden-i');
    document.getElementById('comp-i').classList.remove('hidden-i');
  };
  function compiOut (){
    document.getElementById('compi').classList.remove('hidden-i');
    document.getElementById('comp-i').classList.add('hidden-i');
  };

  function compiiOver (){
    document.getElementById('compii').classList.add('hidden-i');
    document.getElementById('comp-ii').classList.remove('hidden-i');
  };
  function compiiOut (){
    document.getElementById('compii').classList.remove('hidden-i');
    document.getElementById('comp-ii').classList.add('hidden-i');
  };

  function compiiiOver (){
    document.getElementById('compiii').classList.add('hidden-i');
    document.getElementById('comp-iii').classList.remove('hidden-i');
  };
  function compiiiOut (){
    document.getElementById('compiii').classList.remove('hidden-i');
    document.getElementById('comp-iii').classList.add('hidden-i');
  };

  function responClick () {
    if (window.matchMedia("(max-width: 700px)").matches) {
      document.getElementById('compi').classList.add('hidden-i');
      document.getElementById('comp-i').classList.remove('hidden-i');
      document.getElementById('compii').classList.add('hidden-i');
      document.getElementById('comp-ii').classList.remove('hidden-i');
      document.getElementById('compiii').classList.add('hidden-i');
      document.getElementById('comp-iii').classList.remove('hidden-i');
    }
    else{
      document.getElementById('compi').classList.remove('hidden-i');
      document.getElementById('comp-i').classList.add('hidden-i');
      document.getElementById('compii').classList.remove('hidden-i');
      document.getElementById('comp-ii').classList.add('hidden-i');
      document.getElementById('compiii').classList.remove('hidden-i');
      document.getElementById('comp-iii').classList.add('hidden-i');
    }
  }; 

  return (
    <div className='home' onClick={responClick}>
      <h1 className='home__child' id='home__comp'>
          <div onMouseOver={compiOver} onMouseOut={compiOut}><span className='home-comps' id='compi'>Hello.</span><span className='home-comps hidden-i' id='comp-i'><Link to='/about'>About</Link></span></div>
          <div onMouseOver={compiiOver} onMouseOut={compiiOut}><span className='home-comps' id='compii'>I am</span><span className='home-comps hidden-i' id='comp-ii'><Link to='/projects'>Proejcts</Link></span></div>
          <div onMouseOver={compiiiOver} onMouseOut={compiiiOut}><span className='home-comps' id='compiii'>Jim</span><span className='home-comps hidden-i' id='comp-iii'><Link to='/contact'>Contact</Link></span></div>
      </h1>
      <p className='resp-btm-txt'>Tap any where</p>
      <h2 className='alrt hidden-i'>Tap any where</h2>
      <img src={himg} className="home-side-img" alt="logo" />
      
    </div>
  );
}

export default Home;
