import Section from "./Section";
import RevealText from "./RevealText";

export default function Practice() {
  return (
    <Section
      id="practice"
      index="03"
      title="Practice / System"
      rightContent={
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          IN FOCUS{" "}
          <span className="text-foreground font-bold">01 / 06</span>
        </div>
      }
    >
      <div className="flex flex-col justify-center min-h-[60vh]">
        <RevealText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16">
          Surface is what<br />
          people see. System is<br />
          what makes it work.
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left list */}
          <div className="flex flex-col">
            {[
              { title: "Python & ML", num: "01", desc: "scikit-learn, Pandas, NumPy — end-to-end pipelines." },
              { title: "Flutter & Mobile", num: "02", desc: "Cross-platform apps with BLoC, Provider, Riverpod." },
              { title: "RAG & LLM Integration", num: "03", desc: "Gemini API, document chunking, vector retrieval." },
            ].map((item) => (
              <RevealText key={item.num} delay={Number(item.num) * 0.08}>
                <div className="py-5 border-b border-grid-line flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-xs border border-brand-red px-2 py-1 rounded text-brand-red">{item.num}</span>
                    <span className="font-mono text-xs text-gray-500 hidden lg:block max-w-[200px]">{item.desc}</span>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>

          {/* Right list */}
          <div className="flex flex-col">
            {[
              { title: "Backend & APIs", num: "04", desc: "Supabase, Firebase, PostgreSQL, REST." },
              { title: "Feature Engineering", num: "05", desc: "EDA, model evaluation, Random Forest." },
              { title: "UI/UX & Web", num: "06", desc: "Framer, responsive design, branding." },
            ].map((item) => (
              <RevealText key={item.num} delay={Number(item.num) * 0.08}>
                <div className="py-5 border-b border-grid-line flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-xs border border-brand-red px-2 py-1 rounded text-brand-red">{item.num}</span>
                    <span className="font-mono text-xs text-gray-500 hidden lg:block max-w-[200px]">{item.desc}</span>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Bottom Surface / System Split */}
        <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-grid-line">
          <RevealText delay={0.5}>
            <div>
              <h4 className="font-mono text-sm text-brand-red uppercase tracking-widest mb-3">Surface</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Interfaces, rhythm, hierarchy and interaction that make the product clear.
              </p>
            </div>
          </RevealText>
          <RevealText delay={0.6}>
            <div>
              <h4 className="font-mono text-sm text-brand-red uppercase tracking-widest mb-3">System</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Logic, architecture, performance and structure that keep it usable, stable and fast.
              </p>
            </div>
          </RevealText>
        </div>
      </div>
    </Section>
  );
}
