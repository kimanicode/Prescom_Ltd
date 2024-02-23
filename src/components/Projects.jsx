import ProjectCard from "./ProjectCard"
import imageUrl from '../assets/cctv-min.jpg'
import maint from '../assets/maint-min.jpg'
import wan from '../assets/wan-min.jpg'
import server from '../assets/server-min.jpg'
import wifi from '../assets/wifi-min.jpg'



const Projects = () => {
  return (
    <div className="px-8 py-3 md:pb-8 bg-white w-full">  
         <h1 className="font-bold md:text-4xl   text-2xl text-center md:py-6  py-3 text-myOrange">Recent Projects</h1>

         <div className="grid md:grid-cols-3 gap-4">
         <ProjectCard
            imageUrl={imageUrl}
            title="CCTV and WIFI Installation"
            description="Supply, Install, Test and Commission"
            location='JKIA Nairobi'
         />

        <ProjectCard
            imageUrl={maint}
            title="Maintenance"
            description="Maintenance of computers, Printers,servers, scanners, Projectors and other ICT equipment"
            location='Kiambu County Government'
         />

<ProjectCard
            imageUrl={wan}
            title="LAN,WIFI and IP Telephony"
            description="Support ,Service and Maintenance."
            location='JKIA Nairobi'
         />

        <ProjectCard
            imageUrl={server}
            title="Supply of servers"
            description="Supply, Install, Test, and Commission."
            location='ST Andrews College -Kirinyaga'
         />

        < ProjectCard
            imageUrl={imageUrl}
            title="LAN and WAN"
            description="Design ,supply , install, test and commission ."
            location='Phoenix Aviation'
         />

        <ProjectCard
            imageUrl={wifi}
            title="WIFI Installation"
            description="Support, Service, and Maintenance"
            location='Abercrombie and Kent- MSA Rd'
         />
         </div>

    </div>
  )
}

export default Projects