import React from 'react'
import Button from 'react-bootstrap/Button';
// import girl1 from '../assets/girl1.png'

function Home() {
  return (
    <section className='container-fluid odd-div py-5' id='home'>
      <div className='row align-items-center'>
        {/* Left Section */}
        <div className='col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center px-4'>
          <div className='home-left-content'>
            <p>Hello there! I'm</p>
            <p>Ramya Devi</p>
            <p>I'm a <span id='home-span'>MERN Stack Developer</span></p>
            <div className='small-text mb-4'>
              Transforming ideas into responsive and efficient web applications.
            </div>
          </div>

          <div  className='d-flex flex-column justify-content-center justify-items-center'>
          <div className='d-flex justify-items-center justify-content-center mb-3 social-icons'>
            <span>
              <a href='https://github.com/Ramyadevi-web' target='_blank' rel='noopener noreferrer'>
              <i className="fa-brands fa-github fa-2x pointer me-3"></i>
              </a>
            </span>
            <span>
              <a href='https://www.linkedin.com/in/ramya-devi-573833372/' target='_blank' rel='noopener noreferrer'>
              <i className="fa-brands fa-linkedin fa-2x pointer me-3"></i>
              </a>  
            </span>
            <span>
            <a href='mailto:mramyadevi23@gmail.com' target='_blank' rel='noopener noreferrer'>
              <i className="fa-solid fa-square-envelope fa-2x pointer"></i>
            </a>
            </span>
          </div>

          <div className='d-flex justify-items-center justify-content-center'>
            <Button variant="info" className='pointer' id='resume-download'>
              <span>
                <a href='https://drive.google.com/file/d/1xCzkzg-hLx3IE90HY1UrRFGED3OPkFNF/view?usp=sharing' target='_blank' download>
                Download Resume
                </a>
              </span>
              <span className='ms-3'><i className="fa-solid fa-arrow-down"></i></span>
            </Button>
          </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img src="/girl1.png" alt="Girl" className='image-fluid custom-img'/>
        </div>
      </div>

    </section>
  );
}

export default Home;
