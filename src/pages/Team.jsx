import { FacebookIcon, LucideLinkedin, TwitterIcon } from 'lucide-react'
import ceo from '../assets/kim.jpg'


const Team = () => {
    // const ourTeam = [
        
    // ]
  return (
    <div className="w-full p-10  h-max">
        <div className="flex justify-between md:flex-row flex-col gap-4">

            <div className='border-2 border-myBlue rounded-ss-2xl rounded-se-[100px] rounded-es-[100px] rounded-ee-2xl p-10  basis-1/3 flex flex-col items-center' >
                <img src={ceo} alt="photo of Kimani" className='rounded-full  w-[200px] h-[200px]' />
                <div className='text-center p-5'>
                    <p className='text-myBlue py-2 font-semibold text-2xl'>Geoffrey Chege</p>
                    <p className='text-sm'>System Engineer</p>
                    
                </div>
                <div className='flex gap-3'>
                    <div className='border-2 rounded-full p-2 border-myBlue'><LucideLinkedin/></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><TwitterIcon /></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><FacebookIcon /></div>
                </div>

            </div>

            
            <div className='border-2 border-myBlue rounded-ss-2xl rounded-se-[100px] rounded-es-[100px] rounded-ee-2xl p-10 flex flex-col items-center basis-1/3' >
                <img src={ceo} alt="photo of Kimani" className='rounded-full  w-[200px] h-[200px]' />
                <div className='text-center p-5'>
                    <p className='text-myBlue py-2 font-semibold text-2xl'>David Njogu</p>
                    <p className='text-sm'>System Engineer</p>
                    
                </div>
                <div className='flex gap-3'>
                    <div className='border-2 rounded-full p-2 border-myBlue'><LucideLinkedin/></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><TwitterIcon /></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><FacebookIcon /></div>
                </div>

            </div>


             
            <div className='border-2 border-myBlue rounded-ss-2xl rounded-se-[100px] rounded-es-[100px] rounded-ee-2xl p-10 flex flex-col items-center basis-1/3' >
                <img src={ceo} alt="photo of Kimani" className='rounded-full  w-[200px] h-[200px]' />
                <div className='text-center p-5'>
                    <p className='text-myBlue py-2 font-semibold text-2xl'>James Muthua</p>
                    <p className='text-sm'>System Engineer</p>
                    
                </div>
                <div className='flex gap-3'>
                    <div className='border-2 rounded-full p-2 border-myBlue'><LucideLinkedin/></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><TwitterIcon /></div>
                    <div className='border-2 rounded-full p-2 border-myBlue'><FacebookIcon /></div>
                </div>

            </div>

            


            

            

        </div>

           

    </div>
  )
}

export default Team
