"use client";

import React from 'react';

const GlitchText = ({ text, size = "text-6xl", align = "text-center" }) => (
  <div className={`relative group font-black tracking-tighter ${size} text-white ${align}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-75 select-none" aria-hidden="true">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-purple-400 opacity-0 group-hover:opacity-70 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-100 select-none" aria-hidden="true">{text}</span>
  </div>
);

export default GlitchText;

