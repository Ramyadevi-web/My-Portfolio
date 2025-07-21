import React from 'react'
import Button from 'react-bootstrap/Button';
import girl2 from '../assets/girl2.png';

function About() {
  return (
 
<div className="container-fluid even-div py-5">
     <div className='row justify-content-center text-center text-white mb-4'>
         <h1>&lt;About <span className='blue-text'>Us/</span>&gt;</h1>
     </div>
    <div className='row align-items-center'>
      <div className='col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center'>
        <img src={girl2} className='image-fluid rounded custom-img' alt='Girl Image'></img>
      </div>
      <div className='col-12 col-md-6 text-white px-4'>
        <p className='responsive-pre'>       
           I am a passionate and dedicated Full Stack Developer with
           a strong drive to learn, build, and grow in the tech industry. 
        </p>
        < p className='responsive-pre'> 
           With a background in Computer Science and hands-on experience 
           in both front-end and back-end development, I strive to create 
           efficient, scalable, and user-friendly web applications.
        </p>
<p className='responsive-pre'>
           My goal is to contribute meaningfully to innovative projects while sharpening 
           my skills as a developer. I enjoy every part of the development
           process and always give my best. <span className='blue-text fw-bold'>MERN</span>
   &nbsp;<span>is my focus.</span></p>    
      </div>
    </div>
</div>
   
  )
}

export default About
