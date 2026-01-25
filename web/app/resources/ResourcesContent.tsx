'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/ui/Icons';

const RESOURCES = [
  {
    id: 1,
    title: '부흥 루프 가이드',
    description: '하브루타의 핵심 원리인 부흥 루프를 이해하고 적용하는 방법',
    category: '가이드',
    comingSoon: true,
  },
  {
    id: 2,
    title: '가정 예배 템플릿',
    description: 'F.A.M.I.L.Y 원칙에 기반한 가정 예배 진행 가이드',
    category: '템플릿',
    comingSoon: true,
  },
  {
    id: 3,
    title: '소그룹 성경공부 자료',
    description: '하브루타식 소그룹 성경공부를 위한 질문과 진행 가이드',
    category: '자료',
    comingSoon: true,
  },
  {
    id: 4,
    title: 'ChurchThrive 소개서',
    description: '교회 부흥 프로그램 ChurchThrive의 상세 소개',
    category: '브로셔',
    comingSoon: true,
  },
];

export function ResourcesContent() {
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
              Resources
            </span>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl font-heading">
              자료실
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              하브루타의 여정을 돕는 다양한 자료를 준비했습니다.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {RESOURCES.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full relative overflow-hidden">
                  {resource.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Icons.bookOpen className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                        {resource.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-gray-50 rounded-2xl"
          >
            <Icons.heart className="w-12 h-12 mx-auto text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">더 많은 자료가 준비 중입니다</h3>
            <p className="mt-2 text-gray-600">
              뉴스레터를 구독하시면 새로운 자료가 공개될 때 알려드립니다.
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
