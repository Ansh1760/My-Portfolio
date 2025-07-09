import { skillsData } from "./skillsData"
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaNode,
    FaBootstrap,
    FaJava,
    FaPython
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql
} from 'react-icons/si';

const Skills = ()=>{
     const iconMap = {
        FaHtml5: <FaHtml5 />,
        FaCss3Alt: <FaCss3Alt />,
        FaJs: <FaJs />,
        FaReact: <FaReact />,
        SiMongodb: <SiMongodb />,
        FaNode: <FaNode />,
        SiExpress: <SiExpress />,
        SiMysql: <SiMysql />,
        SiTailwindcss: <SiTailwindcss />,
        FaBootstrap: <FaBootstrap />,
        FaJava: <FaJava/>,
        FaPython: <FaPython/>
    };
    return(
      <>
      <div className="skills-sec min-h-screen md:h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 md:px-8" id="Skills">
        <div className="pt-4 sm:pt-6 md:pt-7 w-full max-w-6xl">
            <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5 md:mb-6 lg:mb-7 text-blue-600">MY SKILLS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center font-bold">
                {skillsData.map((val,idx)=>{
                    return(
                       
                        <div key={idx} className=" border-glow bg-gradient-to-br from-gray-550 border shadow-lg shadow-purple-500/50 rounded-md p-4 sm:p-5 md:p-6 hover:scale-105 transition-transform duration-300 border-2 border-transparent bg-gradient-to-r animate-pulse">
                            <div className="flex flex-col justify-center items-center">
                             <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 mb-2 sm:mb-3 md:mb-4"> {iconMap[val.icon]}</span> 
                            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-1 sm:mb-2">{val.name}</h2>
                            <div className="w-full bg-gray-800 rounded-full h-2 shadow-inner">
<div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
  <div 
    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full animate-pulse"
    style={{width: `${val.progress}%`}}
  ></div>
</div>
</div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
      </>
    )
}
export default Skills