"use client";

import React, { useState } from 'react';
import { FaBars, FaFileAlt, FaStar } from 'react-icons/fa'; // Add any icons you prefer

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile view: Hamburger menu icon */}
      <div className="md:hidden flex p-4 bg-white border-b">
        <FaBars onClick={toggleSidebar} className="text-gray-700 cursor-pointer" size={24} />
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 p-4 h-full bg-white border transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-60 md:h-[100vh] overflow-y-auto z-20`}>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer font-bold">
            <FaBars className="mr-3 text-gray-700" />
            <span className="text-gray-700">Dashboard</span>
          </li>
          <li className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer font-bold">
            <FaStar className="mr-3 text-blue-500" />
            <span className="text-blue-500">Skill Test</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer font-bold">
            <FaFileAlt className="mr-3 text-gray-700" />
            <span className="text-gray-700">Internship</span>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile view when sidebar is open */}
      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 md:hidden z-10"></div>}
    </div>
  );
};

export default Sidebar;

