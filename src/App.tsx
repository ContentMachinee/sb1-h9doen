import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import WhyPage from './components/WhyPage';
import ProcessPage from './components/ProcessPage';
import TalentShowcase from './components/talent/TalentShowcase';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-100">
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5"></div>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/why" element={<WhyPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/talent" element={<TalentShowcase />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}