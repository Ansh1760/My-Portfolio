const About=()=>{
    return(
    <>
    <div id="About" className=" block About md:flex  justify-center pt-16 sm:pt-20 md:pt-10 items-center bg-gray-950 h-screen text-white text-center">
        <div className="img-about">
            <img src="/pictures/Anshh.jpg" alt="about-image" className="h-50 w-46 sm:h-48 sm:w-44 md:h-60 md:w-52 lg:h-80 lg:w-64 m-auto sm:ml-8 md:ml-16 lg:ml-25 shadow-2xl shadow-black rounded-2xl cursor-pointer hover:scale-110 duration-300 transition-transform animate-pulse" />
        </div>
        <div className="text-about w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-30 ml-4 sm:ml-6 md:ml-8 lg:ml-40 pb-2 sm:pb-3 md:pb-4 lg:pb-5 animate-pulse">ABOUT ME</h1>
            <p className="text-sm ml-5 sm:text-sm  md:text-xs lg:text-lg mt-2 sm:mt-3 md:mt-4 font-bold pl-4 sm:pl-6 md:pl-8 lg:pl-10 w-[95%] sm:w-[90%] md:w-[90%] lg:w-[50%] ml-0 sm:ml-4 md:ml-8 lg:ml-90 mb-8 sm:mb-12 md:mb-16 lg:mb-40">
                Hello! I'm Ashwini Tripathi, a B.Tech Computer Science student from Shri Ramswaroop Memorial University, originally from Bahraich, Uttar Pradesh. I started my coding journey in my first semester and fell in love with the perfect blend of designing and logic that full stack development offers.
                What excites me most is creating seamless user experiences through clean code and intuitive interfaces. When I'm not coding, I enjoy exploring music, which keeps my creativity flowing.
                Currently, I'm actively seeking opportunities to join a dynamic team where I can contribute meaningfully while growing as a developer. My goal is to work with a company that values innovation and continuous learning.
            </p>
        </div>
    </div>
    </>
    )
}
export default About