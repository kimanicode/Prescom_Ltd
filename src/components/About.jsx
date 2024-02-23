//import { FcMoneyTransfer, FcBarChart, FcWorkflow  } from "react-icons/fc";
import { LayoutGrid } from 'lucide-react'
import myImage from '../assets/us-min.jpg'

  



const About = () => {

    

    
  return (
    <div className="px-8 md:pb-8">
        

        
        <div className="flex md:flex-row flex-col-reverse ">
           <div className="basis-1/2 md:p-8 p-2"> 

           <img src={myImage} alt=""  className=" w-full rounded-2xl h-full"/>


           </div>

           <div className="basis-1/2 md:py-8 py-2 " >
           

            <p className='font-bold md:text-4xl   text-2xl text-center py-2 text-myBlue'>Why Choose Us</p>
            
            <div className=' flex   flex-col gap-3 '>
                <div className='flex  gap-2 md:flex-row flex-col'>
                    <div className=' bg-myOrange p-3 rounded-full  text-white flex justify-center items-center w-[100px] h-[100px]'>
                    <LayoutGrid className='' />
                    </div>
                    <div className='basis-2/3'> 
                        <p className='font-bold text-myOrange'>Proven Expertise</p>
                        <span className='font-thin text-sm'>We bring over a decade of unparalleled experience in the Information and Communication Technology sector. </span>
                    </div>

                </div>

                <div className='flex  gap-2 md:flex-row flex-col '>
                    <div className=' bg-myBlue p-3 rounded-full w-[100px] h-[100px] text-white flex justify-center items-center'>
                    <LayoutGrid className='' />
                    </div>
                    <div className='basis-2/3'>
                        <p className='font-bold text-myBlue '> Comprehensive Service Range</p>
                        <span className='font-thin text-sm'>From Network Infrastructure and Data Center Solutions to CCTV and Access Control, our diverse portfolio covers the entire spectrum of ICT services.</span>
                    </div>

                </div>


                <div className='flex  gap-2 md:flex-row flex-col'>
                    <div className=' bg-myOrange p-3 rounded-full  text-white flex justify-center items-center w-[100px] h-[100px] '>
                    <LayoutGrid className='' />
                    </div>
                    <div className='basis-2/3 '>
                        <p className='font-bold text-myOrange'>Innovation at Core</p>
                        <span className='font-thin text-sm'>We stay ahead of technological advancements, offering you state-of-the-art solutions. </span>
                    </div>

                </div>

                <div className='flex  gap-2 md:flex-row flex-col '>
                    <div className=' bg-myBlue p-3 rounded-full   w-[100px] h-[100px] text-white flex justify-center items-center'>
                    <LayoutGrid className='' />
                    </div>
                    <div className='basis-2/3 p-2'>
                        <p className='font-bold text-myBlue'> Client-Centric Approach</p>
                        <span className='font-thin text-sm '>Our collaborative approach ensures tailor-made solutions that set the foundation for long-term success. </span>
                    </div>

                </div>
            </div>
           

           </div>
        </div>


      



    </div>
  )
    }

export default About