import { FaArrowUp, FaGithub, FaLinkedin,  } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Go to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:from-purple-500 hover:to-blue-400 transition-all duration-300 group"
          aria-label="Go to top"
        >
          <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
        </button>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Ashwini Tripathi
            </h2>
            <p className="mt-2 text-sm">Full Stack Developer & UI Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ansh1760" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://linkedin.com/in/infoashwini/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
           
            <a 
              
              href="mailto:tripathiansh1760@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
              aria-label="Twitter"
            >
              <MdOutlineMailOutline className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Ashwini Tripathi. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;