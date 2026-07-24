import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Practice from "@/components/Practice";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <SelectedWork />
        <Practice />
        <About />
        <Contact />
      </main>
    </div>
  );
}
