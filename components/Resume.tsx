'use client';

import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'skills'>('education');

  return (
    <div className="flex  bg-[#0d0d0d] text-gray-300 font-mono text-sm">
      {/* Sidebar */}
      <aside className="w-48 bg-[#1a1a1a] border-r border-gray-800 flex flex-col py-6 px-4 space-y-2 min-h-screen">
      
        <button
          onClick={() => setActiveTab('education')}
          className={`text-left px-3 py-2 rounded-md text-xs tracking-wide transition-all duration-200 ${
            activeTab === 'education'
              ? 'bg-amber-500 text-black'
              : 'hover:bg-gray-800 hover:text-amber-400'
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`text-left px-3 py-2 rounded-md text-xs tracking-wide transition-all duration-200 ${
            activeTab === 'skills'
              ? 'bg-amber-500 text-black'
              : 'hover:bg-gray-800 hover:text-amber-400'
          }`}
        >
          Skills
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-hidden">
        <div className="h-full max-h-[calc(100vh-3rem)] w-full overflow-y-auto">
          {activeTab === 'education' ? <Education /> : <Skills />}
        </div>
      </main>
    </div>
  );
};

export default Resume;
