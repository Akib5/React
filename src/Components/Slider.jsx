import React, { useState } from "react"
  
function SliderSec(){


    const Slides = [
        {
            id:1,
            heading : " Md Akib",
            description : " Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            image : "/man.png",
            subdesc: " Chief Strategy Officer @ Company"
            
        },
        {
            id:2,
            heading : "John Doe",
            description : "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis Nunc vulputate libero et velit interdum, ac aliquet odio mattis Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            image : "/slider1.png",
            subdesc: " Chief Strategy Officer @ Company"
            
        },
        
        {
            id:3,
            heading : "Md Shakib",
            description : "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
            image : "/slider2.png",
            subdesc: " Chief Strategy Officer @ Company"
        }
        
        
    ];

   const [currentIndex,setCurrentIndex] = useState(0);

   const prevSlide = ()=>{
    setCurrentIndex((preIndex)=>(preIndex === 0? Slides.length -1 :preIndex-1 ))
   }
   const NextSlide = ()=>{
    setCurrentIndex((preIndex)=>(preIndex === Slides.length -1 ? 0 : preIndex +1 ))
   }

    const {heading ,description,image,subdesc} = Slides [currentIndex]

    return(
        <>
      
      <section className="    py-4   bg-primary">
            <div className="flex flex-col md:flex-row  container mx-auto md:px-10 px-2 py-4 md:py-2 w-full  items-center "> 
                {/* left side */}
                <div className="w-full space-y-5   ">
                   
                    <div className="flex  md:flex-row  gap-4  items-center justify-center  ">

                        <button onClick={prevSlide} className="  bg-gray-800 rounded-full sm:p-4 p-2 transtion   duration-300  "> <img className="sm:w-6 sm:h-6 w-4 h-4  object-cover" src="back.png" alt="" /></button>

                        <div className="w-full flex flex-col justify-center items-center space-y-3  md:px-[200px]">
                                    
                              <img className="w-16 " src="Group 9.png" alt="" />
                               
                              <p className=" text-gray-400 text-xl">{description}</p>
                              <h5 className="text-secondary">{heading}</h5>
                              <h6 className="text-gray-700">{subdesc}</h6>
                               


                        </div>

                        <button onClick={NextSlide} className="bg-gray-800 rounded-full md:p-4 p-2"><img   className="sm:w-6 sm:h-6 w-4 h-4 object-cover" src="right-arrow.png" alt="" /></button>

                    </div>
                </div>
                {/* right side */}
                
            </div>
        </section>
        </>
    )
}

export default SliderSec;