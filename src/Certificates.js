import React from 'react';
import { Link } from 'react-router-dom';
import c1 from './media/Certificates/c-8.png';
import c2 from './media/Certificates/c-3.png';
import c3 from './media/Certificates/c-3.png';
import c4 from './media/Certificates/c-3.png';
import c5 from './media/Certificates/c-3.png';
import c6 from './media/Certificates/c-3.png';
import c7 from './media/Certificates/c-3.png';
import c8 from './media/Certificates/c-3.png';
import c9 from './media/Certificates/c-3.png';
import './css/App.css';


function Certificates() {
    return (
        <div className='certificates'>
            <div className="bakto-rot">
                <Link to="/" id='wrot'>Jim | <Link to='/about'>About</Link> &gt; Certificates</Link>
            </div>
            
            <div className='navc'>
                <h1>Certificates</h1>
                <div  className='secondary-nav'>
                    <a href='#tech'>Tech</a>
                    <a href='#co'>Co-curriculam &amp; Others</a>
                </div> 
            </div>
            
            <section id='tech'>
                <div className='c-line-1'>
                    <div></div>
                    <img src={c1} alt='' />
                    <div></div>
                </div>
                <div className='c-line-2'>
                    <div className='r-c-img'>
                       <img src={c2} alt='' /> 
                    </div>
                    <div className='r-c-img'>
                       <img src={c3} alt='' /> 
                    </div>
                </div>
                <div className='c-line-3'>
                <div className='r-c-img'>
                       <img src={c4} alt='' /> 
                    </div>
                    <div className='r-c-img'>
                       <img src={c5} alt='' /> 
                    </div>
                    <div className='r-c-img'>
                       <img src={c6} alt='' /> 
                    </div>
                </div>
                <div className='c-line-2'>
                <div className='r-c-img'>
                       <img src={c7} alt='' /> 
                    </div>
                    <div className='r-c-img'>
                       <img src={c8} alt='' /> 
                    </div>
                </div>
                <div className='c-line-1'>
                    <div></div>
                    <img src={c9} alt='' />
                    <div></div>
                </div>
            </section>
            
        </div>
    )
}

export default Certificates
