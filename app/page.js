"use client";

import React, { useState } from 'react';
import { 
  Brain, 
  Globe, 
  Smartphone, 
  Database, 
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  Code, 
  Activity,
  ShoppingBag,
  Heart,
  Wrench,
  Utensils,
  Landmark,
  Linkedin,
  Twitter
} from 'lucide-react';

// Import modularized components
import DigitalSand from '@/components/Digital_Sand';
import TiltCard from '@/components/Tilt_Card';
import ContactModal from '@/components/Contact_Form';
import GlitchText from '@/components/GlitchText';
import ClientCard from '@/components/ClientCard';

export default function Page() {
  const [activeTab, setActiveTab] = useState('CONSULTATION_PHASE');
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <DigitalSand />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50">
          <a href="#" className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            GULF<span className="text-purple-500">INTEL</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-400 tracking-wide">
            <a href="#services" className="hover:text-white hover:scale-105 transition-all">EXPERTISE</a>
            <a href="#process" className="hover:text-white hover:scale-105 transition-all">SYSTEM</a>
            <a href="#clients" className="hover:text-white hover:scale-105 transition-all">CLIENTS</a>
            <a href="#team" className="hover:text-white hover:scale-105 transition-all">TEAM</a>
          </div>

          <div className="flex items-center gap-4">
             <button 
               onClick={() => setContactOpen(true)}
               className="hidden md:flex px-5 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-blue-400 transition-all items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
             >
              GET STARTED <ArrowRight size={14} />
            </button>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full px-4 md:hidden">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
              <a href="#services" className="text-lg font-bold" onClick={() => setMenuOpen(false)}>EXPERTISE</a>
              <a href="#process" className="text-lg font-bold" onClick={() => setMenuOpen(false)}>SYSTEM</a>
              <a href="#team" className="text-lg font-bold" onClick={() => setMenuOpen(false)}>TEAM</a>
              <button 
                onClick={() => { setMenuOpen(false); setContactOpen(true); }} 
                className="w-full py-3 bg-blue-600 rounded-lg font-bold mt-2"
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-3 py-1 border border-blue-500/30 rounded bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest">
            // SYSTEM_ONLINE // REGION: GULF
          </div>
          
          <div className="mb-8 space-y-2">
            <GlitchText text="WE BUILD THE" size="text-5xl md:text-8xl" />
            <GlitchText text="DIGITAL FUTURE" size="text-5xl md:text-8xl" />
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 mt-4">
              FOR LOCAL BUSINESS
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Traditional methods are obsolete. We inject brick-and-mortar enterprises with <span className="text-white font-bold">high-grade AI</span>, fluid web architectures, and data systems that actually work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setContactOpen(true)}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wider overflow-hidden rounded-sm shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative flex items-center gap-2">START TRANSFORMATION <ArrowRight size={18} /></span>
            </button>
            <button className="px-8 py-4 border border-slate-700 text-slate-300 font-mono text-sm hover:border-blue-500 hover:text-blue-400 transition-colors bg-slate-900/50 backdrop-blur-sm">
              SEE OUR WORK
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">MODULES</span></h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-500"></div>
            </div>
            <p className="text-slate-400 max-w-md text-right mt-6 md:mt-0 font-mono text-sm">
              We use the best tool for the job, but we specialize in modern stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Feature */}
            <TiltCard className="md:col-span-2 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                 <Brain size={140} className="text-blue-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <Brain size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">AI Business Intelligence</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                  We don't play guessing games. We analyze your operational data to find bottlenecks, then deploy custom machine learning models that automate inventory, predict sales spikes, and optimize workforce allocation.
                </p>
              </div>
            </TiltCard>

            {/* Tall Feature */}
            <TiltCard className="md:row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/30">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Native Mobile Apps</h3>
                <p className="text-slate-400 mb-4">
                  iOS and Android applications built with <span className="text-white font-bold">Flutter</span>. 
                </p>
                <p className="text-slate-500 text-sm">
                  We ensure fluid animations, offline-first architecture, and a seamless UX that puts your business in your customer's pocket.
                </p>
              </div>
              <div className="mt-8 h-48 bg-gradient-to-t from-purple-900/20 to-transparent rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="text-purple-500/50 w-full h-12" />
                </div>
              </div>
            </TiltCard>

            {/* Medium Feature */}
            <TiltCard>
              <Globe size={32} className="text-slate-400 group-hover:text-white mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-2">Web Platforms</h3>
              <p className="text-slate-400 text-sm">
                High-performance websites built on <span className="text-white font-bold">React</span> and <span className="text-white font-bold">Next.js</span>. SEO optimized and lightning fast.
              </p>
            </TiltCard>

            {/* Medium Feature */}
            <TiltCard>
              <Database size={32} className="text-slate-400 group-hover:text-blue-400 mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-2">Adaptive Stack</h3>
              <p className="text-slate-400 text-sm">
                While we love modern JS, we are adaptable. We integrate with whatever legacy or cloud systems (AWS/Azure) serve your goals best.
              </p>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-24 bg-black border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">THE <span className="text-blue-400">BLUEPRINT</span></h2>
            <p className="text-slate-400 text-lg mb-10">
              We don't sell vague promises. We follow a strict algorithmic approach to solving business problems.
            </p>
            
            <div className="space-y-2 font-mono">
              {[
                { id: 'CONSULTATION_PHASE', number: '01', label: 'CONSULTATION PHASE' },
                { id: 'STRATEGIC_PLANNING', number: '02', label: 'STRATEGIC PLANNING' },
                { id: 'DEVELOPMENT_SPRINTS', number: '03', label: 'DEVELOPMENT SPRINTS' },
                { id: 'DEPLOYMENT_TRAINING', number: '04', label: 'DEPLOYMENT & TRAINING' }
              ].map((step) => (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveTab(step.id)}
                  onClick={() => setActiveTab(step.id)}
                  className={`group cursor-pointer border-l-2 pl-6 py-4 transition-all duration-300 ${
                    activeTab === step.id 
                      ? 'border-blue-400 bg-blue-900/10' 
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className={`text-xs font-bold mb-1 transition-colors ${
                    activeTab === step.id ? 'text-blue-400' : 'text-slate-600 group-hover:text-slate-400'
                  }`}>
                    STEP {step.number}
                  </div>
                  <h3 className={`text-xl font-bold tracking-wide transition-colors ${
                    activeTab === step.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {step.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Visualization */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-[#0f172a] rounded-xl border border-slate-700 overflow-hidden shadow-2xl font-mono text-sm h-[350px]">
              <div className="bg-[#1e293b] px-4 py-3 flex items-center border-b border-slate-700">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 text-center text-slate-400 text-xs mr-14">
                  gulf_intel_terminal — -zsh
                </div>
              </div>
              
              <div className="p-6 text-slate-300 space-y-4">
                <div className="text-slate-400">
                  $ init_process --target="<span className="text-white">{activeTab}</span>"
                </div>
                
                <div className="space-y-1 text-blue-400">
                  <div>{'>'} Loading module...</div>
                  <div>{'>'} Analyzing parameters...</div>
                  <div>{'>'} <span className="text-green-400">SUCCESS.</span></div>
                </div>

                <div className="pt-4 pl-4 border-l-2 border-slate-700 text-white leading-relaxed">
                   {activeTab === 'CONSULTATION_PHASE' && "Identifying bottlenecks in current brick-and-mortar infrastructure. Mapping digital opportunities."}
                   {activeTab === 'STRATEGIC_PLANNING' && "Architecting a digital twin of your inventory and sales systems. Selecting optimal tech stack."}
                   {activeTab === 'DEVELOPMENT_SPRINTS' && "Executing code generation via React, Python, and Machine Learning models. Iterative testing."}
                   {activeTab === 'DEPLOYMENT_TRAINING' && "Live server push. Staff onboarding sessions. Real-time monitoring systems active."}
                </div>
                
                <div className="animate-pulse text-slate-500">_</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-6 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Our Clients</h2>
            <p className="text-slate-400">Private partnerships across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <ClientCard icon={ShoppingBag} type="Perfume Retailer" />
            <ClientCard icon={Heart} type="Charity Org" />
            <ClientCard icon={Wrench} type="Auto Repair" />
            <ClientCard icon={Utensils} type="Indian Cuisine" />
            <ClientCard icon={Landmark} type="Museum" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-black border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">THE <span className="text-purple-500">TEAM</span></h2>
            <p className="text-slate-400">Technical excellence from Ivy League institutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Asad */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-blue-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-blue-500/20"></div>
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-400 transition-colors shrink-0 shadow-lg">
                <Users size={32} className="text-slate-400 group-hover:text-blue-400" />
              </div>
              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-2xl font-bold text-white font-mono">ASAD RIZVI</h3>
                <p className="text-blue-400 text-xs font-bold tracking-widest mb-3 uppercase">Cornell University</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Gen AI expert with deep industry experience. Specialized in generative models and large-scale system implementation.
                </p>
                <div className="flex justify-center sm:justify-start gap-4">
                  <a href="#" className="text-slate-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="text-slate-600 hover:text-white transition-colors"><Twitter size={18} /></a>
                </div>
              </div>
            </div>

            {/* Sid */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-purple-500 transition-colors relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-purple-500/20"></div>
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-purple-400 transition-colors shrink-0 shadow-lg">
                <Code size={32} className="text-slate-400 group-hover:text-purple-400" />
              </div>
              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-2xl font-bold text-white font-mono">SIDDHARTH ROUT</h3>
                <p className="text-purple-400 text-xs font-bold tracking-widest mb-3 uppercase">Columbia University</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Entrepreneurship & Finance background. Driving technical innovation in high-growth sectors.
                </p>
                <div className="flex justify-center sm:justify-start gap-4">
                  <a href="#" className="text-slate-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 bg-black text-center font-mono text-xs">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-blue-600 rounded-sm animate-pulse"></div>
            <span className="text-lg font-bold text-white tracking-tighter">GULF INTEL</span>
          </div>
          <p className="text-slate-600 mb-8">
            // SYSTEM STATUS: OPTIMAL <br/>
            // COPYRIGHT {new Date().getFullYear()}
          </p>
          <div className="flex gap-8 text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-blue-400 transition-colors">TERMS_OF_USE</a>
            <a href="#" className="hover:text-blue-400 transition-colors">OPEN_COMMS</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
