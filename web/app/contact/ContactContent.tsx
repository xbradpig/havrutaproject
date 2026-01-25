'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';

const TOPICS = [
  { id: 'churchthrive', label: 'ChurchThrive 문의' },
  { id: 'compass', label: 'COMPASS 문의' },
  { id: 'family', label: 'MATCH Family Verse 문의' },
  { id: 'partnership', label: '파트너십 제안' },
  { id: 'general', label: '일반 문의' },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl font-heading">
              함께 이야기해요
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              프로젝트 참여, 파트너십, 또는 궁금한 점이 있으시면<br className="hidden sm:block" />
              언제든 연락해 주세요.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <Container size="narrow">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Icons.checkCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading">
                메시지가 전송되었습니다!
              </h2>
              <p className="mt-4 text-gray-600">
                빠른 시일 내에 답변 드리겠습니다.<br />
                관심을 가져주셔서 감사합니다.
              </p>
              <Button
                className="mt-8"
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', organization: '', topic: '', message: '' });
                }}
              >
                새 문의하기
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  소속 (교회/단체)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="소속 교회 또는 단체명"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 *
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="">선택해 주세요</option>
                  {TOPICS.map(topic => (
                    <option key={topic.id} value={topic.id}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                  placeholder="문의 내용을 자유롭게 작성해 주세요."
                />
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '전송 중...' : '메시지 보내기'}
                </Button>
              </div>
            </motion.form>
          )}
        </Container>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Icons.mail className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900">이메일</h3>
              <p className="text-gray-600 mt-1">contact@havrutaproject.org</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Icons.messageCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900">응답 시간</h3>
              <p className="text-gray-600 mt-1">보통 1-2 영업일 이내</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Icons.heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900">파트너십</h3>
              <p className="text-gray-600 mt-1">함께 성장할 파트너를 찾습니다</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
