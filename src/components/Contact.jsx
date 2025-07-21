import React from 'react'
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
     <section className='container-fluid odd-div py-5'>
     <div className='row justify-content-center text-white text-center mb-4 pb-4'>
         <h1> <span className='blue-text'>&lt;</span>Contact <span className='blue-text'>Me / &gt;</span></h1>
     </div>
     <div  className='d-flex justify-content-center'>
        <Form>
        <Form.Group className="mb-4 form-field" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Name" className='form-field'/>
        </Form.Group>
        <Form.Group className="mb-4 form-field" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Subject" className='form-field'/>
        </Form.Group>
        <Form.Group className="mb-4 mt-4 text-area" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Your Message" className='form-field' rows={3} />
        </Form.Group>
        </Form>  
     </div>
     <div className='d-flex justify-content-center'>
       <div className='send-email mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex justify-content-center 
                align-items-center'>
               <span>Send Email <i class="fa-solid fa-paper-plane"></i></span> 
       </div>
     </div>
    </section>
  )
}

export default Contact
