import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react'
// import logo from "/R1.png";

function Header() {

  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll',onScroll)

    return () => window.removeEventListener('scroll',onScroll)
  },[])

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
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-link fs-4'>Home</Nav.Link>
            <Nav.Link href="#home" className='nav-link fs-4'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='nav-link fs-4'>Projects</Nav.Link>
            <Nav.Link href="#" className='nav-link fs-4'>Contact us</Nav.Link>
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
