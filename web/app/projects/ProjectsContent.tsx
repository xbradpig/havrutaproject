'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/Card';
import { PROJECTS } from '@/lib/constants';
import { getProjectIcon } from '@/components/ui/Icons';

export function ProjectsContent() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our Projects
            </span>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl font-heading">
              하브루타 생태계
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              교회와 가정, 개인의 삶에서 말씀과 공동체의 부흥을 이루는<br className="hidden sm:block" />
              다양한 프로젝트를 만나보세요.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Common DNA */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
              🔄 부흥 루프 기반
            </span>
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
              📚 말씀 중심
            </span>
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
              👥 공동체 지향
            </span>
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
              🏠 가정 회복
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </Container>
      </section>

      {/* Ecosystem Visual */}
      <section className="py-16 lg:py-24 bg-white">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">
              하나의 철학, 다양한 적용
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              모든 프로젝트는 하브루타의 핵심 철학인 <strong>'부흥 루프'</strong>를 공유합니다.
              말씀을 함께 읽고, 외우고, 질문하고, 대화하고, 순종하며, 서로를 지키는 여정이
              각 프로젝트에서 다양한 형태로 구현됩니다.
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
