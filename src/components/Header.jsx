import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

export default function Header() {

  const [nav ,setNav] = useState(true)


  function handleClick(){
    setNav(!nav)
  }




  return (
    


   <div className=" top-0 z-10   w-full  bg-white sticky ">

        <div className="flex justify-between items-center  ">
            <div className="font-bold text-white md:py-2 px-10 py-2   "> 
            <Link to='/'> 
              <img src={logo} className="md:w-3/4 w-full "/>
            </Link>        

            </div>
            <div className="hidden md:flex px-2 items-center ">
                <ul className="flex md:gap-4">
                    <li className="hover:text-myOrange  text-myBlue text-md  cursor-pointer "><Link to="/">Home</Link></li>

                    <li className="hover:text-myOrange text-myBlue text-md  cursor-pointer ">
                      <Link to='/why-prescom'>About Us</Link>
                    </li>
                    <li className="hover:text-myOrange  text-myBlue text-md  cursor-pointer ">
                      <Link to='/portfolios'>Services</Link>
                    </li>
                    <li className="hover:text-myOrange text-myBlue text-md   cursor-pointer ">
                      <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
                <div className="flex pl-2 "> 
                  <button className='px-6 py-2 text-myOrange  rounded-full bg-transparent border-[2px]  border-myOrange mx-3 hover:bg-myBlue hover:border-myBlue hover:text-white ' >Contact Us</button>
                  </div>
            </div>
         

          <div className="md:hidden px-4 text-myBlue " onClick={handleClick}>
            {nav ?<MenuIcon size={30} /> :  <XIcon size={30} />}

          </div>

          
          



        </div>

        {!nav &&   <div className='relative bg-myBlue'>
        
        <ul className='absolute flex flex-col gap-4 bg-myBlue py-3 px-10   w-full  h-dvh'>

        
              <li className="hover:text-celadon py-2 text-white border-b-slate-300 border-b-[1px]" onClick={handleClick}><Link to='/'>Home</Link></li>

              <li className="hover:text-celadon py-2 text-white border-b-[1px]" onClick={handleClick}>
                 <Link to='/why-iroko' >About Us</Link>
              
              </li>
              <li className="hover:text-celadon py-2 text-white  border-b-[1px]" onClick={handleClick}><Link to='/services'>Services</Link></li>

              <li className="hover:text-celadon  py-2 text-white  border-b-[1px]" onClick={handleClick}><Link to='/projects'>Projects</Link></li>
              <li className="hover:text-celadon  py-2 text-white  border-b-[1px]" onClick={handleClick}><Link to='/quotation'>Quotation</Link></li>
              
         

          


                <div className='flex justify-center ' >
                
                  
                  <Button >Contact Us</Button>

                </div>


        </ul>

                     </div>
  
 
  
          }
        
   </div>
  )
}
