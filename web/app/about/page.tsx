import type { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: '소개 | Havruta Project',
  description: 'Havruta Project의 철학과 비전을 소개합니다. ASI 시대, 말씀과 공동체로 더 깊은 사람을 세웁니다.',
};

export default function AboutPage() {
  return <AboutContent />;
}
