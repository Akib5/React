import React from "react";
function Hero (){
      return(
            <>
             <section className="bg-[#02242A] py-12     ">
                  <div className="container mx-auto    ">
                        <div className="sm:space-y-6 space-y-3 flex flex-col  items-center  sm:items-start justify-center">
                          <h4 className="text-md md:text-xl  text-[#0FF1F6]  ">AI SDRs (aiDRs)</h4>
                          <h1 className="text-2xl lg:text-[45px] font-semibold text-white md:pr-[700px]  ">More leads,  less people.</h1>
                          <p className="text-white   ">Train an aiDR on your ICP and messaging matrix. <br />Activate it on a patch. It will send personalized   <br />sequences to every target contact.</p>
                          <button className="bg-[#0FF1F6] px-3 py-2  rounded-full  items-center    ">Sign up for the Beta</button>
                        </div>
                  </div>
             </section>



             <section className="bg-[#07292F]"> 

                  <div className="container mx-auto flex flex-col items-center py-6 md:py-12">
                        <h4 className="text-[#0FF1F6] text-lg">our trusted partners</h4>
                        <img src="Logos.png" alt="" />
                  </div>
             </section>
            </>
      )

}

export default Hero;