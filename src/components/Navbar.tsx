import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Bell, User, Menu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <BrainCircuit className="h-8 w-8 text-purple-400 glow" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                DeepData AI
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/why" className="text-purple-200 hover:text-white transition-colors">Why DeepData</Link>
              <Link to="/process" className="text-purple-200 hover:text-white transition-colors">Our Process</Link>
              <Link to="/talent" className="text-purple-200 hover:text-white transition-colors">Talent Showcase</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isDashboard ? (
              <>
                <button className="p-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <User className="h-6 w-6" />
                </button>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors"
              >
                Dashboard
              </Link>
            )}
            <button className="p-2 text-purple-300 hover:text-purple-100 transition-colors lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}