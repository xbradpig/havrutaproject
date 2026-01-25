'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-800">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Icons.mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl font-heading">
            하브루타 소식 받기
          </h2>

          <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
            말씀과 공동체의 이야기, 새로운 프로젝트 소식을<br className="hidden sm:block" />
            가장 먼저 받아보세요.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <Icons.checkCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-white font-medium">구독해 주셔서 감사합니다!</p>
              <p className="text-primary-200 text-sm mt-1">곧 소식을 전해드리겠습니다.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white text-primary-700 hover:bg-primary-50 disabled:opacity-50"
                >
                  {status === 'loading' ? '처리 중...' : '구독하기'}
                </Button>
              </div>
              <p className="mt-3 text-sm text-primary-200">
                개인정보는 안전하게 보호됩니다. 언제든 구독을 취소할 수 있습니다.
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
