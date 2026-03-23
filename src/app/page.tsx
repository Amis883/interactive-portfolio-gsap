import Container from "./components/layout/Container";
import MainLayout from "./components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <section className="min-h-screen flex items-center">
          <h1 className="text-5xl md:text-7xl font-light">Portfolio</h1>
        </section>
      </Container>
    </MainLayout>
  );
}
