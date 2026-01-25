'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';
import { getProjectIcon } from '@/components/ui/Icons';

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider"
          >
            Our Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-heading"
          >
            하브루타 생태계
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            교회와 가정, 개인의 삶에서 말씀과 공동체의 부흥을 이루는<br className="hidden sm:block" />
            다양한 프로젝트를 만나보세요.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard
                name={project.name}
                tagline={project.tagline}
                description={project.description}
                color={project.color}
                href={project.href}
                icon={getProjectIcon(project.icon)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/projects">
            <Button variant="outline" size="lg">
              모든 프로젝트 보기
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
