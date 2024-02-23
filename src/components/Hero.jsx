import Banner from '../assets/earth.jpg'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';


export const Hero = () => {
  return (
  <div className="bg-gray-800 text-white  w-full flex items-center justify-center">
      <div className=" text-center relative  ">
        
        <img
          src={Banner}
          alt="Banner Image"
          className="w-screen shadow-md md:h-[70%] h-screen opacity-75"
        />
         <div className=' text-start flex flex-col basis-1/2 px-10 py-3 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          items-center justify-center '>

        <div className=' text-center'>
          <h2 className='text-my-Orange md:text-6xl text-3xl  mb-4 font-medium'> Empowering Tomorrows Connectivity Today</h2>
          
          <p className=' mb-4 text-gray-100  text-2xl py-4'>Crafting Excellence in ICT Solutions Since 2012 </p>

        </div>

        <div className='flex gap-6 md:flex-row flex-col'> 
          
          <Button className='rounded-full  bg-myOrange  md:w-[200px] hover:bg-myOrange/80 '>
            <Link to='/contact-us'>Get Quotation</Link>
          </Button>

          <Button className='bg-outline border-white hover:border-myBlue border-2 rounded-full md:w-[200px] hover:bg-myBlue'>Learn More</Button>
        </div> 


        </div>
      </div>
     

      
    </div>
  )
}
