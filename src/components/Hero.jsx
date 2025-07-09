import { AiFillMessage } from "react-icons/ai";
function Hero(){
    return(
    <div id="Home" className=" home flex justify-center items-center bg-gray-950 h-screen flex-col text-white text-center px-3 sm:px-5 md:px-8">
        <div className="img h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 m-3 sm:m-4 md:m-5 px-2 sm:px-3 md:px-4 drop-shadow-sm">
            <img src="/pictures/ANSH.png" alt="ansh" />
        </div>
        <div className="home-text text">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-600 font-bold mb-3 sm:mb-4 animate-pulse">
                Hey, I'm <span className="text-blue-500">Ashwini</span> 👋
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] m-auto font-bold">
                I create scalable web applications using modern technologies like React, Java, and Spring Boot. From concept to deployment, I build solutions that make a difference.
            </p>
            <a href="/pictures/My Resumee.pdf" download>
                <button className="p-2 sm:p-3 md:p-4 border mt-3 sm:mt-4 bg-gray-950 text-white rounded-xl animate-bounce cursor-pointer shadow text-sm sm:text-base">
                    Download Resume
                </button>
            </a>
         <div className="flex justify-center  text-4xl pt-5 sm:text-4xl md:text-5xl">
             <a className="text-center" href="mailto:tripathiansh1760@gmail.com">
             <AiFillMessage/>
             
            </a>
            
         </div>
           
        </div>
    </div>
    )
}
export default Hero