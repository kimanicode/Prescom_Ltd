import { useState } from 'react';
import { LocateIcon, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Banner from '../assets/image4.jpg'
import axios from "axios";




const Contact = () => {



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });
  const [success, setSuccess] = useState(false)
  const [empty, setEmpty] = useState(false)

  const handleInputChange =  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://prescom-api.onrender.com/api/v1/admin/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
          // Additional headers if needed
        },
      });
      console.log('Data sent successfully:', response.data);
      setSuccess(true);
      setEmpty(false);
    } catch (error) {
      console.error('Error sending data:', error.message);
      setEmpty(true);
      setSuccess(false);
    }
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      
    
    
    
    
    // setFormData({
    //   name: "",
    //   email: "",
    //   phone:"",
    //   message: "",
    // })
    // if( formData.message !== '' ){
    // setSuccess(true)
    // setEmpty(false)
    
    // }
    // if (formData.message == '' && formData.email == '' && formData.name == '') {
    //   setEmpty(true)
    // }

    // console.log(formData)
    
    
  };

  
  
 


  return (
    <div className='w-full   px-8 py-4 bg-myblue text-center relative ' id='contact'> 
     <img
          src={Banner}
          alt="Banner Image"
          className="w-screen shadow-md md:h-[70%] h-screen bg-myOrange "
        />
    {/* <p className='text-3xl  text-myOrange font-bold  py-5'>Contact Us</p> */}


        <div className='flex md:flex-row flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 p-7'>
          <div className='p'>
            <p className='text-white font-bold text-2xl text-start '>Get in touch</p>
            {/* <span className='text-gray-300'>
              Please feel free to reach out to us at any time!

            </span> */}


            <div className='py-7 '>

            <div  className='py-2  flex justify-between text-center items-center'>
              <strong className='text-myOrange hover:bg-mygray/50 py-2  rounded' ><Phone/></strong> 
              <span className='text-white px-3'>0710-300-811/ 0722-614-589</span>
            </div>

            <div  className='py-2  flex justify-items-start text-center items-center'>
              <strong className='text-myOrange  hover:bg-mygray/50 py-2 rounded' ><Mail/></strong>    
              <span className='text-white px-3'>info@presccom.co.ke</span>
            </div>

            <div  className='py-2  flex justify-items-start text-center items-center'>
              <strong className='text-myOrange hover:bg-mygray/50 py-2 rounded' ><LocateIcon/></strong> 
              <span className='text-white px-3'>Nairobi, Kenya</span>
            </div>

            


            </div>
          </div>


          <div className='shadow-xl bg-myBlue rounded-2xl flex flex-col shadow-orange  basis-1/2 p-5 '> 

          <input type="text" name="name" className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name " required onChange={handleInputChange} value={formData.name}/>
          
          <input type="email" name="email" className="mt-2 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email " required onChange={handleInputChange}   value={formData.email} />


          <input type="text" name="phone" className="mt-2 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+254-700-000-000 " required onChange={handleInputChange}   value={formData.phone} />

          <textarea id="message" rows="4" className="block p-2.5 mt-2  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={handleInputChange} value={formData.message} name='message'></textarea>

          <Button className='py-2 px-4 w-1/2  hover:bg-myOrange/50 text-white  font-bold mt-2 rounded bg-myOrange' onClick={handleSubmit}>
            Send
          </Button>
          {success && <div className='text-green-600 font-bold py-2'>Message sent successfully </div>}
          {empty && <div className='text-red-600 font-bold py-2'>Message not sent  </div>}
          
          </div>
        
        </div>
        
    </div>
  )
}

export default Contact