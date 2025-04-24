'use client';

import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import ProjectSection from './ProjectSection';

const Resume = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'skills' | 'experience'>('education');

  return (
    <div className="flex flex-col bg-[#0d0d0d] text-gray-300 text-sm min-h-screen mt-15">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-[#1a1a1a] border-r border-gray-800 flex flex-col py-6 px-4 space-y-2">
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
          <button
            onClick={() => setActiveTab('experience')}
            className={`text-left px-3 py-2 rounded-md text-xs tracking-wide transition-all duration-200 ${
              activeTab === 'experience'
                ? 'bg-amber-500 text-black'
                : 'hover:bg-gray-800 hover:text-amber-400'
            }`}
          >
            Experience
          </button>
        </aside>

        {/* Main Tab Content */}
        <main className="flex-1 p-6 overflow-y-auto flex">
          <div className="w-200">
            {activeTab === 'education' && <Education />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'experience' && <Experience />}
          </div>
        </main>
      </div>

      {/* Projects Section Always Below */}
      <div className="border-t border-gray-700 px-6 py-10">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Resume;
