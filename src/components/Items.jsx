import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import kim from '../assets/kim.jpg'
import moh from '../assets/moh.png'
import doe from '../assets/moh.jpeg'


import { QuoteIcon, } from "lucide-react"


const Items = () => {
  return (
    <div className="w-full  bg-primary p-8 ">  

     <p  className="text-center text-3xl md:text-4xl font-semibold text-cyan-400  py-6">Testimonials</p>
       <div className=" sm:hidden md:flex items-center w-2/3  m-auto">
       <Carousel>
              <CarouselContent >
                  <CarouselItem>
                    <div className="flex flex-col justify-center items-center shadow-gray-200 shadow-md p-2 md:w-full bg-zinc-300/80 gap-3 rounded-md" >
                      <div className=" ">
                          
                          <img src={kim} alt=""  className="w-28 bg-secondary h-28 rounded-full"/>
                          <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl text-slate-950 font-semibold">Kimani Karaba</p>
                            <span className="text-primary text-sm">Property Manager</span>

                          </div>

                      


                      </div>
                      <p className="text-green-900">
                        <QuoteIcon />
                      </p>

                      <span className="   text-center text-white">
                        
                        Iroko is a lifesaver, property management couldnt be <br />this easier.Great piece of art.
                        
                      </span>

                      <span><p/></span>

                    </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div className="flex flex-col justify-center items-center shadow-gray-200 shadow-md p-2 md:w-full bg-zinc-300 gap-3 rounded-md" >
                      <div className=" ">
                          
                          <img src={moh} alt=""  className="w-28 bg-secondary h-28 rounded-full"/>
                          <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl text-slate-950 font-semibold">Wanjiku M</p>
                            <span className="text-primary text-sm">Property Manager</span>

                          </div>

                      


                      </div>
                      <p className="text-green-900">
                        <QuoteIcon />
                      </p>

                      <span className=" font-semibold font-sm  text-center text-primary">
                        
                                                I am thrilled by the simplicity iroko poses. From tenant screening to managing repairs requests.
                      </span>

                      <span><p/></span>

                    </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div className="flex flex-col justify-center items-center shadow-gray-200 shadow-md p-2 md:w-full bg-zinc-300 gap-3 rounded-md" >
                      <div className="">
                          
                          <img src={doe} alt=""  className="w-28 bg-secondary h-28 rounded-full"/>
                          <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl text-slate-950 font-semibold">John Doe</p>
                            <span className="text-primary text-sm">Tenant</span>

                          </div>

                      


                      </div>
                      <p className="text-green-900">
                        <QuoteIcon />
                      </p>

                      <span className=" font-semibold font-sm  text-center text-primary">
                        
                        Iroko is a lifesaver, property management couldnt be <br />this easier.
                        
                      </span>

                      <span><p/></span>

                    </div>
                  </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
        </Carousel>
       </div>

       <div className="w- h-[1px] mt-10 bg-white"></div>

    </div>
  )
}

export default Items
