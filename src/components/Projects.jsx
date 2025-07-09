import { MdPreview } from "react-icons/md";

const Projects = ()=>{
    return(
    <>
    <div id="Projects" className="projects bg-gray-950 min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
     <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-center text-blue-600  font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 ">MY PROJECTS</h1>
     </div>
     <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
     <div className="Projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl w-full">
        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">A Banana Farm Website</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-Html , Css , Js </h2>
        <a href="https://tripathifarm.netlify.app/"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div>

        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">TODO Application</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-React , Tailwind CSS </h2>
        <a href="https://mytaskansh.netlify.app/"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div>

        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">A Digital Clock</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-React , Tailwind CSS </h2>
        <a href="https://anshreact2.netlify.app/"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div> 

        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">Image Background Remover</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-Html , CSS , Js</h2>
        <a href="https://bgremoverbyansh.netlify.app/"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div>

        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">8085 Simulator IDE</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-Html , CSS , Js</h2>
        <a href="https://clever-moxie-d0cace.netlify.app/ " target="_blank"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div>

        <div className="  project-1 h-48 w-full sm:h-52 sm:w-full md:h-56 md:w-full lg:h-60 lg:w-full bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"> <div className=" mt-5 text-center px-4 " ><h1 className="text-green-500  text-center font-bold  text-2xl sm:text-2xl md:text-3xl">A Simple Calculator</h1> <br /> <h2 className="text-blue-500 text-center font-bold text-xl">Tech Stack-Html , CSS , Js</h2>
        <a href="https://calculator-by-ansh-0a7550.netlify.app/"><button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform shadow-lg mt-5">Live Preview</button></a></div> 
        </div>
        
        
     </div>
        </div> 
    </div>
     </>
    )
}
export default Projects