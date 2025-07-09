function Contact(){
    return(
        <>
            <div id="Contact" className="form-area bg-gray-950 min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <h1 className="text-center text-blue-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-12 animate-fade-in">CONTACT ME</h1>
                 <form action="https://formspree.io/f/xyzjqqaz"
                 method="POST"
                className="max-w-2xl mx-auto bg-gray-950 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-xl border border-gray-700 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:shadow-blue-900/30">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-blue-300 text-sm font-medium mb-2">Name</label> 
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter Your Name" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-blue-300 text-sm font-medium mb-2">Email</label> 
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="eg: example@gmail.com" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="contact" className="block text-blue-300 text-sm font-medium mb-2">Contact No</label> 
                        <input 
                            type="tel" 
                            id="contact" 
                            placeholder="+91 00000 00000" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                        />
                    </div>
                    
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-blue-300 text-sm font-medium mb-2">Message</label>
                        <textarea   
                            name="message" 
                            id="message"  
                            cols="30" 
                            rows="5"
                            placeholder="Enter your message"
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </form>
               
           
                 
                 </div>
        </>
    )
}

export default Contact;