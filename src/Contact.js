import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";

function Contact() {

  function mOver (){
      document.getElementById('wrot').innerHTML="Contact | Jim"
    };
    function mOut (){
      document.getElementById('wrot').innerHTML="Jim"
    };

  return (
    <div id="black-bg">
      <div className="bakto-rot">
        <Link to="/" id='wrot' onMouseOver={mOver} onMouseOut={mOut}>Jim</Link>
      </div>

      
    </div>
  );
}

export default Contact;
