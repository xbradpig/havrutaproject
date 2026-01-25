# 기술 스택 선정
# Technology Stack Selection

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | Havruta Project 웹사이트 기술 스택 정의 및 선정 근거 |

---

## 1. 기술 스택 개요 | Tech Stack Overview

### 1.1 선정 원칙

```
TECHNOLOGY SELECTION PRINCIPLES
─────────────────────────────────────────────────────────────

1. DEVELOPER EXPERIENCE (개발 경험)
   → 현대적이고 생산적인 도구 선택
   → 좋은 문서화와 커뮤니티 지원

2. PERFORMANCE (성능)
   → Core Web Vitals 최적화
   → 빠른 초기 로딩과 인터랙션

3. SEO OPTIMIZATION (SEO 최적화)
   → 서버 사이드 렌더링 지원
   → 메타데이터 관리 용이

4. SCALABILITY (확장성)
   → 향후 다국어 지원
   → 콘텐츠 증가에 대응

5. MAINTAINABILITY (유지보수성)
   → 타입 안전성
   → 코드 일관성 도구

6. COST EFFECTIVENESS (비용 효율)
   → 무료/저비용 호스팅 가능
   → 오픈소스 우선
```

### 1.2 기술 스택 요약

```
TECH STACK SUMMARY
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  FRONTEND                                                   │
│  ├── Framework: Next.js 14+ (App Router)                   │
│  ├── Language: TypeScript 5+                               │
│  ├── Styling: Tailwind CSS 3+                              │
│  ├── Animation: Framer Motion                              │
│  └── Icons: Lucide React                                   │
│                                                             │
│  CONTENT                                                    │
│  ├── Format: MDX (Markdown + JSX)                          │
│  ├── CMS: Contentlayer 또는 직접 MDX 파싱                  │
│  └── i18n: next-intl                                       │
│                                                             │
│  DEPLOYMENT                                                 │
│  ├── Platform: Vercel (권장) 또는 Netlify                  │
│  ├── Domain: Custom domain + SSL                           │
│  └── CDN: Edge Network (Vercel/Cloudflare)                 │
│                                                             │
│  TOOLING                                                    │
│  ├── Package Manager: pnpm                                 │
│  ├── Linting: ESLint + Prettier                            │
│  ├── Testing: Vitest + Playwright                          │
│  └── CI/CD: GitHub Actions                                 │
│                                                             │
│  ANALYTICS & MONITORING                                     │
│  ├── Analytics: Vercel Analytics 또는 Plausible            │
│  ├── Error Tracking: Sentry                                │
│  └── Performance: Vercel Speed Insights                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Frontend Framework | 프론트엔드 프레임워크

### 2.1 Next.js 14+

```
NEXT.JS SELECTION
─────────────────────────────────────────────────────────────

Version: 14.x 이상 (App Router)

선정 이유:
├── ✓ Server Components (성능 최적화)
├── ✓ App Router (최신 라우팅 패턴)
├── ✓ Built-in SEO support (메타데이터 API)
├── ✓ Image Optimization (자동 이미지 최적화)
├── ✓ Font Optimization (자동 폰트 최적화)
├── ✓ Static + Dynamic rendering 혼합
├── ✓ Edge Functions 지원
└── ✓ Vercel과 최적 통합

대안 검토:
├── Astro: 정적 사이트에 좋으나 인터랙션 제한
├── Gatsby: 빌드 시간, 복잡성 문제
└── Remix: 좋으나 Next.js 대비 생태계 작음
```

### 2.2 핵심 설정

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router 사용
  experimental: {
    typedRoutes: true,  // 타입 안전 라우팅
  },

  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.havruta.org'],
  },

  // 다국어 지원 (next-intl)
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },

  // 번들 분석 (개발시)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),
};

module.exports = nextConfig;
```

### 2.3 프로젝트 구조

```
PROJECT STRUCTURE
─────────────────────────────────────────────────────────────

havruta-web/
├── app/                          # Next.js App Router
│   ├── (main)/                   # 메인 레이아웃 그룹
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Landing
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects Hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Project Detail
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/                      # API Routes
│   │   └── newsletter/
│   │       └── route.ts
│   ├── globals.css
│   └── layout.tsx                # Root Layout
│
├── components/                   # 컴포넌트
│   ├── ui/                       # 기본 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── layout/                   # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/                 # 페이지 섹션
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ...
│   └── shared/                   # 공유 컴포넌트
│       ├── RevivalLoop.tsx
│       └── ProjectCard.tsx
│
├── content/                      # MDX 콘텐츠
│   ├── projects/
│   │   ├── churchthrive.mdx
│   │   └── ...
│   └── pages/
│       └── about.mdx
│
├── lib/                          # 유틸리티
│   ├── utils.ts
│   ├── constants.ts
│   └── content.ts
│
├── public/                       # 정적 파일
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── styles/                       # 스타일
│   └── globals.css
│
├── types/                        # TypeScript 타입
│   └── index.ts
│
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Styling | 스타일링

### 3.1 Tailwind CSS

```
TAILWIND CSS SELECTION
─────────────────────────────────────────────────────────────

Version: 3.4+

선정 이유:
├── ✓ Utility-first (빠른 개발)
├── ✓ Just-in-Time 컴파일 (작은 번들)
├── ✓ 반응형 디자인 용이
├── ✓ 커스텀 디자인 시스템 구축 가능
├── ✓ Next.js와 완벽 통합
└── ✓ 대규모 커뮤니티/플러그인
```

### 3.2 Tailwind 설정

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{mdx}',
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',  // Main
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        // Scripture Gold
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        // Faith Burgundy
        burgundy: {
          600: '#9F1239',
          700: '#881337',
        },
      },

      // Typography
      fontFamily: {
        heading: ['var(--font-playfair)', 'var(--font-noto-serif)', 'serif'],
        body: ['var(--font-inter)', 'var(--font-pretendard)', 'sans-serif'],
      },

      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },

      // Animation
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Prose 스타일
    require('@tailwindcss/forms'),        // 폼 스타일
  ],
};

export default config;
```

### 3.3 Framer Motion (애니메이션)

```
FRAMER MOTION SELECTION
─────────────────────────────────────────────────────────────

Version: 10+

용도:
├── 페이지 전환 애니메이션
├── 스크롤 기반 애니메이션
├── 인터랙티브 컴포넌트 (Revival Loop 다이어그램)
├── 마이크로 인터랙션
└── 레이아웃 애니메이션
```

```typescript
// 애니메이션 프리셋 예시
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};
```

---

## 4. Content Management | 콘텐츠 관리

### 4.1 MDX

```
MDX CONTENT SYSTEM
─────────────────────────────────────────────────────────────

MDX = Markdown + JSX

장점:
├── ✓ 마크다운의 단순함 유지
├── ✓ 리액트 컴포넌트 삽입 가능
├── ✓ 버전 관리 (Git)
├── ✓ 개발자 친화적
└── ✓ 빌드 시 정적 생성

예시:
```

```mdx
---
title: ChurchThrive
description: 교회 부흥의 새로운 패러다임
---

# ChurchThrive

<HeroImage src="/images/churchthrive-hero.jpg" alt="ChurchThrive" />

교회가 다시 살아납니다. **15일 부트캠프**를 통해
건강한 성장의 기반을 세웁니다.

<FeatureGrid>
  <Feature icon="book" title="말씀 중심" />
  <Feature icon="users" title="공동체 강화" />
  <Feature icon="growth" title="지속 가능한 성장" />
</FeatureGrid>

<CTASection
  title="지금 시작하세요"
  buttonText="무료 상담 신청"
  href="/contact"
/>
```

### 4.2 Contentlayer (선택)

```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tagline: { type: 'string', required: true },
    icon: { type: 'string', required: true },
    color: { type: 'string', required: true },
    order: { type: 'number', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
});
```

### 4.3 다국어 지원 (next-intl)

```
INTERNATIONALIZATION
─────────────────────────────────────────────────────────────

Library: next-intl

구조:
messages/
├── ko.json         # 한국어
└── en.json         # 영어

지원 범위:
├── UI 텍스트
├── 메타데이터
├── 날짜/숫자 포맷
└── 콘텐츠 (MDX 파일 분리)
```

```typescript
// messages/ko.json
{
  "common": {
    "nav": {
      "about": "소개",
      "projects": "프로젝트",
      "resources": "자료실",
      "contact": "문의"
    },
    "cta": {
      "getStarted": "시작하기",
      "learnMore": "더 알아보기"
    }
  },
  "home": {
    "hero": {
      "title": "말씀과 공동체로 더 깊은 사람을 세운다",
      "subtitle": "ASI 시대, 흔들리지 않는 뿌리를 내리는 여정"
    }
  }
}
```

---

## 5. Deployment & Infrastructure | 배포 및 인프라

### 5.1 Vercel (권장)

```
VERCEL DEPLOYMENT
─────────────────────────────────────────────────────────────

선정 이유:
├── ✓ Next.js 개발사 (최적 통합)
├── ✓ 자동 배포 (Git push)
├── ✓ Preview Deployments
├── ✓ Edge Functions
├── ✓ Analytics 내장
├── ✓ 무료 티어 제공
└── ✓ 글로벌 CDN

Plan: Hobby (무료) 또는 Pro ($20/월)

Features:
├── Serverless Functions
├── Edge Middleware
├── Image Optimization
├── Web Analytics
└── Speed Insights
```

### 5.2 대안: Netlify

```
NETLIFY ALTERNATIVE
─────────────────────────────────────────────────────────────

장점:
├── ✓ 무료 티어 넉넉함
├── ✓ Forms 기능 내장
├── ✓ Identity (인증) 내장
└── ✓ 좋은 빌드 캐싱

단점:
├── Next.js 최신 기능 지원 지연
└── Edge Functions 제한적
```

### 5.3 도메인 & SSL

```
DOMAIN CONFIGURATION
─────────────────────────────────────────────────────────────

Domain: havruta.org 또는 havruta.kr (예시)

DNS Provider: Cloudflare (권장)
├── ✓ 무료 SSL
├── ✓ DDoS 보호
├── ✓ CDN
└── ✓ DNS 관리

SSL: 자동 (Vercel/Cloudflare)

Subdomains:
├── www.havruta.org → havruta.org (redirect)
├── api.havruta.org (향후 필요시)
└── docs.havruta.org (향후 필요시)
```

---

## 6. Development Tools | 개발 도구

### 6.1 패키지 관리

```
PACKAGE MANAGER: pnpm
─────────────────────────────────────────────────────────────

선정 이유:
├── ✓ 빠른 설치 속도
├── ✓ 디스크 공간 효율
├── ✓ Monorepo 지원
└── ✓ 엄격한 의존성 관리
```

### 6.2 코드 품질 도구

```
CODE QUALITY TOOLS
─────────────────────────────────────────────────────────────

ESLint:
├── @typescript-eslint
├── eslint-plugin-react
├── eslint-plugin-next
└── eslint-plugin-import

Prettier:
├── prettier-plugin-tailwindcss
└── 자동 클래스 정렬

Husky + lint-staged:
├── 커밋 전 린트 자동 실행
└── 코드 품질 유지
```

```json
// package.json (scripts)
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:e2e": "playwright test"
  }
}
```

### 6.3 테스팅

```
TESTING STRATEGY
─────────────────────────────────────────────────────────────

Unit Tests: Vitest
├── 컴포넌트 단위 테스트
├── 유틸리티 함수 테스트
└── 빠른 실행 속도

E2E Tests: Playwright
├── 전체 사용자 플로우
├── 크로스 브라우저 테스트
└── Visual regression (선택)

Coverage Target:
├── 컴포넌트: 80%+
├── 유틸리티: 90%+
└── E2E: 핵심 플로우
```

---

## 7. Analytics & Monitoring | 분석 및 모니터링

### 7.1 Analytics

```
ANALYTICS STACK
─────────────────────────────────────────────────────────────

Primary: Vercel Analytics (또는 Plausible)
├── 프라이버시 친화적
├── Core Web Vitals 추적
├── 가벼운 스크립트
└── GDPR 준수

Secondary (선택): Google Analytics 4
├── 상세 분석 필요시
├── 마케팅 통합
└── 기존 데이터 연속성
```

### 7.2 Error Tracking

```
ERROR TRACKING: Sentry
─────────────────────────────────────────────────────────────

Features:
├── 실시간 에러 알림
├── Source maps 지원
├── Performance 모니터링
├── Session replay (선택)
└── Next.js 공식 통합
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,  // 10% 성능 샘플링
  environment: process.env.NODE_ENV,
});
```

### 7.3 Performance Monitoring

```
PERFORMANCE MONITORING
─────────────────────────────────────────────────────────────

Vercel Speed Insights:
├── Real User Monitoring (RUM)
├── Core Web Vitals 추적
├── 국가/디바이스별 분석
└── 자동 임계값 알림

추가 도구:
├── Lighthouse CI (빌드 시)
├── PageSpeed Insights (정기 체크)
└── Chrome DevTools (개발 시)
```

---

## 8. 의존성 목록 | Dependencies

### 8.1 Production Dependencies

```json
{
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "next-intl": "^3.0.0",
    "lucide-react": "^0.300.0",
    "@headlessui/react": "^1.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### 8.2 Dev Dependencies

```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/forms": "^0.5.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@playwright/test": "^1.40.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

---

## 9. 기술 결정 기록 | Architecture Decision Records

### ADR-001: Next.js App Router 선택

```
ADR-001: Next.js App Router
─────────────────────────────────────────────────────────────

Status: Accepted
Date: 2025-01-25

Context:
- 새 웹사이트 구축 필요
- SEO, 성능, 개발 경험 중요

Decision:
- Next.js 14+ App Router 사용

Rationale:
- Server Components로 번들 크기 최소화
- 내장 SEO 지원 (Metadata API)
- Streaming SSR, Suspense 지원
- Vercel과 최적 통합

Consequences:
+ 최신 React 패턴 활용
+ 뛰어난 성능
- Pages Router 대비 학습 곡선
- 일부 라이브러리 호환성 확인 필요
```

### ADR-002: Tailwind CSS 선택

```
ADR-002: Tailwind CSS
─────────────────────────────────────────────────────────────

Status: Accepted
Date: 2025-01-25

Context:
- 디자인 시스템 구축 필요
- 빠른 개발 속도 필요

Decision:
- Tailwind CSS 3+ 사용
- CSS-in-JS 미사용

Rationale:
- 빠른 프로토타이핑
- 일관된 디자인 토큰
- 작은 프로덕션 번들
- Server Components와 호환

Consequences:
+ 빠른 개발
+ 작은 CSS 번들
- HTML 클래스 복잡해질 수 있음
- 팀 스타일 가이드 필요
```

---

## 10. 버전 호환성 매트릭스 | Version Compatibility

| 패키지 | 최소 버전 | 권장 버전 | 비고 |
|--------|-----------|-----------|------|
| Node.js | 18.17 | 20.x LTS | Vercel 지원 |
| Next.js | 14.0 | 14.1+ | App Router |
| React | 18.2 | 18.2+ | Server Components |
| TypeScript | 5.0 | 5.3+ | Strict mode |
| Tailwind | 3.3 | 3.4+ | Container queries |
| pnpm | 8.0 | 8.x | Workspace 지원 |

---

## 관련 문서

- [02_Performance_Requirements.md](./02_Performance_Requirements.md) - 성능 요구사항
- [03_Deployment_Plan.md](./03_Deployment_Plan.md) - 배포 계획
- [03_Component_Library.md](../04_UX_Wireframes/03_Component_Library.md) - 컴포넌트 라이브러리

---

*Havruta Project — powered by AreteVision*
