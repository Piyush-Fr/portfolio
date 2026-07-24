import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      rightContent={
        <div className="font-mono text-xs text-gray-500 mt-auto">
          END OF<br />
          DOCUMENT
        </div>
      }
    >
      <div className="flex flex-col items-start w-full">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-12 tracking-tight">
          START A<br/>CONVERSATION
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full mb-24">
          <div>
            <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Digital</h3>
            <a href="mailto:thakurpiyush3112005@gmail.com" className="block text-lg md:text-xl hover:text-brand-red transition-colors mb-4 break-words">
              thakurpiyush3112005@gmail.com
            </a>
            <a href="#" className="block text-lg md:text-xl hover:text-brand-red transition-colors mb-4">
              LinkedIn
            </a>
            <a href="#" className="block text-lg md:text-xl hover:text-brand-red transition-colors">
              GitHub
            </a>
          </div>
          
          <div>
            <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Location</h3>
            <p className="text-lg md:text-xl text-gray-400">
              New Delhi<br />
              India
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-grid-line font-mono text-xs text-gray-600 gap-4">
          <span>© 2026 PIYUSH THAKUR</span>
          <span>B.TECH (AI & DATA SCIENCE)</span>
        </div>
      </div>
    </Section>
  );
}
