import React from 'react';
import { Shield, Globe, User, Gamepad2, Box } from 'lucide-react';

interface AccountCardProps {
  rank: string;
  price: number;
  region: string;
  level: number;
  skins: number;
  agents: number;
  email: string;
  stock: number;
  image: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  rank,
  price,
  region,
  level,
  skins,
  agents,
  email,
  stock,
  image
}) => {
  return (
    <div className="bg-[#1A242D] rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={`${rank} Account`} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#FF4655] text-white px-3 py-1 rounded-full text-sm">
          {stock} in stock
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{rank}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-300">
            <Globe className="w-4 h-4 mr-2 text-[#FF4655]" />
            <span>{region}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <User className="w-4 h-4 mr-2 text-[#FF4655]" />
            <span>Level {level}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Shield className="w-4 h-4 mr-2 text-[#FF4655]" />
            <span>{skins} Skins</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Gamepad2 className="w-4 h-4 mr-2 text-[#FF4655]" />
            <span>{agents} Agents</span>
          </div>
          <div className="flex items-center text-gray-300 col-span-2">
            <Box className="w-4 h-4 mr-2 text-[#FF4655]" />
            <span>{email}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${price}</span>
          <button className="bg-[#FF4655] text-white px-6 py-2 rounded-lg hover:bg-[#FF5864] transition-colors">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;