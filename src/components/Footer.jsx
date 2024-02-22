import {  FcRight} from 'react-icons/fc'
import logo from '../assets/logo.svg'
import {Facebook, InstagramIcon, LinkedinIcon, MapPinIcon, MessageSquare, Phone, XIcon } from 'lucide-react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-500 px-12 text-white"> 
        < div className='flex flex-col md:flex-row' >
          <div  className='p-3'>
            <img src={logo} alt=""  className=' w-64'/>
            <p className='py-3 font-extralight text-white'>Delivering top-notch services in ICT since 2012.</p>

            <div className='h-[2px] bg-myOrange my-3'></div>
            <span className='text-sm  py-3'> <MapPinIcon />Kahawa Sukari <br /> Office suite 101</span>
            

            <div className='flex  gap-3  '>
              <div className='bg-myBlue rounded-full p-2' >
                <Facebook/>
              </div>
              <div className='bg-myBlue rounded-full p-2'>
                <XIcon/>
              </div>

              <div className='bg-myBlue rounded-full p-2'>
                <LinkedinIcon/>
              </div>

              <div className='bg-myBlue rounded-full p-2'>
                <InstagramIcon/>
              </div>

            
            </div>

          </div>

          <div className='md:basis-3/4 flex justify-around flex-col font-extralight md:flex-row w-full'>

            <div className='flex justify-between p-3'>
              <div className='py-6'>
                <p className=' font-bold py-6 '>Company </p>
                <div className='flex flex-col gap-3 text-charcoal'> 
                    <span><Link to='/careers'>Careers</Link></span>
                    <span><Link to='/team'>Our Team</Link></span>
                </div>
              </div>
            </div>

            
            <div className='flex justify-between p-3'>
              <div className='py-6'>
                <p className=' font-bold py-6 '>About Us  </p>
                <div className='flex flex-col gap-3 text-charcoal'> 
                    
                    <span><Link to='/track-record'>Track Record</Link></span>
                    <span><Link to='/services'>Services</Link></span>
                    <span><Link to='/why-iroko'>Why PresCom</Link></span>
                </div>
              </div>
            </div>

           
            

            <div className='flex justify-between p-3'>
              <div className='py-6'>
                <p className=' font-bold py-6 '>Support </p>
                <div className='flex flex-col gap-3 text-charcoal'> 
                    <span><Link to='/faqs'>FAQs</Link></span>
                    {/* <span><Link to='/how-it-works'>How it Works</Link></span> */}
                    <span>Contact Support</span>
                </div>
              </div>
            </div>

            <div className='flex justify-between p-3'>
              <div className='py-6'>
                <p className=' font-bold py-6 '>Contact Us </p>
                <div className='flex flex-col gap-3 text-charcoal'> 
                    <span className='flex items-center gap-2'><Phone/>  0710-300-811/ 0722-614-589</span>
                    <span className='flex items-center gap-2'> <MessageSquare/>Send us a message</span>
            
                    
                </div>
              </div>
            </div>



          </div>

          

          

          



        </div>

        
        <div className="text-center ">
            <p className="py-3 text-lightblue font-extralight">  
                Copyright &copy; 2024 PresCom. All rights reserved.</p>
        </div>

        </div>
  

   
  )
}

export default Footer