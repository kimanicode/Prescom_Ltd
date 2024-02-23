import { Button } from '@/components/ui/button'
import myImage from '../assets/us-min.jpg'

const AboutUs = () => {
  return (
    <div className="px-8 w-full">
       <p className="py-4  px-5 text-3xl font-bold text-white h-1/2 bg-myBlue w-full ">About Us </p>

       <div className="flex py-6 md:flex-row flex-col px-5 ">
         <div className="basis-1/2 flex flex-col  justify-center">
            <p className='md:text-5xl text-3xl text-myBlue  font-semibold py-3'> Lets build a better world with technology.
            </p>
            <span className='py-3 text-stone-500'>
            Your Trusted Partner in Network and Telecommunications <br />

            Lets build a better world with technology.
 

            </span>

           <div className='py-4 md:w-1/2'>
           <Button className='py-3 bg-myOrange w-full'> Discover More</Button>
           </div>

         </div>
         <div className="basis-1/2 p-3">
         <img src={myImage} alt=""  className=" w-full rounded-xl h-full"/>


        </div>

         
       </div>

       <div>
        
       </div>

    </div>
  )
}

export default AboutUs