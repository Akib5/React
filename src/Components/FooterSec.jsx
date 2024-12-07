import React from "react";
function FooterSec ( ){
      return(
            <> 
              <section className="bg-[#07292F] py-4"> 
                  <div className="container mx-auto flex flex-col md:flex-row sm:justify-between items-center">
                        <img className="w-20 " src="Logo.png" alt="" />
                        <p className="text-white ">Copyright © 2023 Wizia. All rights reserved.</p>
                  </div>
              </section>
            </>
      )
}
export default FooterSec;