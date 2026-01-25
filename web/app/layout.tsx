import type { Metadata } from 'next';
import { Inter, Noto_Serif_KR, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Havruta Project | 말씀과 공동체로 더 깊은 사람을 세운다',
  description: 'ASI 시대, 흔들리지 않는 뿌리를 내리는 여정. 하브루타는 말씀을 함께 읽고, 외우고, 질문하고, 대화하고, 순종하며, 서로를 지키는 길입니다.',
  keywords: ['하브루타', '교회 부흥', '성경 공부', '가정 예배', '기독교 리더십', 'ChurchThrive', 'COMPASS'],
  authors: [{ name: 'AreteVision' }],
  openGraph: {
    title: 'Havruta Project | 말씀과 공동체로 더 깊은 사람을 세운다',
    description: 'ASI 시대, 흔들리지 않는 뿌리를 내리는 여정',
    url: 'https://havrutaproject.org',
    siteName: 'Havruta Project',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Havruta Project',
    description: '말씀과 공동체로 더 깊은 사람을 세운다',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSerifKR.variable} ${playfair.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
