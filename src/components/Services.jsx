import { Cable, Cctv, Server, ShieldCheck, Wifi } from "lucide-react"


const Services = () => {
  return (
    <div className="px-8 py-3 md:pb-8 bg-myBlue w-full">
        <h1 className="font-bold md:text-4xl   text-2xl text-center md:py-6  py-3 text-white">Our Services</h1>
        <div  className=" flex gap-3 md:flex-row flex-col  justify-center py-6" >
            
            <div className="p-8 bg-white basis-1/3 h-[200px] flex  justify-center items-center flex-col rounded-md shadow-md  shadow-white hover:shadow-xl" >
                <div className="bg-myOrange p-2 rounded-full"> 
                  <Wifi className="text-white " />
                </div>
                <div>
                    <span className="py-3 text-myOrange">Network & Telecommunication</span>
                    <p>
                    
                    </p>
                </div>
            </div>

            <div className="p-8 bg-white basis-1/3 h-[200px] flex  justify-center items-center flex-col rounded-md shadow-md  shadow-white hover:shadow-xl" >
            <div className="bg-myOrange p-2 rounded-full"> 
                  <Server className="text-white " />
                </div>
                <span className="py-3 text-myOrange">Data Center and Servers</span>
            </div>

            <div className="p-8 bg-white basis-1/3 h-[200px] flex  justify-center items-center flex-col rounded-md shadow-md  shadow-white hover:shadow-xl" >
                <div className="bg-myOrange p-2 rounded-full"> 
                  <Cctv className="text-white " />
                </div>
                <span className="py-3 text-myOrange">CCTV and Access Control</span>
            </div>
            <div className="p-8 bg-white basis-1/3 h-[200px] flex  justify-center items-center flex-col rounded-md shadow-md  shadow-white hover:shadow-xl" >
            <div className="bg-myOrange p-2 rounded-full"> 
                  <Cable className="text-white " />
                </div>
                <span className="py-3 text-myOrange">LAN and WAN Solutions</span>
            </div>

            <div className="p-8 bg-white basis-1/3 h-[200px] flex  justify-center items-center flex-col rounded-md shadow-md  shadow-white hover:shadow-xl" >
            <div className="bg-myOrange p-2 rounded-full"> 
                  <ShieldCheck className="text-white " />
                </div>
                <span className="py-3 text-myOrange">IT Security</span>
            </div>

           
            

        </div>
    </div>
  )
}

export default Services