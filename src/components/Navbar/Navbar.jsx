import React from 'react'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import Profile_img from '../../assets/Profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'


const Navbar = () => {
  return (
    <nav className="bg-black/30 backdrop-blur-md  p-1  fixed top-0 w-full z-10">
    <div className="container mx-auto flex items-center justify-between">
      {/* Left side - Movieflix logo */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-blue-600 font-bold text-xl">MovieFlix</a>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">TV Shows</a></li>
          <li><a href="#" className="hover:text-gray-400">Movies</a></li>
          <li><a href="#" className="hover:text-gray-400">New & Popular</a></li>
          <li><a href="#" className="hover:text-gray-400">My List</a></li>
        </ul>
      </div>

      {/* Right side - Search, Kids, Notifications, Avatar */}
      <div className="navbar flex items-center justify-between gap-5 p-4 ">
      <img src={search_icon} alt="Search" className="w-5 h-5 text-white" />
      <p className="text-white">Children</p>
      <img src={bell_icon} alt="Notifications" className="w-5 h-5 text-white" />

      {/* Group for hover effect */}
      <div className="relative flex items-center justify-center gap-1 group">
        <img src={Profile_img} alt="Profile" className="w-7 h-7 rounded-full border border-gray-300" />
        <img src={caret_icon} alt="Dropdown" className="w-3 h-3 text-white" />

        {/* Dropdown Menu */}
        <div className="absolute top-full right-0 bg-[#191919] p-2 border border-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
          <p onClick={()=>{logout()}} className="text-sm text-white cursor-pointer">Sign out of MovieFlix</p>
        </div>
      </div>
    </div>

    </div>
  </nav>
);
};

export default Navbar;
