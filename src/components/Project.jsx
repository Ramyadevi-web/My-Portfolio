import React from 'react'
// import attendance from '../assets/attendance.png'
// import CRUD from '../assets/CRUD.png'
// import todo from '../assets/todo.png'
// import router from '../assets/router.png'
// import shop from '../assets/shop.png'

function Project() {

    const techStack = [
        'MongoDB',
        'Express',
        'ReactJs',
        'NodeJs',
        'Bootstrap'
    ]

      const techStackFront = [
        'ReactJs',
        'NodeJs',
        'Bootstrap'
    ]
  return (
     
<section className="container-fluid even-div py-5">
     <div className='row justify-content-center text-center text-white mb-4'>
         <h1><span className='blue-text'>&lt;</span>My <span className='blue-text'>Projects /&gt;</span></h1>
     </div>
     <div className='container'>
      {/* Attendance Portal Project */}
     <div className='row'>
        <div className='col-12 col-lg-6 order-lg-1 d-flex justify-content-center'>
         <img src="/attendance.png" className='project-image' alt='project screenshot'/>
        </div>
        <div className='col-12 mt-4 col-lg-6 mt-lg-0 justify-content-center align-items-center align-content-center 
         justify-items-center'>
         <div className=' d-flex align-items-center align-content-center 
         justify-items-center'>
            <h1 className='text-white me-5'>Attendance Portal</h1>
            <div className='project-button ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
            align-items-center'>
            <a href='https://attendanceportalcapstone.netlify.app/' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                <i class="fa-solid fa-link me-2"></i>Demo
            </a>
            </div> 
        </div>
            <p className='text-white'>A responsive web application for managing and tracking attendance digitally. 
                It provides role-based access for admins, teachers, and students, ensuring secure and efficient record keeping. 
                Built using the MERN stack for a seamless full-stack experience.
            </p>
            <div className='d-flex'>
                {
                    techStack.map((tech,index)=>(
                        <div className='tech-button ps-2 pt-3 pb-3 pe-2 me-2 d-flex align-content-center
                          align-items-center' key={index}>
                         {tech}
                        </div> 
                    ))
                }
            </div>
            <div className='d-flex'>
              <div className='front-code-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/Attendance-Portal-fe' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Front-end code
                </a>
              </div> 
              <div className='project-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/Attendance-Portal-be' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Back-end code
                </a>
              </div>
            </div>
        </div>
    
      
     </div>  

     {/* Axios CRUD */}
      <div className='row mt-5'>
        <div className='col-12 col-lg-6 d-flex justify-content-center'>
         <img src="/CRUD.png" className='project-image order-lg-2' alt='project screenshot'/>
        </div>
        <div className='col-12 mt-4 col-lg-6 mt-lg-0 justify-content-center align-items-center align-content-center 
         justify-items-center'>
         <div className=' d-flex align-items-center align-content-center 
         justify-items-center'>
            <h1 className='text-white me-5'>Axios CRUD</h1>
            <div className='project-button ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
            align-items-center'>
              <a href='https://axioscrudoperations.netlify.app/' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                <i class="fa-solid fa-link me-2"></i>Demo</a>
            </div> 
        </div>
            <p className='text-white'>Axios CRUD is a simple React application that demonstrates Create, Read, Update, and Delete operations using Axios for API communication. 
              The project showcases how to interact with RESTful APIs efficiently, manage state, and update the UI dynamically based on user input. 
            </p>
            <div className='d-flex'>
                {
                    techStackFront.map((tech,index)=>(
                        <div className='tech-button ps-2 pt-3 pb-3 pe-2 me-2 d-flex align-content-center
                          align-items-center' key={index}>
                         {tech}
                        </div> 
                    ))
                }
            </div>
            <div className='d-flex'>
              <div className='front-code-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/AxioCRUD' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Source code
                </a>
              </div>
            </div>
        </div>
    
      
     </div> 

     {/* Todo App */}
      <div className='row mt-5'>
        <div className='col-12 col-lg-6 order-lg-2 d-flex justify-content-center'>
         <img src="/todo.png" className='project-image' alt='project screenshot'/>
        </div>
        <div className='col-12 mt-4 col-lg-6 mt-lg-0 justify-content-center align-items-center align-content-center 
         justify-items-center'>
         <div className=' d-flex align-items-center align-content-center 
         justify-items-center'>
            <h1 className='text-white me-5'>Todo App</h1>
            <div className='project-button ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
            align-items-center'>
              <a href='https://charming-kangaroo-686016.netlify.app/' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
               <i class="fa-solid fa-link me-2"></i>Demo
              </a>            
            </div> 
        </div>
            <p className='text-white'>Todo App is a React-based task management application that allows users to add, edit, delete, and mark tasks as completed. 
            It features a clean UI and real-time updates to help users stay organized and productive. 7
            This project demonstrates fundamental React concepts like state management, conditional rendering, and component structuring.
            </p>
            <div className='d-flex'>
                {
                    techStackFront.map((tech,index)=>(
                        <div className='tech-button ps-2 pt-3 pb-3 pe-2 me-2 d-flex align-content-center
                          align-items-center' key={index}>
                         {tech}
                        </div> 
                    ))
                }
            </div>
            <div className='d-flex'>
              <div className='front-code-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/ReactTodo' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Source code
                </a>
              </div>
            </div>
        </div> 
      </div>

      {/* React Router Demo */}
        <div className='row mt-5'>
        <div className='col-12 col-lg-6 d-flex justify-content-center order-lg-1'>
         <img src="/router.png" className='project-image ' alt='project screenshot'/>
        </div>
        <div className='col-12 mt-4 col-lg-6 mt-lg-0 justify-content-center align-items-center align-content-center 
         justify-items-center order-lg-2'>
         <div className=' d-flex align-items-center align-content-center 
         justify-items-center'>
            <h1 className='text-white me-5'>React Router Demo</h1>
            <div className='project-button ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
            align-items-center'>
              <a href='https://cerulean-pasca-12bc54.netlify.app/' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
               <i class="fa-solid fa-link me-2"></i>Demo
              </a>            
            </div> 
        </div>
            <p className='text-white'>Todo App is a React-based task management application that allows users to add, edit, delete, and mark tasks as completed. 
            It features a clean UI and real-time updates to help users stay organized and productive. 7
            This project demonstrates fundamental React concepts like state management, conditional rendering, and component structuring.
            </p>
            <div className='d-flex'>
                {
                    techStackFront.map((tech,index)=>(
                        <div className='tech-button ps-2 pt-3 pb-3 pe-2 me-2 d-flex align-content-center
                          align-items-center' key={index}>
                         {tech}
                        </div> 
                    ))
                }
            </div>
            <div className='d-flex'>
              <div className='front-code-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/ReactRouter/tree/main' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Source code
                </a>
              </div>
            </div>
        </div> 
      </div>

      {/* Shopping Page  */}

       <div className='row mt-5'>
        <div className='col-12 col-lg-6 d-flex justify-content-center order-lg-2'>
         <img src="/shop.png" className='project-image' alt='project screenshot'/>
        </div>
        <div className='col-12 mt-4 col-lg-6 mt-lg-0 justify-content-center align-items-center align-content-center 
         justify-items-center'>
         <div className=' d-flex align-items-center align-content-center 
         justify-items-center'>
            <h1 className='text-white me-5'>Shopping Home Page</h1>
            <div className='project-button ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
            align-items-center'>
              <a href='https://shoppingpagecontextapi.netlify.app/' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
               <i class="fa-solid fa-link me-2"></i>Demo
              </a>            
            </div> 
        </div>
            <p className='text-white'>Todo App is a React-based task management application that allows users to add, edit, delete, and mark tasks as completed. 
            It features a clean UI and real-time updates to help users stay organized and productive. 7
            This project demonstrates fundamental React concepts like state management, conditional rendering, and component structuring.
            </p>
            <div className='d-flex'>
                {
                    techStackFront.map((tech,index)=>(
                        <div className='tech-button ps-2 pt-3 pb-3 pe-2 me-2 d-flex align-content-center
                          align-items-center' key={index}>
                         {tech}
                        </div> 
                    ))
                }
            </div>
            <div className='d-flex'>
              <div className='front-code-button mt-4 me-4 ps-2 pt-3 pb-3 pe-2 d-flex align-content-center
                align-items-center'>
                <a href='https://github.com/Ramyadevi-web/contextAPI' className='text-decoration-none'
              style={{ all:'unset' }} target='_blank'>
                Source code
                </a>
              </div>
            </div>
        </div> 
      </div>
      
     </div>
</section>
   
  )
}

export default Project
