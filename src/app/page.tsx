import CaseStudies from "./components/CaseStudies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <CaseStudies />
      <MySkills/>
    </main>
  );
}
