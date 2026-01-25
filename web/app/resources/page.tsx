import type { Metadata } from 'next';
import { ResourcesContent } from './ResourcesContent';

export const metadata: Metadata = {
  title: '자료실 | Havruta Project',
  description: '하브루타 관련 자료, 가이드, 템플릿을 다운로드하세요.',
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
