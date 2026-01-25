'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function ContextSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-wider">
              The Context
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading">
              ASI 시대, 우리는 어디에 서 있는가
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* World's Voice */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-400 mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">세상의 목소리</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-red-400">•</span>
                  "더 똑똑해져야 살아남는다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-400">•</span>
                  "AI보다 빨라야 한다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-400">•</span>
                  "스펙을 쌓아야 경쟁력이 있다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-400">•</span>
                  "디지털 역량이 곧 생존이다"
                </li>
              </ul>
            </motion.div>

            {/* Havruta's Voice */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-primary-900/50 border border-primary-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 mb-6">
                <span className="text-2xl">✝️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">하브루타의 대답</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  "더 깊은 뿌리를 내려야 한다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  "말씀 안에서 정체성을 세워야 한다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  "공동체 안에서 서로를 지켜야 한다"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  "하나님의 지혜가 참된 힘이다"
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl lg:text-2xl font-heading text-gray-300 italic">
              "그러므로 누구든지 나의 이 말을 듣고 행하는 자는<br className="hidden sm:block" />
              그 집을 <span className="text-primary-400 font-semibold">반석 위에 지은</span> 지혜로운 사람 같으리니"
            </blockquote>
            <p className="mt-4 text-gray-500">— 마태복음 7:24</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
