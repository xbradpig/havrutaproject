'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';
import { getProjectIcon } from '@/components/ui/Icons';
import { PROJECTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const PROJECT_HERO_IMAGES: Record<string, string> = {
  churchthrive: '/images/church-bg.jpg',
};

// Unified elegant animation - single consistent pattern
const elegantTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth, elegant feel
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Project = typeof PROJECTS[number];

const PROJECT_DETAILS: Record<string, {
  features: { title: string; description: string }[];
  benefits: string[];
  process?: { step: number; title: string; description: string }[];
}> = {
  churchthrive: {
    features: [
      { title: '15일 부트캠프', description: '집중적인 교회 부흥 프로그램으로 빠른 변화를 경험합니다.' },
      { title: '맞춤형 컨설팅', description: '각 교회의 상황에 맞는 맞춤형 솔루션을 제공합니다.' },
      { title: '지속 가능한 성장', description: '일회성이 아닌 지속 가능한 부흥의 기반을 세웁니다.' },
    ],
    benefits: ['교회 리더십 강화', '성도 참여 증가', '새가족 정착률 향상', '소그룹 활성화'],
    process: [
      { step: 1, title: '진단', description: '교회 현황 분석 및 목표 설정' },
      { step: 2, title: '설계', description: '맞춤형 부흥 전략 수립' },
      { step: 3, title: '실행', description: '15일 집중 부트캠프 진행' },
      { step: 4, title: '정착', description: '지속적인 follow-up 지원' },
    ],
  },
  compass: {
    features: [
      { title: '은사 진단', description: '성경적 기준에 따른 정확한 은사 파악' },
      { title: '성품 분석', description: '개인의 고유한 성품과 강점 발견' },
      { title: '사역 매칭', description: 'AI 기반 최적 사역 추천 시스템' },
    ],
    benefits: ['자기 이해 증진', '사역 만족도 향상', '팀 구성 최적화', '리더 발굴'],
  },
  'match-family-verse': {
    features: [
      { title: 'F.A.M.I.L.Y 원칙', description: '가정 예배의 6가지 핵심 원칙 적용' },
      { title: '연령별 콘텐츠', description: '어린이부터 청소년까지 맞춤형 자료' },
      { title: '진도 추적', description: '가족 전체의 말씀 여정을 한눈에' },
    ],
    benefits: ['가정 신앙 회복', '세대 간 소통', '일상의 영성화', '가족 유대 강화'],
  },
  bluehill21leader: {
    features: [
      { title: '체계적 커리큘럼', description: '리더십의 기초부터 심화까지 단계별 훈련' },
      { title: 'CMDS 시스템', description: '교회 지식관리 시스템으로 리더 역량 강화' },
      { title: '멘토링', description: '경험 많은 리더와의 1:1 멘토링' },
    ],
    benefits: ['리더십 역량 개발', '비전 명확화', '팀 빌딩 능력', '갈등 관리 스킬'],
  },
  'gbpf-wram': {
    features: [
      { title: '성경적 재정 원칙', description: '청지기 정신에 기반한 재정 철학' },
      { title: '가계부 시스템', description: '직관적이고 사용하기 쉬운 재정 관리 도구' },
      { title: '가족 교육', description: '자녀에게 전하는 재정 지혜' },
    ],
    benefits: ['재정적 자유', '현명한 소비 습관', '나눔의 기쁨', '미래 준비'],
  },
};

export function ProjectDetailContent({ project }: { project: Project }) {
  const details = PROJECT_DETAILS[project.id] || {
    features: [],
    benefits: [],
  };

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);
  const heroImage = PROJECT_HERO_IMAGES[project.id];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section
        className={cn(
          'py-20 lg:py-32 relative overflow-hidden',
          !heroImage && 'bg-gradient-to-br',
          !heroImage && project.color,
          !heroImage && 'from-opacity-10 to-opacity-5'
        )}
      >
        {/* Background Image */}
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/85 via-purple-900/80 to-indigo-900/90" />
          </>
        )}

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.nav
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...elegantTransition, delay: 0.1 }}
            >
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className={cn(heroImage ? "text-white/60 hover:text-white/90" : "text-gray-500 hover:text-gray-700", "transition-colors duration-300")}>홈</Link>
                </li>
                <li className={heroImage ? "text-white/40" : "text-gray-400"}>/</li>
                <li>
                  <Link href="/projects" className={cn(heroImage ? "text-white/60 hover:text-white/90" : "text-gray-500 hover:text-gray-700", "transition-colors duration-300")}>프로젝트</Link>
                </li>
                <li className={heroImage ? "text-white/40" : "text-gray-400"}>/</li>
                <li className={cn(heroImage ? "text-white/90" : "text-gray-900")}>{project.name}</li>
              </ol>
            </motion.nav>

            {/* Icon */}
            <motion.div
              className="mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...elegantTransition, delay: 0.2 }}
            >
              <div className={cn('w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white', project.color)}>
                {getProjectIcon(project.icon)}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className={cn(
                "text-4xl font-bold sm:text-5xl font-heading",
                heroImage ? "text-white" : "text-gray-900"
              )}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...elegantTransition, delay: 0.3 }}
            >
              {project.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className={cn(
                "mt-3 text-xl font-medium",
                heroImage ? "text-indigo-200" : "text-primary-600"
              )}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...elegantTransition, delay: 0.4 }}
            >
              {project.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              className={cn(
                "mt-6 text-lg leading-relaxed",
                heroImage ? "text-white/85" : "text-gray-600"
              )}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...elegantTransition, delay: 0.5 }}
            >
              {project.description}
            </motion.p>

            {/* ChurchThrive Service Banner */}
            {project.id === 'churchthrive' && 'serviceUrl' in project && (
              <motion.div
                className="mt-8 p-5 bg-white/95 backdrop-blur rounded-xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...elegantTransition, delay: 0.6 }}
              >
                <p className="text-gray-700 mb-4">
                  <strong>실제 서비스 이용</strong>은 ChurchThrive 공식 사이트에서 가능합니다.
                </p>
                <a
                  href={(project as { serviceUrl: string }).serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    서비스 시작하기
                    <Icons.externalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            )}

            {/* Community Notice */}
            {project.id === 'churchthrive' && (
              <motion.p
                className="mt-6 text-sm text-white/70 bg-white/10 p-4 rounded-lg"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...elegantTransition, delay: 0.7 }}
              >
                이 페이지는 <strong className="text-white/90">교회 관리자 및 개발자</strong>들이 ChurchThrive 서비스를 함께 고도화하기 위한 커뮤니티 공간입니다.
              </motion.p>
            )}

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...elegantTransition, delay: 0.8 }}
            >
              <Link href={`/projects/${project.id}/community`}>
                <Button
                  size="lg"
                  variant={heroImage ? 'outline' : 'primary'}
                  className={cn(
                    heroImage && 'border-white/70 text-white hover:bg-white/10',
                    'transition-all duration-300'
                  )}
                >
                  {project.id === 'churchthrive' ? '개발 커뮤니티 참여' : '커뮤니티 참여'}
                  <Icons.arrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    heroImage && 'border-white/50 text-white hover:bg-white/10',
                    'transition-all duration-300'
                  )}
                >
                  문의하기
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={elegantTransition}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-heading">주요 기능</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {details.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-500"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...elegantTransition, delay: index * 0.1 }}
              >
                <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-5', project.color)}>
                  <Icons.checkCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container size="narrow">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={elegantTransition}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-heading">기대 효과</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {details.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-500"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...elegantTransition, delay: index * 0.08 }}
              >
                <div className={cn('w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-white flex-shrink-0', project.color)}>
                  <Icons.checkCircle className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      {details.process && (
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <motion.div
              className="text-center mb-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={elegantTransition}
            >
              <h2 className="text-3xl font-bold text-gray-900 font-heading">진행 과정</h2>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {details.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...elegantTransition, delay: index * 0.12 }}
                >
                  <div className={cn('w-14 h-14 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xl font-bold mb-5', project.color)}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className={cn('py-20 lg:py-28 bg-gradient-to-br', project.color)}>
        <Container size="narrow">
          <motion.div
            className="text-center text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={elegantTransition}
          >
            <h2 className="text-3xl font-bold font-heading">
              {project.name}와 함께 시작하세요
            </h2>
            <p className="mt-4 text-lg text-white/85">
              더 자세한 정보가 필요하시거나 상담을 원하시면 언제든 연락해 주세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {project.id === 'churchthrive' && 'serviceUrl' in project ? (
                <>
                  <a
                    href={(project as { serviceUrl: string }).serviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      서비스 바로가기
                      <Icons.externalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      파트너십 문의
                    </Button>
                  </Link>
                </>
              ) : (
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    무료 상담 신청
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Other Projects */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={elegantTransition}
          >
            <h2 className="text-2xl font-bold text-gray-900 font-heading">다른 프로젝트도 살펴보세요</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p, index) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...elegantTransition, delay: index * 0.1 }}
              >
                <Link href={p.href} className="group block">
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-500">
                    <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-4', p.color)}>
                      {getProjectIcon(p.icon)}
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{p.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
