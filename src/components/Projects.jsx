import ProjectCard from "./ProjectCard"
import imageUrl from '../assets/cctv.jpg'
import maint from '../assets/maint.jpg'
import wan from '../assets/wan.jpg'
import server from '../assets/server.jpg'
import wifi from '../assets/wifi.jpg'



const Projects = () => {
  return (
    <div className="px-8 py-3 md:pb-8 bg-white w-full">  
         <h1 className="font-bold md:text-4xl   text-2xl text-center md:py-6  py-3 text-myOrange">Recent Projects</h1>

         <div className="flex gap-6 flex-wrap">
         <ProjectCard
            imageUrl={imageUrl}
            title="CCTV and WIFI Installation"
            description="Supply, Install, Test and Commission"
         />

        <ProjectCard
            imageUrl={maint}
            title="Maintenance"
            description="Maintenance of computers, Printers,servers, scanners, Projectors and other ICT equipment"
         />

<ProjectCard
            imageUrl={wan}
            title="LAN,WIFI and IP Telephony"
            description="Support ,Service and Maintenance."
         />

        <ProjectCard
            imageUrl={server}
            title="Supply of servers"
            description="This is a brief description of the awesome project. It highlights key features and benefits of the project."
         />

        < ProjectCard
            imageUrl={imageUrl}
            title="LAN and WAN"
            description="Design ,supply , install, test and commission ."
         />

        <ProjectCard
            imageUrl={wifi}
            title="WIFI Installation"
            description="This is a brief description of the awesome project. It highlights key features and benefits of the project."
         />
         </div>

    </div>
  )
}

export default Projects