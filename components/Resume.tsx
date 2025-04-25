'use client';

import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'skills' | 'experience'>('education');

  return (
    <div className="flex flex-col bg-[#0d0d0d] text-gray-300 text-lg min-h-screen mt-34">
     

      <div className="flex flex-col md:flex-row flex-1">
        {/* Tabs at Top on Mobile, Sidebar on Desktop */}
        <aside className="w-full md:w-48 sm:w-48 bg-[#1a1a1a] border-b md:border-b-0 md:border-r border-gray-800 flex flex-row md:flex-col py-2 md:py-6 px-4 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('education')}
            className={`text-left px-3 py-2 rounded-md  tracking-wide transition-all duration-200  ${
              activeTab === 'education'
                ? 'bg-amber-500 text-black'
                : 'hover:bg-gray-800 hover:text-amber-400'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`text-left px-3 py-2 rounded-md  tracking-wide transition-all duration-200  ${
              activeTab === 'skills'
                ? 'bg-amber-500 text-black'
                : 'hover:bg-gray-800 hover:text-amber-400'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`text-left px-3 py-2 rounded-md  tracking-wide transition-all duration-200  ${
              activeTab === 'experience'
                ? 'bg-amber-500 text-black'
                : 'hover:bg-gray-800 hover:text-amber-400'
            }`}
          >
            Experience
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="lg:w-200 md:w-100 sm:w-100 max-w-4xl mx-auto">
            {activeTab === 'education' && <Education />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'experience' && <Experience />}
          </div>
        </main>
      </div>

     
    </div>
  );
};

export default Resume;
