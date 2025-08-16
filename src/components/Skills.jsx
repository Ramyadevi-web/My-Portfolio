import React, { useState } from 'react'

function Skills() {

  let [hoveredIndex,setHoveredIndex] = useState(null)
  let skillArr = [
    {
      imgName : "html.png",
      skillName : "HTML",
      border: "1px solid #E44D26",
      boxShadow: "0PX 1PX 4PX 3PX #E44D26"
    },
    {
      imgName : "css.png",
      skillName : "CSS",
      border: "1px solid #264DE4",
      boxShadow: "0PX 1PX 4PX 3PX #264DE4"
    },
    {
      imgName : "tw.png",
      skillName : "Tailwind CSS",
      border: "1px solid #38BDF8",
      boxShadow: "0PX 1PX 4PX 3PX #38BDF8"
    },
    {
      imgName : "js.png",
      skillName : "Javascript",
      border: "1px solid #F7DF1E",
      boxShadow: "0PX 1PX 4PX 3PX #F7DF1E"
    },
    {
      imgName : "my-sql.png",
      skillName : "MySQL",
      border: "1px solid #00758F",
      boxShadow: "0PX 1PX 4PX 3PX #F29111"
    },
    {
      imgName : "MongoDB.png",
      skillName : "MongoDB",
      border: "1px solid #47A248",
      boxShadow: "0PX 1PX 4PX 3PX #47A248"
    },
    {
      imgName : "nodejs.png",
      skillName : "NodeJS",
      border: "1px solid #339933",
      boxShadow: "0PX 1PX 4PX 3PX #339933"
    },
    {
      imgName : "react.png",
      skillName : "React",
      border: "1px solid #61DAFB",
      boxShadow: "0PX 1PX 4PX 3PX #61DAFB"
    },
    {
      imgName : "github-icon.png",
      skillName : "GitHub",
      border: "1px solid #181717",
      boxShadow: "0PX 1PX 4PX 3PX #FFFFFF"
    }
  ]
  return (
    <section className='container-fluid odd-div py-5' id='skills'>
     <div className='row justify-content-center text-white text-center mb-4 pb-4'>
         <h1>&lt;Skills <span className='blue-text'>/ </span>&gt;</h1>
     </div>
  <div className='row g-4 justify-content-center'>
     {
       skillArr.map((item,index)=>{
         return <div className='col-6 col-md-4 col-lg-2 d-flex justify-content-center'  key={index}>
             <div className='skill-card d-flex flex-column justify-content-center  align-items-center'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
                  style={{border : item.border,
                  boxShadow : item.boxShadow,
                  backgroundColor : hoveredIndex === index ? "#200e41f5" : "transparent",
                  width : hoveredIndex === index ? "160px" : "150px",
                  height : hoveredIndex === index ? "160px" : "150px",
                  transition: "background-color 0.3s ease"}}>
             <img src={`/${item.imgName}`} className='image-fluid skill-logo mt-3 mb-4'/>
              <span className='white-text fw-bold mb-3'>{item.skillName}</span>
             </div>
         </div>
       })
     }
     </div>
    </section>
  )
}

export default Skills
