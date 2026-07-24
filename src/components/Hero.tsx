import Section from "./Section";

export default function Hero() {
  return (
    <Section
      id="signal"
      index="01"
      title="Signal"
      rightContent={
        <>
          <div className="font-mono text-xs text-gray-500">
            LOCAL TIME<br />
            <span className="text-foreground text-sm">New Delhi, IN</span>
          </div>
          <div className="font-mono text-xs text-gray-500 text-right mt-auto">
            STATUS: ACTIVE
          </div>
        </>
      }
    >
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
        AI & DATA SCIENCE<br />
        UNDERGRADUATE
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
        Building AI-integrated mobile applications and end-to-end machine learning pipelines. 
        Proficient in Python and Flutter, with practical exposure to RAG architectures, 
        LLM integration via Gemini API, and classical ML workflows.
      </p>
      <div className="mt-12">
        <a href="#contact" className="font-mono text-sm border border-brand-red text-brand-red px-6 py-3 hover:bg-brand-red hover:text-black transition-colors inline-block">
          [ Let's talk ]
        </a>
      </div>
    </Section>
  );
}
