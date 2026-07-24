import Section from "./Section";
import RevealText from "./RevealText";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      rightContent={
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          END OF<br />DOCUMENT
        </div>
      }
    >
      <div className="flex flex-col justify-center min-h-[50vh]">
        <RevealText as="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-16">
          Start a<br />conversation.
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24">
          <RevealText delay={0.15}>
            <div>
              <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Digital</h3>
              <a href="mailto:thakurpiyush3112005@gmail.com" className="block text-base md:text-lg hover:text-brand-red transition-colors mb-3 break-words">
                thakurpiyush3112005@gmail.com
              </a>
              <a href="#" className="block text-base md:text-lg hover:text-brand-red transition-colors mb-3">
                LinkedIn
              </a>
              <a href="#" className="block text-base md:text-lg hover:text-brand-red transition-colors">
                GitHub
              </a>
            </div>
          </RevealText>

          <RevealText delay={0.25}>
            <div>
              <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Location</h3>
              <p className="text-base md:text-lg text-gray-400">
                New Delhi<br />India
              </p>
            </div>
          </RevealText>
        </div>

        <RevealText delay={0.35} className="w-full">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-grid-line font-mono text-xs text-gray-600 gap-4">
            <span>© 2026 PIYUSH THAKUR</span>
            <span>B.TECH (AI & DATA SCIENCE)</span>
          </div>
        </RevealText>
      </div>
    </Section>
  );
}
