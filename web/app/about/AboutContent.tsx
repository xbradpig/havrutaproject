'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { REVIVAL_LOOP_STEPS, FAMILY_PRINCIPLES } from '@/lib/constants';

export function AboutContent() {
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
              About Us
            </span>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl font-heading">
              하브루타의 철학
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              ASI 시대, 흔들리지 않는 뿌리를 내리는 여정
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Mission</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                하브루타는 <strong className="text-primary-600">말씀을 함께 읽고, 외우고, 질문하고, 대화하고,
                순종하며, 서로를 지키는 길</strong>입니다.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                세상이 "더 똑똑해지라" 말할 때, 우리는 "더 깊은 뿌리를 내리라" 말합니다.
                하나님은 '더 강한 스펙'으로 성도를 지키지 않으셨습니다.
                '더 깊은 뿌리'로 성도를 지키셨습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Vision</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                우리의 비전은 <strong className="text-primary-600">말씀과 공동체로 더 깊은 사람을 세우는 것</strong>입니다.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                교회가 부흥하고, 가정이 회복되고, 다음 세대가 일어나는 것.
                그것이 우리가 꿈꾸는 미래입니다.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values - Revival Loop */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">부흥의 루프</h2>
            <p className="mt-4 text-lg text-gray-600">
              하브루타의 핵심 원리, 끊임없이 순환하며 깊어지는 여정
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {REVIVAL_LOOP_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.label}</h3>
                <p className="text-sm text-primary-600 mb-2">{step.labelEn}</p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* F.A.M.I.L.Y Principles */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">F.A.M.I.L.Y 원칙</h2>
            <p className="mt-4 text-lg text-gray-600">
              가정에서 시작하는 말씀 공동체의 6가지 원칙
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FAMILY_PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                  {principle.letter}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{principle.word}</h3>
                  <p className="text-sm text-primary-600">{principle.korean}</p>
                  <p className="text-sm text-gray-500 mt-1">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* AreteVision */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
              Powered by
            </span>
            <h2 className="mt-3 text-3xl font-bold font-heading">AreteVision</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              AreteVision은 "탁월함(Arete)"과 "비전(Vision)"의 합성어로,
              하나님의 나라를 향한 탁월한 비전을 추구합니다.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              기술과 신앙의 조화, 혁신과 전통의 균형 속에서
              교회와 가정을 섬기는 것이 우리의 사명입니다.
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
