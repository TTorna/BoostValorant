import React from 'react';
import { Shield, Trophy, Clock, Users, Star, ChevronRight, Gamepad2, Target, Brain, Medal } from 'lucide-react';
import CoachCard from './components/CoachCard';
import PricingCard from './components/PricingCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1923] to-[#1f2937]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614929938393-ef9c10144e7b?auto=format&fit=crop&q=80&w=2000"
            alt="Valorant Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-red-500 mb-6">Elite Valorant Coaching</h1>
          <p className="text-2xl text-gray-300 mb-8">Level up your game with professional coaches who have reached Radiant rank</p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-red-600 transition-colors flex items-center mx-auto">
            Start Your Journey
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Our Coaching?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Radiant Coaches", desc: "Learn from the best players in Valorant" },
              { icon: Trophy, title: "Proven Results", desc: "90% of our students rank up within a month" },
              { icon: Clock, title: "Flexible Schedule", desc: "Book sessions that fit your timezone" },
              { icon: Users, title: "1-on-1 Sessions", desc: "Personalized attention and feedback" }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1f2937] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
                <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#1a242f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Coaching Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic"
              price={25}
              features={[
                "1 hour session",
                "VOD review",
                "Basic aim training",
                "Agent tips"
              ]}
              icon={Gamepad2}
            />
            <PricingCard 
              title="Advanced"
              price={45}
              features={[
                "2 hour session",
                "Detailed VOD analysis",
                "Custom aim routines",
                "Strategy development",
                "Priority scheduling"
              ]}
              icon={Target}
              highlighted={true}
            />
            <PricingCard 
              title="Pro"
              price={99}
              features={[
                "4 hour session",
                "Complete gameplay analysis",
                "Mental coaching",
                "Team coordination",
                "24/7 Discord support",
                "Follow-up session"
              ]}
              icon={Brain}
            />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Meet Our Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoachCard 
              name="Alex 'Viper' Chen"
              rank="Radiant"
              speciality="Controller Expert"
              image="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&q=80&w=500"
              rating={4.9}
              totalReviews={156}
            />
            <CoachCard 
              name="Sarah 'Sage' Johnson"
              rank="Radiant"
              speciality="Sentinel Specialist"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500"
              rating={4.8}
              totalReviews={142}
            />
            <CoachCard 
              name="Mike 'Phoenix' Smith"
              rank="Radiant"
              speciality="Duelist Master"
              image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=500"
              rating={4.9}
              totalReviews={198}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1923] text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Elite Coaching</h3>
              <p>Taking your Valorant gameplay to the next level</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500">Home</a></li>
                <li><a href="#" className="hover:text-red-500">Pricing</a></li>
                <li><a href="#" className="hover:text-red-500">Coaches</a></li>
                <li><a href="#" className="hover:text-red-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500">Discord</a></li>
                <li><a href="#" className="hover:text-red-500">Twitter</a></li>
                <li><a href="#" className="hover:text-red-500">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Elite Valorant Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;