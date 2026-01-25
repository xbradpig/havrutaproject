import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/constants';
import { ProjectDetailContent } from './ProjectDetailContent';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Havruta Project',
    };
  }

  return {
    title: `${project.name} | Havruta Project`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
