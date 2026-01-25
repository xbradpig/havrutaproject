# 성능 요구사항
# Performance Requirements

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 웹사이트 성능 목표 및 최적화 전략 정의 |

---

## 1. 성능 목표 | Performance Targets

### 1.1 Core Web Vitals

```
CORE WEB VITALS TARGETS
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  LCP (Largest Contentful Paint)                            │
│  ─────────────────────────────────────────────────────     │
│  측정: 가장 큰 콘텐츠 요소 로딩 시간                       │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Good    │   Needs Improvement   │   Poor           │  │
│  │  < 2.5s  │   2.5s - 4.0s         │   > 4.0s         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  목표: < 2.0초 (Desktop), < 2.5초 (Mobile)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INP (Interaction to Next Paint) - FID 대체                │
│  ─────────────────────────────────────────────────────     │
│  측정: 사용자 인터랙션 후 다음 페인트까지 시간             │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Good    │   Needs Improvement   │   Poor           │  │
│  │  < 200ms │   200ms - 500ms       │   > 500ms        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  목표: < 100ms                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CLS (Cumulative Layout Shift)                             │
│  ─────────────────────────────────────────────────────     │
│  측정: 예상치 못한 레이아웃 이동 정도                      │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Good    │   Needs Improvement   │   Poor           │  │
│  │  < 0.1   │   0.1 - 0.25          │   > 0.25         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  목표: < 0.05                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 추가 성능 지표

```
ADDITIONAL METRICS
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  지표                    │  목표 (Desktop)  │  목표 (Mobile) │
├─────────────────────────────────────────────────────────────┤
│  TTFB                    │  < 400ms         │  < 600ms       │
│  (Time to First Byte)    │                  │                │
├─────────────────────────────────────────────────────────────┤
│  FCP                     │  < 1.2초         │  < 1.8초       │
│  (First Contentful Paint)│                  │                │
├─────────────────────────────────────────────────────────────┤
│  TTI                     │  < 3.0초         │  < 4.5초       │
│  (Time to Interactive)   │                  │                │
├─────────────────────────────────────────────────────────────┤
│  Speed Index             │  < 2.0초         │  < 3.0초       │
├─────────────────────────────────────────────────────────────┤
│  Total Blocking Time     │  < 150ms         │  < 200ms       │
└─────────────────────────────────────────────────────────────┘
```

### 1.3 페이지별 목표

| 페이지 | LCP | TTI | 페이지 크기 |
|--------|-----|-----|------------|
| Landing | < 2.0s | < 3.0s | < 500KB |
| About | < 1.8s | < 2.5s | < 400KB |
| Projects Hub | < 2.0s | < 3.0s | < 450KB |
| Project Detail | < 2.2s | < 3.5s | < 600KB |
| Resources | < 2.0s | < 3.0s | < 400KB |
| Contact | < 1.5s | < 2.0s | < 300KB |

---

## 2. 번들 크기 | Bundle Size

### 2.1 번들 크기 예산

```
BUNDLE SIZE BUDGET
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  JavaScript                                                │
│  ─────────────────────────────────────────────────────     │
│  First Load JS:           < 100KB (gzipped)                │
│  ├── Framework (React):   ~40KB                            │
│  ├── Next.js Runtime:     ~30KB                            │
│  └── App Code:            < 30KB                           │
│                                                             │
│  Per-page JS:             < 50KB (gzipped)                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CSS                                                       │
│  ─────────────────────────────────────────────────────     │
│  Total CSS:               < 30KB (gzipped)                 │
│  Critical CSS:            < 10KB (인라인)                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Images (Above Fold)                                       │
│  ─────────────────────────────────────────────────────     │
│  Hero Image:              < 100KB (최적화 후)              │
│  Logo:                    < 10KB                           │
│  Icons:                   SVG (< 5KB total)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Fonts                                                     │
│  ─────────────────────────────────────────────────────     │
│  Primary (subset):        < 30KB                           │
│  Secondary (subset):      < 25KB                           │
│  Total:                   < 60KB                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 의존성 크기 모니터링

```
DEPENDENCY SIZE LIMITS
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  라이브러리           │  최대 크기 (gzip)   │  실제 사용    │
├─────────────────────────────────────────────────────────────┤
│  framer-motion        │  < 50KB             │  필요 부분만  │
│  lucide-react         │  < 5KB              │  개별 임포트  │
│  clsx                  │  < 1KB              │  전체         │
│  next-intl            │  < 10KB             │  필요시만     │
└─────────────────────────────────────────────────────────────┘

도구:
├── bundlephobia.com (설치 전 확인)
├── @next/bundle-analyzer (빌드 분석)
└── import-cost (VS Code 확장)
```

---

## 3. 이미지 최적화 | Image Optimization

### 3.1 이미지 포맷 전략

```
IMAGE FORMAT STRATEGY
─────────────────────────────────────────────────────────────

Format Priority:
1. AVIF  → 최고 압축률, 최신 브라우저
2. WebP  → 좋은 압축률, 넓은 지원
3. JPEG  → 폴백, 100% 호환

Use Cases:
├── Photos/Hero: AVIF → WebP → JPEG
├── Graphics/Icons: SVG (벡터)
├── Transparent: WebP → PNG
└── Animations: 가능하면 CSS/Lottie, 불가피시 WebP animated
```

### 3.2 Next.js Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};

// 사용 예시
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority  // LCP 이미지
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

### 3.3 이미지 크기 가이드라인

```
IMAGE SIZE GUIDELINES
─────────────────────────────────────────────────────────────

Hero Images:
├── Source: 2560 x 1440px (16:9)
├── Mobile: 750px width
├── Tablet: 1200px width
├── Desktop: 1920px width
└── Quality: 80-85%

Card Thumbnails:
├── Source: 800 x 600px (4:3)
├── Display: 400px width
└── Quality: 80%

Icons/Logos:
├── Format: SVG (preferred)
├── Fallback: PNG @2x
└── Max size: 100px display

Background Patterns:
├── Format: SVG (repeatable)
└── 또는 작은 타일 이미지
```

---

## 4. 폰트 최적화 | Font Optimization

### 4.1 폰트 로딩 전략

```
FONT LOADING STRATEGY
─────────────────────────────────────────────────────────────

1. System Font Stack (폴백)
   → 즉시 텍스트 표시

2. Next.js Font Optimization
   → 자동 최적화, 서브셋팅

3. font-display: swap
   → FOIT 방지, FOUT 허용

4. Preload Critical Fonts
   → Hero 영역 폰트 우선 로드
```

### 4.2 Next.js Font 설정

```typescript
// app/layout.tsx
import { Inter, Noto_Serif_KR, Playfair_Display } from 'next/font/google';

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

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${notoSerifKR.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 4.3 폰트 서브셋팅

```
FONT SUBSETTING
─────────────────────────────────────────────────────────────

한글 폰트 (Noto Serif KR):
├── 전체: ~5MB
├── 서브셋 후: ~200KB
└── 포함 문자: 한글 2,350자 + 기본 라틴

방법:
├── Next.js Google Fonts (자동)
├── 또는 fonttools (수동)
└── 또는 유료 서비스 (Fontshare 등)
```

---

## 5. 코드 최적화 | Code Optimization

### 5.1 JavaScript 최적화

```
JAVASCRIPT OPTIMIZATION
─────────────────────────────────────────────────────────────

1. Code Splitting
   ├── Route-based (자동, Next.js)
   ├── Component-based (dynamic import)
   └── Library-based (선택적 로딩)

2. Tree Shaking
   ├── ES Modules 사용
   ├── 개별 import (lodash → lodash-es)
   └── 사용하지 않는 코드 제거

3. Server Components (React)
   ├── 기본적으로 Server Component
   ├── 필요시만 'use client'
   └── 클라이언트 JS 최소화
```

```typescript
// Dynamic Import 예시
import dynamic from 'next/dynamic';

// 무거운 컴포넌트 지연 로딩
const RevivalLoopDiagram = dynamic(
  () => import('@/components/RevivalLoopDiagram'),
  {
    loading: () => <DiagramSkeleton />,
    ssr: false,  // 클라이언트에서만 필요한 경우
  }
);

// 라이브러리 지연 로딩
const handleShare = async () => {
  const { share } = await import('@/lib/share');
  share(data);
};
```

### 5.2 CSS 최적화

```
CSS OPTIMIZATION
─────────────────────────────────────────────────────────────

1. Critical CSS
   ├── Above-the-fold 스타일 인라인
   └── Next.js가 자동 처리

2. Tailwind Purge
   ├── 사용하지 않는 클래스 제거
   └── 프로덕션 빌드 자동 적용

3. CSS 로딩 순서
   ├── Critical (인라인) → 즉시
   ├── Non-critical → 지연 로드
   └── Third-party → 최후
```

### 5.3 렌더링 최적화

```
RENDERING OPTIMIZATION
─────────────────────────────────────────────────────────────

1. Static Generation (SSG)
   ├── 대부분의 페이지
   ├── 빌드 시 HTML 생성
   └── CDN에서 즉시 제공

2. Incremental Static Regeneration (ISR)
   ├── 자주 업데이트되는 콘텐츠
   ├── revalidate 시간 설정
   └── 백그라운드 갱신

3. Server-Side Rendering (SSR)
   ├── 실시간 데이터 필요시
   ├── 사용자별 콘텐츠
   └── 최소한으로 사용

적용:
├── Landing, About, Projects: SSG
├── Resources (블로그): ISR (1시간)
└── Contact: SSG + API Routes
```

---

## 6. 네트워크 최적화 | Network Optimization

### 6.1 리소스 힌트

```html
<!-- Head에 추가 -->

<!-- DNS Prefetch (외부 도메인) -->
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />

<!-- Preconnect (중요한 외부 리소스) -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload (Critical 리소스) -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/images/hero-mobile.webp" as="image" media="(max-width: 768px)" />
<link rel="preload" href="/images/hero-desktop.webp" as="image" media="(min-width: 769px)" />

<!-- Prefetch (다음 페이지) -->
<link rel="prefetch" href="/about" />
```

### 6.2 캐싱 전략

```
CACHING STRATEGY
─────────────────────────────────────────────────────────────

Static Assets (이미지, 폰트, JS/CSS):
├── Cache-Control: public, max-age=31536000, immutable
├── 파일명에 해시 포함 (자동, Next.js)
└── CDN 캐시: 1년

HTML:
├── Cache-Control: public, max-age=0, must-revalidate
├── 또는 ISR의 s-maxage
└── 항상 최신 콘텐츠 보장

API Routes:
├── Cache-Control: private, no-cache
├── 또는 stale-while-revalidate
└── 민감한 데이터 캐시 금지
```

### 6.3 압축

```
COMPRESSION
─────────────────────────────────────────────────────────────

Vercel (자동):
├── Brotli (br) - 기본
├── Gzip (gz) - 폴백
└── 모든 텍스트 리소스에 적용

효과:
├── HTML: 70-90% 압축
├── CSS: 80-90% 압축
├── JS: 60-80% 압축
└── JSON: 70-90% 압축
```

---

## 7. 런타임 성능 | Runtime Performance

### 7.1 JavaScript 실행 최적화

```
JS EXECUTION OPTIMIZATION
─────────────────────────────────────────────────────────────

1. Main Thread 보호
   ├── 무거운 작업 → Web Worker
   ├── 긴 작업 분할 (time slicing)
   └── requestIdleCallback 활용

2. Event Handling
   ├── 디바운싱 (검색, 리사이즈)
   ├── 쓰로틀링 (스크롤)
   └── Passive listeners

3. Memory Management
   ├── 이벤트 리스너 정리
   ├── 큰 객체 참조 해제
   └── 메모리 누수 모니터링
```

```typescript
// 디바운싱 예시
import { useDebouncedCallback } from 'use-debounce';

const handleSearch = useDebouncedCallback((value) => {
  search(value);
}, 300);

// 스크롤 최적화
useEffect(() => {
  const handleScroll = () => {
    // passive: true로 메인 스레드 블로킹 방지
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 7.2 레이아웃 최적화

```
LAYOUT OPTIMIZATION (CLS 방지)
─────────────────────────────────────────────────────────────

1. 이미지 크기 예약
   ├── width/height 속성 필수
   ├── aspect-ratio CSS
   └── Next.js Image 자동 처리

2. 폰트 레이아웃 시프트 방지
   ├── font-display: swap
   ├── size-adjust 속성
   └── 폴백 폰트 매칭

3. 동적 콘텐츠
   ├── Skeleton UI
   ├── 콘텐츠 영역 예약
   └── 애니메이션으로 전환
```

```tsx
// CLS 방지 예시
// 이미지 영역 예약
<div className="relative aspect-video">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    sizes="100vw"
    priority
  />
</div>

// Skeleton으로 영역 예약
<div className="h-[400px]">
  {isLoading ? <CardSkeleton /> : <Card data={data} />}
</div>
```

### 7.3 애니메이션 성능

```
ANIMATION PERFORMANCE
─────────────────────────────────────────────────────────────

GPU 가속 속성 사용:
├── transform
├── opacity
└── filter

피해야 할 속성:
├── width/height (레이아웃 트리거)
├── top/left (레이아웃 트리거)
└── box-shadow (페인트 비용 높음)

will-change 적절히 사용:
├── 애니메이션 시작 전에 추가
├── 애니메이션 후 제거
└── 남용 금지 (메모리 비용)
```

```css
/* 좋은 예 - GPU 가속 */
.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* 나쁜 예 - 레이아웃 트리거 */
.card:hover {
  margin-top: -4px;  /* 레이아웃 재계산 */
  width: 102%;       /* 레이아웃 재계산 */
}
```

---

## 8. 모니터링 & 측정 | Monitoring & Measurement

### 8.1 실시간 모니터링

```
REAL USER MONITORING (RUM)
─────────────────────────────────────────────────────────────

Vercel Speed Insights:
├── 실제 사용자 데이터
├── Core Web Vitals 자동 수집
├── 국가/디바이스별 분석
└── 자동 알림 설정

설정:
```

```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

### 8.2 Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://havruta.org/
            https://havruta.org/about
            https://havruta.org/projects
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

```json
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "first-contentful-paint", "budget": 1800 },
      { "metric": "interactive", "budget": 4500 },
      { "metric": "total-blocking-time", "budget": 200 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 150 },
      { "resourceType": "stylesheet", "budget": 30 },
      { "resourceType": "total", "budget": 500 }
    ]
  }
]
```

### 8.3 성능 대시보드

```
PERFORMANCE DASHBOARD
─────────────────────────────────────────────────────────────

모니터링 항목:
├── Core Web Vitals (일별 추이)
├── 페이지별 로딩 시간
├── 에러율 및 에러 유형
├── 사용자 국가/디바이스 분포
└── API 응답 시간

알림 설정:
├── LCP > 3초: 경고
├── CLS > 0.15: 경고
├── 에러율 > 1%: 긴급
└── 다운타임: 즉시 알림

도구:
├── Vercel Dashboard
├── Sentry (에러)
└── Custom dashboard (선택)
```

---

## 9. 성능 체크리스트 | Performance Checklist

### 9.1 개발 시 체크리스트

```
DEVELOPMENT CHECKLIST
─────────────────────────────────────────────────────────────

이미지:
□ next/image 컴포넌트 사용
□ width/height 또는 fill 속성 지정
□ priority 속성 (LCP 이미지)
□ 적절한 sizes 속성
□ 지연 로딩 (기본 적용)

JavaScript:
□ 필요한 의존성만 설치
□ 개별 import (전체 라이브러리 X)
□ 동적 import (무거운 컴포넌트)
□ Server Component 우선

CSS:
□ Tailwind 사용 (자동 purge)
□ 인라인 스타일 최소화
□ 애니메이션 GPU 가속

콘텐츠:
□ 적절한 heading 구조
□ 이미지 alt 텍스트
□ 폰트 최적화 (Next.js font)
```

### 9.2 배포 전 체크리스트

```
PRE-DEPLOYMENT CHECKLIST
─────────────────────────────────────────────────────────────

빌드 검증:
□ next build 성공
□ 번들 크기 확인 (예산 이내)
□ 타입 에러 없음
□ 린트 에러 없음

성능 테스트:
□ Lighthouse 점수 90+ (Performance)
□ Core Web Vitals 녹색
□ 모바일 3G 테스트
□ 이미지 최적화 확인

기능 테스트:
□ 주요 페이지 로딩
□ 네비게이션 동작
□ 폼 제출
□ 반응형 레이아웃
```

### 9.3 주기적 검토

```
PERIODIC REVIEW
─────────────────────────────────────────────────────────────

주간:
□ Core Web Vitals 추이 확인
□ 에러 로그 검토
□ 새 의존성 크기 확인

월간:
□ 전체 Lighthouse 감사
□ 번들 분석
□ 이미지 감사
□ 성능 회귀 확인

분기별:
□ 의존성 업데이트
□ 성능 목표 재검토
□ 새 최적화 기법 적용
```

---

## 관련 문서

- [01_Tech_Stack.md](./01_Tech_Stack.md) - 기술 스택
- [03_Deployment_Plan.md](./03_Deployment_Plan.md) - 배포 계획
- [02_Mobile_First_Design.md](../04_UX_Wireframes/02_Mobile_First_Design.md) - 모바일 퍼스트 디자인

---

*Havruta Project — powered by AreteVision*
