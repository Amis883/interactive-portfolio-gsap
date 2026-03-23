import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/layout/Hero";
import Projects from "./components/layout/Projects";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
    </MainLayout>
  );
}