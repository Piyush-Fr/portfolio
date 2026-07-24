import Section from "./Section";
import RevealText from "./RevealText";

export default function Hero() {
  return (
    <Section
      id="signal"
      index="01"
      title="Home"
      rightContent={
        <>
          <div className="font-mono text-xs text-gray-500 mb-4">
            LOCATION<br />
            <span className="text-foreground text-sm mt-1 block">New Delhi, IN</span>
          </div>
          <div className="font-mono text-xs text-gray-500 mt-8">
            STATUS<br />
            <span className="text-foreground text-sm mt-1 block">ACTIVE</span>
          </div>
        </>
      }
    >
      <div className="flex flex-col justify-center min-h-[60vh]">
        <RevealText as="h1" className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.05] mb-8">
          Piyush Thakur.
        </RevealText>
        
        <RevealText as="p" delay={0.15} className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mb-12">
          AI & Data Science undergraduate building AI-integrated mobile applications and end-to-end machine learning pipelines — 
          from RAG architectures to classical ML workflows.
        </RevealText>

        <RevealText delay={0.3}>
          <a href="#contact" className="font-mono text-sm border border-brand-red text-brand-red px-8 py-4 hover:bg-brand-red hover:text-black transition-colors duration-300 inline-block tracking-wider">
            [ Let&apos;s talk ]
          </a>
        </RevealText>
      </div>
    </Section>
  );
}
