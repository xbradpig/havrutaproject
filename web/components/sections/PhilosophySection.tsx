'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { REVIVAL_LOOP_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-heading"
          >
            부흥의 순환, Revival Loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            하브루타는 말씀을 함께 읽고, 외우고, 질문하고, 대화하고,<br className="hidden sm:block" />
            순종하며, 서로를 지키는 여정입니다.
          </motion.p>
        </div>

        {/* Revival Loop Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Circle Container */}
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-xl"
              >
                <div className="text-center text-white">
                  <div className="text-sm font-medium opacity-80">Revival</div>
                  <div className="text-lg font-bold">Loop</div>
                </div>
              </motion.div>
            </div>

            {/* Loop Steps */}
            {REVIVAL_LOOP_STEPS.map((step, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 42; // percentage from center
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.4 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className={cn(
                    'w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center',
                    'bg-white shadow-lg border-2 border-primary-100',
                    'hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer group'
                  )}>
                    <span className="text-lg sm:text-xl font-bold text-primary-600 group-hover:scale-110 transition-transform">
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-500">{step.labelEn}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Connecting Lines (simplified) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-primary-200"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
        </div>

        {/* Steps Description (Mobile friendly) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {REVIVAL_LOOP_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-4"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-sm font-bold text-primary-600">{index + 1}</span>
              </div>
              <h4 className="font-semibold text-gray-900">{step.label}</h4>
              <p className="text-xs text-gray-500 mt-1">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
