import type { Metadata } from 'next';
import { ProjectsContent } from './ProjectsContent';

export const metadata: Metadata = {
  title: '프로젝트 | Havruta Project',
  description: 'Havruta Project의 다양한 프로젝트를 만나보세요. ChurchThrive, COMPASS, MATCH Family Verse 등.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
