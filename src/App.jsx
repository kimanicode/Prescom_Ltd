import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Hero } from "./components/Hero"
//import Items from "./components/Items"
import {BrowserRouter as Router , Routes ,Route}from "react-router-dom";
import Team from "./pages/Team"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import AboutUs from "./pages/AboutUs"


function App() {
 

  return (
    <Router>
        <div className="">

        <Header/>

        <Routes>
        <Route path= '/' >
         <Route path = '/'  element={<><Hero/><About /> <Services/> <Projects/> <Contact/></> } exact />

        </Route>

        <Route path='/team' element={<Team />} />
        <Route path='/why-prescom' element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />
        
      
      
       
         </Routes>

        <Footer/>
         
        </div>
    </Router>
  )
}

export default App
