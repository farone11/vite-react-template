import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/technical', label: 'Technical' },
  { to: '/fundamental', label: 'Fundamental' },
  { to: '/projection', label: 'Projection' },
  { to: '/coffee', label: 'Coffee' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white">XAUUSD</span>
              <span className="text-xs font-mono text-primary-400 block">Analysis Class</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to ? 'bg-gold-600/20 text-gold-300 border border-gold-500/30' : 'text-primary-200 hover:text-white hover:bg-primary-800/50'
                }`}>{link.label}</Link>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && <div className="lg:hidden py-4 space-y-2">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm ${location.pathname === link.to ? 'bg-gold-600/20 text-gold-300' : 'text-primary-300'}`}>{link.label}</Link>
          ))}
        </div>}
      </nav>
    </header>
  );
}