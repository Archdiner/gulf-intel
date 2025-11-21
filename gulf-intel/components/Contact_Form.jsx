"use client";

import React from 'react';
import { X, Zap } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    alert("Request initiated. We will contact you shortly.");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-950 border border-slate-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl shadow-blue-900/20">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="mb-8">
          <div className="text-xs font-mono text-blue-400 mb-2">// SYSTEM_ACCESS</div>
          <h2 className="text-3xl font-bold text-white">Start Transformation</h2>
          <p className="text-slate-400 mt-2">Enter your coordinates to open a communication channel.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Identity (Name)</label>
            <input required type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Digital Address (Email)</label>
            <input required type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Sector (Industry)</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none">
              <option>Retail / E-commerce</option>
              <option>Healthcare</option>
              <option>Logistics</option>
              <option>Finance</option>
              <option>Food & Beverage</option>
              <option>Other</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg transition-all mt-4 flex items-center justify-center gap-2">
            <Zap size={18} /> INITIATE PROTOCOL
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;