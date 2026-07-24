import Section from "./Section";

const works = [
  {
    title: "GrindFlow – AI Study Companion",
    year: "2026",
    tags: "Flutter, RAG, Gemini AI, Supabase",
    desc: "Cross-platform AI study companion with a native PDF reader, implementing a full RAG pipeline and dynamic summarization."
  },
  {
    title: "ML Automotive Pricing Engine",
    year: "2026",
    tags: "Python, scikit-learn, Random Forest",
    desc: "End-to-end ML pipeline for VW and Audi vehicles, engineering critical features dropping MAE by 75%."
  },
  {
    title: "ProoV",
    year: "2026",
    tags: "Feature Engineering, Data Science",
    desc: "Engineered predictive features to optimize data quality and translated model performance into actionable financial impacts."
  },
  {
    title: "Smart India Hackathon (SIH)",
    year: "2025",
    tags: "Flutter, Firebase, Google Maps",
    desc: "Cross-platform application featuring a responsive UI and intelligent AI chatbot assistance."
  },
  {
    title: "Criv Media",
    year: "2025",
    tags: "UI/UX, Framer, Web Dev",
    desc: "Delivered user-centric UI/UX designs and high-conversion responsive websites."
  },
  {
    title: "Sikkim Tourism App",
    year: "2025",
    tags: "Flutter, Firebase",
    desc: "Tourism application integrating Google Maps SDK and an in-app conversational AI chatbot."
  }
];

export default function SelectedWork() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected Work"
      className="bg-brand-red"
      borderColor="border-black/30"
      textColor="text-black"
      brandColor="text-black font-bold"
      mutedColor="text-black/60"
      rightContent={
        <div className="font-mono text-xs text-black/60">
          PROJECTS &<br />
          EXPERIENCE
        </div>
      }
    >
      <div className="flex flex-col w-full text-black">
        {works.map((work, idx) => (
          <div 
            key={idx} 
            className="group py-8 border-b border-black/30 last:border-0 cursor-pointer flex flex-col transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
              <h3 className="text-2xl md:text-3xl font-bold group-hover:translate-x-2 transition-all duration-300">
                {work.title}
              </h3>
              <span className="font-mono text-sm text-black/60 group-hover:text-black transition-colors mt-2 md:mt-0">
                {work.year}
              </span>
            </div>
            
            <div className="text-black/80 max-w-xl h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
              <p className="mb-4">{work.desc}</p>
              <div className="font-mono text-xs font-bold tracking-wider uppercase text-black">
                {work.tags}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
