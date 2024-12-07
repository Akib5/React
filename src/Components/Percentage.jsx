import React from "react";

function Percentage (){
      return(
            <>
            <section className="bg-primary">
                  <div className="container mx-auto flex flex-col py-3 md:py-12 md:flex-row justify-between  px-6 ">
                  
                    <div className=" space-y-2 ">
                        <h2 className="text-white text-2xl md:pr-[100px] ">Allocate effort where your reps make an inpact.</h2>
                        <h3 className="text-secondary text-xl ">Let us handle the rest.</h3>
                        <p className="text-gray-400 text-lg">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

                              <div className="flex flex-col sm:flex-row  gap-4 overflow-hidden pr- ">
                                    <div className=" w-32  ">
                                          <span className="text-secondary text-4xl font-bold">32%</span>
                                          <p className="text-gray-300  ">Improvement in Open Rates</p>
                                    </div>
                                    <div className="w-32">
                                          <span className="text-secondary text-4xl font-bold">32%</span>
                                          <p className="text-gray-300">Improvement in Open Rates</p>
                                    </div>
                                    <div className="w-32">
                                          <span className="text-secondary text-4xl font-bold">32%</span>
                                          <p className="text-gray-300">Improvement in Open Rates</p>
                                    </div>
                              </div>
                    </div>

                  </div>
            </section>
            </>
      )
}

export default Percentage;