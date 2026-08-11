export interface Project {
  slug: string;
  title: string;
  year: string;
  tags: string;
  type: string;
  desc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  results: string;
  link?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "nihon-urbanization",
    title: "Nihon Urbanization",
    year: "2026",
    tags: "Scikit-Learn · FastAPI · Next.js · Spatial ML",
    type: "MACHINE LEARNING",
    desc: "End-to-end spatial machine learning pipeline predicting prefecture-level population change in Japan, deployed as an interactive dashboard.",
    longDesc: "An end-to-end spatial machine learning pipeline for predicting prefecture-level population change across Japan's 47 prefectures, deployed as an interactive web dashboard.",
    challenge: "Japan is undergoing a severe demographic transition. Rural prefectures face population collapse while metropolitan centres grow. The challenge was to model this using multi-source government data (e-Stat, Kaggle census data) while accounting for spatial autocorrelation.",
    solution: "Built a spatial ML pipeline using a regularized Ridge Regression model validated with Leave-One-Out Cross-Validation. Performed spatial diagnostics using Moran's I and LISA cluster analysis, and served the predictions via a FastAPI backend to a Next.js interactive choropleth map.",
    results: "Achieved a LOOCV RMSE of 0.4890 and an R² of 0.9120. The interactive dashboard visualizes forecasts for 2035 and provides a simulation tool for demographic policy impacts.",
    github: "https://github.com/Piyush-Fr/urbanization-prefecture",
    link: "https://nihonurbanization.vercel.app"
  },
  {
    slug: "monovaluation",
    title: "MONOVALUATION",
    year: "2026",
    tags: "Python · scikit-learn · Random Forest",
    type: "MACHINE LEARNING",
    desc: "End-to-end ML pipeline for automotive pricing, engineering features that dropped MAE by 75%.",
    longDesc: "A comprehensive machine learning pipeline designed to accurately predict automotive pricing based on vast historical market data.",
    challenge: "Automotive pricing models often suffer from high variance due to sparse feature spaces and inconsistent historical records.",
    solution: "Engineered robust features and trained a Random Forest regressor, carefully tuning hyperparameters to minimize error across a highly varied dataset.",
    results: "Dropped Mean Absolute Error (MAE) by 75%, providing the business with a highly reliable pricing engine for inventory valuation.",
    github: "https://github.com/Piyush-Fr/Car-value-ML-Project",
    link: "https://monovaluation.vercel.app/"
  },
  {
    slug: "grindflow",
    title: "GrindFlow",
    year: "2026",
    tags: "Flutter · RAG · Gemini AI · Supabase",
    type: "AI STUDY COMPANION",
    desc: "Cross-platform AI study companion with native PDF reader, full RAG pipeline, and dynamic summarization.",
    longDesc: "A cross-platform study application designed to assist students by leveraging generative AI and retrieval-augmented generation (RAG) directly on their study materials.",
    challenge: "Students struggle to quickly extract key concepts from dense PDF textbooks and lecture notes.",
    solution: "Built a Flutter app integrating a native PDF reader, where documents are chunked, embedded, and queried using Gemini AI to provide dynamic summaries and instant Q&A.",
    results: "Enabled near-instant semantic search and summarization across hundreds of pages of study material, significantly reducing research time.",
    github: "https://github.com/Piyush-Fr/GrindFlow-App",
    link: "https://grindflow.vercel.app/",
    demo: "https://www.loom.com/share/01009c51b0d64d42803c366d63fc738a"
  },
  {
    slug: "proov",
    title: "ProoV",
    year: "2026",
    tags: "Feature Engineering · Data Science",
    type: "DATA SCIENCE",
    desc: "Predictive feature engineering and model evaluation for CPO team financial impact analysis.",
    longDesc: "A data science initiative to evaluate the financial impact of product decisions for the Chief Product Officer's team.",
    challenge: "Product metrics were disconnected from direct financial outcomes, making it difficult to prioritize roadmap features based on ROI.",
    solution: "Performed extensive predictive feature engineering to bridge product telemetry data with financial performance indicators.",
    results: "Delivered a model evaluation framework that provided the CPO team with clear, data-driven financial impact analysis for strategic planning.",
    link: "https://projectstudy.in/portfolios/piyush-thakur"
  },
  {
    slug: "criv-media",
    title: "Criv Media",
    year: "2025",
    tags: "UI/UX · Framer · Web Dev",
    type: "DESIGN STUDIO",
    desc: "User-centric UI/UX designs and high-conversion responsive websites using Framer.",
    longDesc: "A suite of user-centric, high-conversion responsive websites designed and developed for a modern design studio.",
    challenge: "The studio needed web properties that not only looked visually stunning but also converted visitors effectively without sacrificing performance.",
    solution: "Designed and built highly interactive, responsive sites using Framer, focusing on typographic hierarchy, smooth animations, and clear calls-to-action.",
    results: "Significantly improved client engagement metrics and delivered a premium digital presence that aligned with the studio's brand.",
    link: "https://full-messages-350654.framer.app/"
  },
  {
    slug: "sikkim-tourism",
    title: "Sikkim Tourism",
    year: "2025",
    tags: "Flutter · Firebase · AI Chatbot",
    type: "TOURISM APP",
    desc: "Tourism application with Google Maps SDK and in-app conversational AI chatbot.",
    longDesc: "A mobile application built to promote tourism in Sikkim by providing an interactive map and an AI-powered conversational guide.",
    challenge: "Tourists often struggle to find accurate, context-aware information and navigation assistance in remote areas of Sikkim.",
    solution: "Developed a cross-platform Flutter app featuring a Google Maps SDK integration for points of interest, supported by a Firebase backend and an AI chatbot for real-time query resolution.",
    results: "Created a seamless, informative travel companion that boosts local tourism accessibility and user engagement.",
    github: "https://github.com/Piyush-Fr/Sikkim-Tourism",
    link: "https://sikkim-tourism-five.vercel.app/",
    demo: "https://www.loom.com/share/e43030fb261f401e90919fa9877e231d"
  }
];
