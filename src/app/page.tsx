import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Practice from "@/components/Practice";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navigation />

      {/* Main Content Area - Each section acts as a grid row */}
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <SelectedWork />
        <Practice />
        <Contact />
      </main>
    </div>
  );
}
