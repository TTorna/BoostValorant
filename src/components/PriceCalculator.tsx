import React, { useEffect } from 'react';
import { Sparkles, Clock, Shield, Zap, Handshake } from 'lucide-react';

interface PriceCalculatorProps {
  currentRank: number;
  currentTier: number;
  desiredRank: number;
  desiredTier: number;
}

export function PriceCalculator({ currentRank, currentTier, desiredRank, desiredTier }: PriceCalculatorProps) {
  const [discountCode, setDiscountCode] = React.useState('');
  const [options, setOptions] = React.useState({
    quality: true,
    duo: false,
    expressOrder: false
  });

  const calculatePrice = () => {
    const basePrice = 10;

    const rankDiff = (desiredRank * 3 + desiredTier) - (currentRank * 3 + currentTier);
    if (rankDiff <= 0) return 0;
    
    // Exponential pricing based on rank
    const multiplier = 1 + (currentRank * 0.2);
    let price = basePrice * rankDiff * multiplier;
    
    // Additional premium for higher ranks
    if (desiredRank >= 6) price *= 1.5; // Ascendant and above
    if (desiredRank >= 7) price *= 2; // Immortal and above
    if (desiredRank === 8) price *= 3; // Radiant

    // Apply options modifiers
    if (options.duo) price *= 1.75;
    if (options.expressOrder) price *= 1.25;
    if (discountCode === 'ONETAPE10OFF') price *= 0.9;
    
    return Math.round(price);
  };

  let price = calculatePrice();

  useEffect(() => {
    price = calculatePrice();
  }, [options, discountCode]);

  const estimatedDays = Math.ceil(price / (options.expressOrder ? 30 : 15));

  function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setOptions(prev => ({ ...prev, expressOrder: event.target.checked }));
  }

  return (
    <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-green-400" />
            <span>Quality boost</span>
            <span className="text-sm text-green-400">FREE</span>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={options.quality}
              className="sr-only peer"
            />
            <label className="block w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></label>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
          <div className="flex items-center gap-3">
            <Handshake className="w-5 h-5 text-blue-400"/>
            <span>Play with Booster</span>
            <span className="text-sm text-red-400">+75%</span>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={options.duo}
              onChange={(e) => setOptions(prev => ({ ...prev, duo: e.target.checked }))}
              className="sr-only peer"
              id="duo"
            />
            <label className="block w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" htmlFor="duo"></label>
          </div>
        </div>

        {/* Add similar toggle components for other options */}
        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Express Order</span>
            <span className="text-sm text-red-400">+25%</span>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={options.expressOrder}
              onChange={(e) => handleOptionChange(e)}
              className="sr-only peer"
              id='express'
            />
            <label className="block w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" htmlFor='express'></label>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm text-gray-400 mb-1 block">Discount Code</label>
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
          placeholder="Enter code"
          className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-200">Total Price</h3>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">
              Est. {estimatedDays} {estimatedDays === 1 ? 'day' : 'days'}
            </span>
          </div>
        </div>
        <div className="text-right">
          {discountCode === 'N1BOOST2024' && (
            <div className="text-sm line-through text-gray-500">
              ${(price / 0.9).toFixed(2)}
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-red-500">${price.toFixed(2)}</span>
            <span className="text-gray-400">USD</span>
          </div>
        </div>
      </div>
      
      <button 
        className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          price === 0
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg'
        }`}
        disabled={price === 0}
      >
        <Sparkles className="w-5 h-5" />
        Order Boost Now
      </button>

      <div className="mt-4 text-sm text-gray-400 text-center">
        Boosting starts in 5-10 minutes after order
      </div>
    </div>
  );
}