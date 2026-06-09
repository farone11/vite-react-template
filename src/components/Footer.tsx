import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Coffee, Github } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isCoffee = location.pathname === '/coffee';
  return (
    <footer className={`border-t ${isCoffee ? 'bg-coffee-950 border-coffee-800' : 'bg-primary-950 border-primary-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className={`w-5 h-5 ${isCoffee ? 'text-coffee-400' : 'text-gold-400'}`} />
            <span className="font-display font-semibold text-white">XAUUSD Analysis Class</span>
          </div>
          <p className={`text-sm ${isCoffee ? 'text-coffee-500' : 'text-primary-500'}`}>2024 Financial Market Analysis. Educational purposes only.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className={`p-2 rounded-lg ${isCoffee ? 'text-coffee-400 hover:bg-coffee-800' : 'text-primary-400 hover:bg-primary-800'}`}><Github className="w-5 h-5" /></a>
            <Link to="/coffee" className={`p-2 rounded-lg ${isCoffee ? 'text-coffee-400 hover:bg-coffee-800' : 'text-primary-400 hover:bg-primary-800'}`}><Coffee className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}