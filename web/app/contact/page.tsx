import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: '문의 | Havruta Project',
  description: 'Havruta Project에 문의하세요. 프로젝트 참여, 파트너십, 일반 문의를 받고 있습니다.',
};

export default function ContactPage() {
  return <ContactContent />;
}
