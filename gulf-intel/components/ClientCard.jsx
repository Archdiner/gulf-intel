"use client";

import React from 'react';

const ClientCard = ({ icon: Icon, type }) => (
  <div className="group flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-900/10 rounded-xl transition-all duration-300 cursor-default">
    <div className="mb-3 text-slate-500 group-hover:text-blue-400 transition-colors">
      <Icon size={28} />
    </div>
    <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors font-mono text-center leading-tight">{type}</span>
  </div>
);

export default ClientCard;

