import React from "react";
function Service (){
    const CardList = [
        {
            Icon : "Vector.png",
            Title: "You’re in Control",
            Descrip: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            Icon : "ph_graph-duotone.png",
            Title: "Infinitely Scalable",
            Descrip: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            Icon : "ph_arrows-out-cardinal-duotone.png",
            Title: "Incredibly Flexible",
            Descrip: " Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        }

    ]
    return(
        <>
        
         <section className="  py-8 px-6  md:py-20 bg-[#002228]">
       

         <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10 ">
            {CardList.map((Data,index)=>(
                <div key={index}>
                   <div className=" space-y-6 gap-4">
                      <div className=" bg-primary  flex max-w-12 max-h-12 rounded-full w-4/5 items-center justify-center">
                      <img className=" " src={Data.Icon} alt="" />
                      </div>
                      <div className="md:pr-20 space-y-2">
                          <h2 className="text-xl text-white">{Data.Title}</h2>
                          <p className="text-gray-400 text-sm">{Data.Descrip}</p>
                      </div>
                   </div>
                </div>
            ))
            
            }
         </div>
         </section>
      
         </>
    )
}



export default  Service;