import Section from "./Section";

export default function Practice() {
  return (
    <Section
      id="practice"
      index="03"
      title="Practice"
      rightContent={
        <div className="font-mono text-xs text-gray-500">
          SKILLS &<br />
          SYSTEMS
        </div>
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <div>
          <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Languages & Frameworks</h3>
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">Languages</span>
              <span className="sm:text-right">Python, Dart, C++, Java</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">Mobile</span>
              <span className="sm:text-right">Flutter, Dart</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">State Management</span>
              <span className="sm:text-right">BLoC, Provider, Riverpod</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">AI & Backend</h3>
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">AI / ML</span>
              <span className="sm:text-right sm:max-w-[200px]">scikit-learn, Pandas, Gemini API, RAG</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">ML Concepts</span>
              <span className="sm:text-right sm:max-w-[200px]">Random Forest, EDA, Feature Eng</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between border-b border-grid-line pb-2">
              <span className="text-gray-400 mb-1 sm:mb-0">Backend & APIs</span>
              <span className="sm:text-right sm:max-w-[200px]">Supabase, Firebase, PostgreSQL</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
