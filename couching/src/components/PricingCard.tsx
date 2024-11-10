import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  icon: LucideIcon;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, icon: Icon, highlighted = false }) => {
  return (
    <div className={`rounded-lg p-8 ${
      highlighted 
        ? 'bg-gradient-to-b from-red-500 to-red-600 transform scale-105' 
        : 'bg-[#1f2937]'
    }`}>
      <div className="text-center">
        <Icon className={`w-12 h-12 mx-auto mb-4 ${highlighted ? 'text-white' : 'text-red-500'}`} />
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className={`${highlighted ? 'text-red-100' : 'text-gray-400'}`}>/hour</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className={`w-5 h-5 ${highlighted ? 'text-white' : 'text-red-500'} mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={highlighted ? 'text-white' : 'text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
        highlighted
          ? 'bg-white text-red-500 hover:bg-gray-100'
          : 'bg-red-500 text-white hover:bg-red-600'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;