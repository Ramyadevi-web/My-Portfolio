import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react'
// import logo from "/R1.png";

function Header() {

  const [scrolled,setScrolled] = useState(false)
  const [activeTab,setActiveTab] = useState('home')

  let isClicking = false;
  let scrollTimeout;

  useEffect(()=>{
    const onScroll = ()=>{

      if(isClicking) return; //To prevent the scroll event;

      isClicking = false;

      setScrolled(window.scrollY > 50);

      const sectionIds = ['home', 'skills', 'project', 'contact'];

      for(const sectionId of sectionIds){
        const element  = document.getElementById(sectionId);

        if(element){
           const sectionTop = element.offsetTop;
           const sectionHeight = element.offsetHeight;

           if(window.scrollY >= sectionTop - sectionHeight/3 &&
            window.scrollY < sectionTop + sectionHeight - sectionHeight / 3){
              setActiveTab(sectionId);
              break;
           }
        }
           
      }
    }

    window.addEventListener('scroll',onScroll)

    return () => window.removeEventListener('scroll',onScroll)
  },[])


  const handleClick = (sectionId) => {

    const element = document.getElementById(sectionId);

    if(element) { 
          isClicking = true;
          element.scrollIntoView({behavior: 'smooth'});
      const sectionTop = element.offsetTop - 80;
      
      setActiveTab(element)

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isClicking = false;
      }, 800)

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }
 



  return (
    <section className={`main-header ${scrolled ? 'scroll' : ''}`}  id='header-section'>
     <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className='fs-3 fw-bold d-flex'><img src = "/R1.png" alt = "logo" className="logo-img"/>
        <div className=' d-flex flex-column'>
          <span>RAMYA DEVI M</span>
          <span className='fs-5'>Fullstack Web Developer</span>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey={activeTab}>
            <Nav.Link onClick={() => { handleClick('home')}} className='nav-link fs-4' eventKey = 'home'>Home</Nav.Link>
            <Nav.Link onClick={() => { handleClick('skills')}} className='nav-link fs-4' eventKey = 'skills'>Skills</Nav.Link>
            <Nav.Link onClick={() => { handleClick('project')}} className='nav-link fs-4' eventKey = 'project'>Projects</Nav.Link>
            <Nav.Link onClick={() => { handleClick('contact')}} className='nav-link fs-4' eventKey = 'contact'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
     
     {scrolled &&  (<div className='up-arrow' onClick={() =>{
        const headerSection = document.getElementById("header-section");
        window.scrollTo({top:'0px',behavior:'smooth'});
      }
      }>
        <i className="fa-solid fa-arrow-up arrow-icon"></i>
      </div>)
      }
    </section>)
  
}

export default Header
