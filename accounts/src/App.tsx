import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import AccountCard from './components/AccountCard';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const accounts = [
    {
      id: 1,
      rank: "Radiant",
      price: 299.99,
      region: "NA",
      level: 150,
      skins: 45,
      agents: 19,
      email: "Full Access",
      image: "https://images.unsplash.com/photo-1614771637369-ed94441a651a?auto=format&fit=crop&q=80&w=600",
      stock: 3
    },
    {
      id: 2,
      rank: "Immortal 3",
      price: 199.99,
      region: "EU",
      level: 120,
      skins: 32,
      agents: 17,
      email: "Full Access",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600",
      stock: 5
    },
    {
      id: 3,
      rank: "Ascendant 2",
      price: 149.99,
      region: "NA",
      level: 98,
      skins: 28,
      agents: 15,
      email: "Full Access",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
      stock: 2
    },
    {
      id: 4,
      rank: "Diamond 3",
      price: 99.99,
      region: "EU",
      level: 85,
      skins: 20,
      agents: 14,
      email: "Full Access",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=600",
      stock: 8
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F1923]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Buy Valorant Account
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hand-leveled accounts with guaranteed ranks. Instant delivery with full access.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar show={showFilters} onClose={() => setShowFilters(false)} />

          <div className="flex-1">
            <div className="bg-[#1A242D] rounded-lg p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search accounts..."
                    className="w-full bg-[#0F1923] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-[#FF4655] text-white px-4 py-2 rounded-lg hover:bg-[#FF5864] transition-colors md:w-auto w-full justify-center"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {accounts.map((account) => (
                <AccountCard key={account.id} {...account} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;