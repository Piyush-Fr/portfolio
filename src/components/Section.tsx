import React from 'react';

export default function Section({
  id,
  index,
  title,
  children,
  rightContent,
  className = "",
  borderColor = "border-grid-line",
  textColor = "text-foreground",
  brandColor = "text-brand-red",
  mutedColor = "text-gray-500",
}: {
  id?: string;
  index: string;
  title: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
  borderColor?: string;
  textColor?: string;
  brandColor?: string;
  mutedColor?: string;
}) {
  return (
    <section id={id} className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 border-b ${borderColor} w-full scroll-mt-20 ${className} transition-colors duration-500`}>
      {/* Left Column: Index */}
      <div className={`md:col-span-1 border-r ${borderColor} p-6 hidden md:block transition-colors duration-500`}>
        <span className={`font-mono text-sm ${brandColor} transition-colors duration-500`}>{index} / {title}</span>
      </div>

      {/* Middle Column: Main Content */}
      <div className={`md:col-span-2 lg:col-span-3 p-6 md:p-12 lg:p-24 border-r ${borderColor} flex flex-col justify-center ${textColor} transition-colors duration-500`}>
        {/* Mobile Header */}
        <div className="md:hidden mb-8">
          <span className={`font-mono text-sm ${brandColor} transition-colors duration-500`}>{index} / {title}</span>
        </div>
        {children}
      </div>

      {/* Right Column: Supplementary */}
      <div className={`md:col-span-1 p-6 flex-col justify-between hidden md:flex ${mutedColor} transition-colors duration-500`}>
        {rightContent}
      </div>
    </section>
  );
}
