import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  show: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ show, onClose }) => {
  const ranks = [
    'Iron',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Ascendant',
    'Immortal',
    'Radiant'
  ];

  const regions = ['NA', 'EU', 'AP', 'KR'];

  return (
    <div className={`
      fixed lg:relative top-0 left-0 h-full w-80 bg-[#1A242D] p-6 
      transform transition-transform duration-300 z-50
      ${show ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h3 className="text-xl font-bold text-white">Filters</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <h4 className="text-white font-semibold mb-4">Price Range</h4>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full bg-[#0F1923] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full bg-[#0F1923] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
            />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Rank</h4>
          <div className="space-y-2">
            {ranks.map((rank) => (
              <label key={rank} className="flex items-center text-gray-300 hover:text-white cursor-pointer">
                <input type="checkbox" className="mr-3 text-[#FF4655]" />
                {rank}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Region</h4>
          <div className="space-y-2">
            {regions.map((region) => (
              <label key={region} className="flex items-center text-gray-300 hover:text-white cursor-pointer">
                <input type="checkbox" className="mr-3 text-[#FF4655]" />
                {region}
              </label>
            ))}
          </div>
        </div>

        <button className="w-full bg-[#FF4655] text-white py-2 rounded-lg hover:bg-[#FF5864] transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;