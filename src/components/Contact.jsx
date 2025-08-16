import React from 'react'
import Form from 'react-bootstrap/Form';
import emailJs from 'emailjs-com';
import {useRef} from 'react';
// emailjs-com
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm(
      'service_qn1fspn',
      'template_k67z3is',
      form.current,
      'uqxjjatZZ5qXLX2yK'
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, Please try");
        form.current.reset();
      }
    )


  }

  return (
     <section className='container-fluid odd-div py-5' id='contact'>
     <div className='row justify-content-center text-white text-center mb-4 pb-4'>
         <h1> <span className='blue-text'>&lt;</span>Contact <span className='blue-text'>Me / &gt;</span></h1>
     </div>
     <div  className='d-flex justify-content-center'>
        <Form ref = {form} onSubmit = {sendEmail}>
        <Form.Group className="mb-4 form-field" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Name" className='form-field' name='name'/>
        </Form.Group>
        <Form.Group className="mb-4 form-field" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Subject" className='form-field' name='subject'/>
        </Form.Group>
        <Form.Group className="mb-4 mt-4 text-area" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Your Message" className='form-field' 
            name = 'message' rows={3} />
        </Form.Group>
        </Form>  
     </div>
     <div className='d-flex justify-content-center'>
       <div className='send-email mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex justify-content-center 
                align-items-center' onClick={(e) => {sendEmail(e)}}>
               <span>Send Email <i class="fa-solid fa-paper-plane"></i></span> 
       </div>
     </div>
    </section>
  )
}

export default Contact
