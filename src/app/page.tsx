import MainLayout from "./components/layout/MainLayout";
import Container from "./components/layout/Container";
import { HeroText, Paragraph } from "./components/ui/Typography";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <section className="min-h-screen flex flex-col justify-center gap-8 py-32">
          
          <HeroText>
            I build digital experiences
          </HeroText>

          <Paragraph>
            A minimal portfolio focused on motion, interaction, and clean design.
          </Paragraph>

        </section>
      </Container>
    </MainLayout>
  );
}