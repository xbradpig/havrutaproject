import { HeroSection } from '@/components/sections/HeroSection';
import { ContextSection } from '@/components/sections/ContextSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContextSection />
      <PhilosophySection />
      <ProjectsSection />
      <NewsletterSection />
    </>
  );
}
