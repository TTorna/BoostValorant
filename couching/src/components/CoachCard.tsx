import React from 'react';
import { Star } from 'lucide-react';

interface CoachCardProps {
  name: string;
  rank: string;
  speciality: string;
  image: string;
  rating: number;
  totalReviews: number;
}

const CoachCard: React.FC<CoachCardProps> = ({ name, rank, speciality, image, rating, totalReviews }) => {
  return (
    <div className="bg-[#1f2937] rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-transform">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-red-500 font-semibold mr-2">{rank}</span>
          <span className="text-gray-400">• {speciality}</span>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="text-white ml-1">{rating}</span>
          <span className="text-gray-400 ml-2">({totalReviews} reviews)</span>
        </div>
        <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default CoachCard;