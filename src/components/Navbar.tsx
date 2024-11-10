import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1A242D] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">WilsXR</span>
          </div>

          <div className={`
            fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto
            bg-[#1A242D] md:bg-transparent z-50 md:flex items-center
            transform transition-transform duration-300
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}>
            <div className="md:hidden flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Accounts
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
              <button className="bg-[#FF4655] text-white px-4 py-2 rounded-lg hover:bg-[#FF5864] transition-colors flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart (0)
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-gray-300 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;