"use client";

import React, { useState } from 'react';
import { X, Zap, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: 'Retail / E-commerce'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        sector: 'Retail / E-commerce'
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-sm">
              Request initiated. We will contact you shortly.
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Identity (Name)</label>
            <input 
              required 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              placeholder="John Doe"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Digital Address (Email)</label>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              placeholder="john@company.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Sector (Industry)</label>
            <select 
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none"
              disabled={isSubmitting}
            >
              <option>Retail / E-commerce</option>
              <option>Healthcare</option>
              <option>Logistics</option>
              <option>Finance</option>
              <option>Food & Beverage</option>
              <option>Other</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all mt-4 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> PROCESSING...
              </>
            ) : (
              <>
                <Zap size={18} /> INITIATE PROTOCOL
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;