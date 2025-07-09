import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // For hamburger & close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 text-white fixed top-0 left-0 w-full z-50 ">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Ashwini</h1>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
         <li className="hover:text-blue-400 cursor-pointer"><a href="#Home">Home</a></li>
         <li className="hover:text-blue-400 cursor-pointer"><a href="#About">About</a></li>
         <li className="hover:text-blue-400 cursor-pointer"><a href="#Skills">Skills</a></li>
         <li className="hover:text-blue-400 cursor-pointer"><a href="#Projects">Projects</a></li>
         <li className="hover:text-blue-400 cursor-pointer"><a href="#Contact">Contact</a></li>
         </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-lg bg-gray-900">
          <li  className="hover:text-blue-400 cursor-pointer"><a href="#Home">Home</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#About">About</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#Skills">Skills</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#Projects">Projects</a></li>
         <li className="hover:text-blue-400 cursor-pointer"><a href="#Contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
