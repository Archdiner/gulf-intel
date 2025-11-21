"use client";

import React, { useState } from 'react';

const TiltCard = ({ children, className = "" }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left; 
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    setRotate({ x: (y - centerY) / 20, y: (centerX - x) / 20 });
  };

  return (
    <div 
      className={`relative group z-0 transition-transform duration-200 ease-out transform-gpu rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
    >
      {/* Gradient Border - Fades in on hover */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content Background */}
      <div className="relative h-full bg-slate-900 rounded-3xl p-8 overflow-hidden border border-slate-800 group-hover:border-transparent transition-colors z-10">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;