"use client";

import React from 'react';

interface ColorBlockSectionProps {
  id?: string;
  index: string;
  title: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
}

export default function Section({
  id,
  index,
  title,
  children,
  rightContent,
}: ColorBlockSectionProps) {
  return (
    <section
      id={id}
      className="relative"
    >
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_280px] lg:grid-cols-[260px_1fr_320px] min-h-screen">
        
        {/* Left Column — Sticky Section Label */}
        <div className="hidden md:block border-r border-grid-line relative">
          <div className="sticky top-0 p-6 pt-8">
            <span className="font-mono text-sm text-brand-red uppercase tracking-widest">
              {index} / {title}
            </span>
          </div>
        </div>

        {/* Middle Column — Main Content */}
        <div className="border-r border-grid-line p-6 md:p-12 lg:px-20 lg:py-16">
          {/* Mobile Section Label */}
          <div className="md:hidden mb-8">
            <span className="font-mono text-sm text-brand-red uppercase tracking-widest">
              {index} / {title}
            </span>
          </div>
          {children}
        </div>

        {/* Right Column — Supplementary */}
        <div className="hidden md:block relative">
          <div className="sticky top-0 p-6 pt-8">
            {rightContent}
          </div>
        </div>

      </div>
    </section>
  );
}
