# 모바일 퍼스트 디자인 원칙
# Mobile First Design Principles

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 모바일 우선 반응형 디자인 원칙 및 가이드라인 정의 |

---

## 1. 모바일 퍼스트 철학 | Mobile First Philosophy

### 1.1 왜 모바일 퍼스트인가?

```
MOBILE FIRST RATIONALE
─────────────────────────────────────────────────────────────

1. 사용자 현실
   ├── 전체 웹 트래픽 60%+ 모바일
   ├── 교회 관련 검색 대부분 모바일에서 발생
   └── 가정 예배 참여는 태블릿/모바일 선호

2. 디자인 이점
   ├── 핵심에 집중 (제약이 명확성 강화)
   ├── 성능 최적화 (가벼운 것에서 시작)
   └── 점진적 향상 (기능 추가 용이)

3. 개발 효율
   ├── 단순한 기본 구조
   ├── 미디어 쿼리로 확장
   └── 코드 중복 최소화
```

### 1.2 핵심 원칙

```
CORE PRINCIPLES
─────────────────────────────────────────────────────────────

1. CONTENT FIRST
   "콘텐츠가 디자인을 결정한다"
   → 모바일에서 필수 콘텐츠를 먼저 정의
   → 화면이 커질수록 보완 콘텐츠 추가

2. PROGRESSIVE ENHANCEMENT
   "기본에서 시작해 향상시킨다"
   → 모바일 = 기본 경험 (baseline)
   → 태블릿/데스크탑 = 향상된 경험

3. TOUCH FIRST
   "터치가 기본 인터랙션이다"
   → 마우스 호버는 부가 기능
   → 모든 인터랙션은 터치로 동작 가능

4. PERFORMANCE FIRST
   "속도가 곧 UX다"
   → 모바일 네트워크 기준 최적화
   → 3G에서도 사용 가능한 로딩 속도
```

---

## 2. 반응형 브레이크포인트 | Responsive Breakpoints

### 2.1 브레이크포인트 정의

```
BREAKPOINT SYSTEM
─────────────────────────────────────────────────────────────

                 0        375      768      1024     1280     1536
                 │         │        │         │        │        │
                 ├─────────┼────────┼─────────┼────────┼────────┤
                 │   xs    │   sm   │   md    │   lg   │   xl   │
                 │         │        │         │        │        │
                 │ < 375px │375-767│768-1023 │1024-1279│ 1280+  │
                 │         │        │         │        │        │
Device:          Small     Mobile   Tablet    Laptop   Desktop
                 Phone     Phone    Portrait  /Desktop Large

CSS Variables:
--breakpoint-sm: 375px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### 2.2 디바이스별 특성

| 브레이크포인트 | 디바이스 | 특성 | 예시 디바이스 |
|---------------|----------|------|--------------|
| **xs** (< 375px) | 소형 모바일 | 최소 지원, 극단적 제약 | iPhone SE, 소형 Android |
| **sm** (375-767px) | 모바일 | 기본 설계 기준 | iPhone, Galaxy |
| **md** (768-1023px) | 태블릿 | 터치 + 넓은 화면 | iPad, Galaxy Tab |
| **lg** (1024-1279px) | 랩탑 | 마우스/터치 혼합 | MacBook, 소형 랩탑 |
| **xl** (1280px+) | 데스크탑 | 최대 레이아웃 | iMac, 외부 모니터 |

### 2.3 CSS 미디어 쿼리

```css
/* Mobile First CSS Structure */

/* 기본 (Mobile) - 미디어 쿼리 없음 */
.container {
  padding: 16px;
  max-width: 100%;
}

/* Small devices (375px and up) */
@media (min-width: 375px) {
  .container {
    padding: 16px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 960px;
  }
}

/* Extra large devices (large desktops, 1280px and up) */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 3. 레이아웃 시스템 | Layout System

### 3.1 그리드 시스템

```
RESPONSIVE GRID SYSTEM
─────────────────────────────────────────────────────────────

Mobile (< 768px): 4 columns
┌─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │
└─────┴─────┴─────┴─────┘
Gap: 16px
Margin: 16px

Tablet (768-1023px): 8 columns
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │
└───┴───┴───┴───┴───┴───┴───┴───┘
Gap: 20px
Margin: 24px

Desktop (1024px+): 12 columns
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│1 │2 │3 │4 │5 │6 │7 │8 │9 │10│11│12│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
Gap: 24px
Margin: 32px (max-width 내)
```

### 3.2 컨테이너 시스템

```css
/* Container System */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}

/* Full-width container */
.container-fluid {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 768px) {
  .container-fluid {
    padding-left: 24px;
    padding-right: 24px;
  }
}
```

### 3.3 콘텐츠 배치 패턴

```
LAYOUT PATTERNS
─────────────────────────────────────────────────────────────

Pattern 1: Stack → Side by Side
Mobile:                    Desktop:
┌─────────────┐           ┌───────┬───────┐
│    Item 1   │           │       │       │
├─────────────┤    →      │ Item1 │ Item2 │
│    Item 2   │           │       │       │
└─────────────┘           └───────┴───────┘

Pattern 2: Full → Grid
Mobile:                    Desktop:
┌─────────────┐           ┌─────┬─────┬─────┐
│   Card 1    │           │Card1│Card2│Card3│
├─────────────┤    →      ├─────┼─────┼─────┤
│   Card 2    │           │Card4│Card5│Card6│
├─────────────┤           └─────┴─────┴─────┘
│   Card 3    │
└─────────────┘

Pattern 3: Hidden → Visible
Mobile:                    Desktop:
┌─────────────┐           ┌───────┬───────┐
│   Main      │           │ Side  │ Main  │
│   Content   │    →      │ bar   │Content│
│             │           │(new)  │       │
└─────────────┘           └───────┴───────┘
```

---

## 4. 터치 인터랙션 | Touch Interactions

### 4.1 터치 타겟 사이즈

```
TOUCH TARGET SIZES
─────────────────────────────────────────────────────────────

최소 권장 사이즈: 44 x 44 px (Apple HIG)
이상적 사이즈: 48 x 48 px (Material Design)

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  버튼/링크:        아이콘 버튼:        네비게이션 아이템:   │
│  ┌──────────┐     ┌────────┐         ┌──────────────┐      │
│  │          │     │        │         │              │      │
│  │  48px+   │     │  44px  │         │  48px height │      │
│  │  height  │     │  min   │         │              │      │
│  │          │     │        │         │              │      │
│  └──────────┘     └────────┘         └──────────────┘      │
│                                                             │
│  간격: 최소 8px 사이 (오탭 방지)                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 터치 제스처

| 제스처 | 용도 | 적용 예시 |
|--------|------|-----------|
| **Tap** | 기본 선택/활성화 | 버튼, 링크, 카드 |
| **Long Press** | 컨텍스트 메뉴 | 이미지 저장, 추가 옵션 |
| **Swipe** | 콘텐츠 탐색 | 캐러셀, 갤러리, 삭제 |
| **Pinch** | 줌 인/아웃 | 이미지 확대 |
| **Pull to Refresh** | 새로고침 | 리스트 업데이트 |

### 4.3 호버 vs 터치 처리

```css
/* 호버는 데스크탑 전용 향상 */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .link:hover {
    text-decoration: underline;
  }
}

/* 터치 디바이스용 active 상태 */
@media (hover: none) {
  .card:active {
    transform: scale(0.98);
    opacity: 0.9;
  }

  .button:active {
    background-color: var(--indigo-700);
  }
}
```

---

## 5. 타이포그래피 | Typography

### 5.1 반응형 폰트 사이즈

```
RESPONSIVE TYPOGRAPHY SCALE
─────────────────────────────────────────────────────────────

Element        Mobile      Tablet      Desktop
─────────────────────────────────────────────────────────────
H1             32px        40px        48px
H2             24px        32px        36px
H3             20px        24px        28px
H4             18px        20px        22px
Body           16px        16px        18px
Body Small     14px        14px        16px
Caption        12px        12px        14px
─────────────────────────────────────────────────────────────

Line Height:
- Headings: 1.2 - 1.3
- Body: 1.5 - 1.6
- Long form: 1.7 - 1.8
```

### 5.2 CSS Clamp 활용

```css
/* Fluid Typography with clamp() */
:root {
  /* H1: 32px → 48px */
  --font-size-h1: clamp(2rem, 5vw + 1rem, 3rem);

  /* H2: 24px → 36px */
  --font-size-h2: clamp(1.5rem, 4vw + 0.5rem, 2.25rem);

  /* H3: 20px → 28px */
  --font-size-h3: clamp(1.25rem, 3vw + 0.5rem, 1.75rem);

  /* Body: 16px → 18px */
  --font-size-body: clamp(1rem, 1vw + 0.75rem, 1.125rem);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }
body { font-size: var(--font-size-body); }
```

### 5.3 읽기 경험 최적화

```
READING EXPERIENCE
─────────────────────────────────────────────────────────────

최적 줄 길이 (Characters per line):
├── Mobile: 45-75자
├── Tablet: 60-80자
└── Desktop: 65-85자

구현:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  .prose {                                                   │
│    max-width: 65ch;  /* 약 65자 너비 */                    │
│    margin: 0 auto;                                          │
│  }                                                          │
│                                                             │
│  /* 단락 간격 */                                            │
│  .prose p + p {                                             │
│    margin-top: 1.5em;                                       │
│  }                                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. 이미지 & 미디어 | Images & Media

### 6.1 반응형 이미지

```html
<!-- 반응형 이미지 기본 패턴 -->
<picture>
  <!-- 데스크탑용 WebP -->
  <source
    media="(min-width: 1024px)"
    srcset="hero-desktop.webp"
    type="image/webp"
  />
  <!-- 태블릿용 WebP -->
  <source
    media="(min-width: 768px)"
    srcset="hero-tablet.webp"
    type="image/webp"
  />
  <!-- 모바일용 WebP -->
  <source
    srcset="hero-mobile.webp"
    type="image/webp"
  />
  <!-- 폴백 -->
  <img
    src="hero-mobile.jpg"
    alt="Hero image description"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### 6.2 이미지 사이즈 가이드

```
IMAGE SIZE GUIDELINES
─────────────────────────────────────────────────────────────

Hero Images:
├── Mobile: 750 x 1000px (3:4)
├── Tablet: 1536 x 800px (약 2:1)
└── Desktop: 2560 x 800px (3.2:1)

Card Images:
├── Mobile: 750 x 500px (3:2)
├── Tablet: 600 x 400px (3:2)
└── Desktop: 400 x 300px (4:3)

Thumbnails:
├── All: 300 x 300px (1:1)
└── Retina: 600 x 600px @2x

Format Priority:
1. WebP (가장 작은 용량)
2. AVIF (더 작지만 지원 제한)
3. JPEG (폴백)
4. PNG (투명도 필요시)
```

### 6.3 지연 로딩

```html
<!-- Native Lazy Loading -->
<img src="image.jpg" loading="lazy" alt="Description" />

<!-- Above the fold는 eager -->
<img src="hero.jpg" loading="eager" alt="Hero" />

<!-- Intersection Observer 기반 커스텀 -->
<img
  data-src="image.jpg"
  class="lazyload"
  alt="Description"
/>
```

```css
/* 이미지 로딩 플레이스홀더 */
.image-wrapper {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 7. 성능 최적화 | Performance Optimization

### 7.1 모바일 성능 목표

```
PERFORMANCE TARGETS
─────────────────────────────────────────────────────────────

Core Web Vitals (Mobile):
├── LCP (Largest Contentful Paint): < 2.5초
├── FID (First Input Delay): < 100ms
├── CLS (Cumulative Layout Shift): < 0.1
└── TTFB (Time to First Byte): < 600ms

Page Weight:
├── Initial HTML: < 50KB
├── CSS (gzipped): < 50KB
├── JS (gzipped): < 150KB
├── Images (above fold): < 200KB
└── Total: < 1MB (ideal), < 2MB (max)

Speed Index:
├── 3G: < 5초
├── 4G: < 3초
└── WiFi: < 2초
```

### 7.2 최적화 전략

```
OPTIMIZATION STRATEGIES
─────────────────────────────────────────────────────────────

1. Critical Path Optimization
   ├── Critical CSS 인라인
   ├── Above-the-fold 우선 로딩
   └── Non-critical 지연 로딩

2. Resource Loading
   ├── 폰트: display:swap, preload
   ├── 이미지: lazy loading, srcset
   └── JS: defer, async, 코드 스플리팅

3. Caching Strategy
   ├── Static assets: 1년 캐시
   ├── HTML: no-cache 또는 짧은 TTL
   └── API 응답: stale-while-revalidate

4. Network Optimization
   ├── HTTP/2 활용
   ├── CDN 사용
   └── 리소스 힌트 (preload, prefetch)
```

### 7.3 리소스 힌트

```html
<head>
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  <link rel="dns-prefetch" href="//cdn.example.com">

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Preload (Critical Resources) -->
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/images/hero-mobile.webp" as="image">

  <!-- Prefetch (Next Page Resources) -->
  <link rel="prefetch" href="/about">
</head>
```

---

## 8. 컴포넌트별 반응형 패턴 | Component Patterns

### 8.1 네비게이션

```
NAVIGATION RESPONSIVE PATTERN
─────────────────────────────────────────────────────────────

Mobile:
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                        [☰]         │
└─────────────────────────────────────────────────────────────┘

Desktop:
┌─────────────────────────────────────────────────────────────┐
│  [Logo]    [About] [Projects] [Resources]    [시작하기]    │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 히어로 섹션

```
HERO SECTION PATTERN
─────────────────────────────────────────────────────────────

Mobile (Stack):                Desktop (Side by Side):
┌─────────────────────┐       ┌────────────────────────────┐
│                     │       │                            │
│     [Image/BG]      │       │  Text      │    Image     │
│                     │       │  Content   │              │
├─────────────────────┤       │            │              │
│                     │       │  [CTA]     │              │
│   Headline          │       │            │              │
│   Description       │       │            │              │
│   [CTA Button]      │       │            │              │
│                     │       │            │              │
└─────────────────────┘       └────────────────────────────┘
```

### 8.3 카드 그리드

```
CARD GRID PATTERN
─────────────────────────────────────────────────────────────

Mobile (1 column):
┌─────────────┐
│   Card 1    │
├─────────────┤
│   Card 2    │
├─────────────┤
│   Card 3    │
└─────────────┘

Tablet (2 columns):
┌───────┬───────┐
│ Card1 │ Card2 │
├───────┼───────┤
│ Card3 │ Card4 │
└───────┴───────┘

Desktop (3-4 columns):
┌─────┬─────┬─────┬─────┐
│ C1  │ C2  │ C3  │ C4  │
├─────┼─────┼─────┼─────┤
│ C5  │ C6  │ C7  │ C8  │
└─────┴─────┴─────┴─────┘
```

### 8.4 폼 레이아웃

```
FORM LAYOUT PATTERN
─────────────────────────────────────────────────────────────

Mobile (Full width):
┌─────────────────────────┐
│  Label                  │
│  ┌───────────────────┐  │
│  │    Input Field    │  │
│  └───────────────────┘  │
│                         │
│  Label                  │
│  ┌───────────────────┐  │
│  │    Input Field    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │      Submit       │  │
│  └───────────────────┘  │
└─────────────────────────┘

Desktop (Inline where appropriate):
┌──────────────────────────────────────┐
│  ┌────────────┐   ┌────────────┐     │
│  │ First Name │   │ Last Name  │     │
│  └────────────┘   └────────────┘     │
│                                      │
│  ┌─────────────────────────────┐     │
│  │         Email               │     │
│  └─────────────────────────────┘     │
│                                      │
│           [Submit Button]            │
└──────────────────────────────────────┘
```

---

## 9. 테스트 & 검증 | Testing & Validation

### 9.1 디바이스 테스트 매트릭스

| 디바이스 | OS | 브라우저 | 우선순위 |
|----------|----|---------|---------|
| iPhone 14/15 | iOS 17+ | Safari | ★★★★★ |
| iPhone SE | iOS 15+ | Safari | ★★★★☆ |
| Galaxy S23 | Android 13+ | Chrome | ★★★★★ |
| Galaxy A52 | Android 11+ | Chrome | ★★★★☆ |
| iPad Pro | iPadOS 17+ | Safari | ★★★★☆ |
| Galaxy Tab | Android | Chrome | ★★★☆☆ |

### 9.2 테스트 체크리스트

```
MOBILE TESTING CHECKLIST
─────────────────────────────────────────────────────────────

레이아웃:
□ 모든 브레이크포인트에서 콘텐츠 잘림 없음
□ 가로 스크롤 없음 (의도적인 경우 제외)
□ 폰트 크기 읽기 편함 (16px 이상)
□ 버튼/링크 터치 타겟 충분 (44px+)

성능:
□ LCP < 2.5초 (3G 환경)
□ FID < 100ms
□ CLS < 0.1
□ 이미지 지연 로딩 동작
□ 폰트 FOUT/FOIT 최소화

인터랙션:
□ 모든 버튼/링크 탭 가능
□ 폼 입력 키보드 최적화 (inputmode)
□ 스크롤 부드러움
□ 애니메이션 60fps

접근성:
□ 색상 대비 충분 (4.5:1 이상)
□ 줌 200%에서 사용 가능
□ VoiceOver/TalkBack 동작
□ 가로/세로 모드 모두 지원
```

### 9.3 성능 테스트 도구

```
TESTING TOOLS
─────────────────────────────────────────────────────────────

1. Chrome DevTools
   ├── Device Mode (에뮬레이션)
   ├── Lighthouse (성능 감사)
   ├── Performance 탭 (런타임 분석)
   └── Network 탭 (로딩 분석)

2. 외부 도구
   ├── PageSpeed Insights (Google)
   ├── WebPageTest (상세 분석)
   ├── GTmetrix (성능 리포트)
   └── BrowserStack (실제 디바이스)

3. 접근성
   ├── axe DevTools
   ├── WAVE
   └── 실제 스크린 리더 테스트
```

---

## 10. 구현 코드 예시 | Implementation Examples

### 10.1 Tailwind CSS 설정

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    }
  }
}
```

### 10.2 반응형 컴포넌트 예시

```jsx
// components/Card.tsx
const Card = ({ title, description, image }) => {
  return (
    <article className="
      /* Mobile First */
      flex flex-col
      p-4
      bg-white
      rounded-lg
      shadow-md

      /* Tablet (md) */
      md:p-6
      md:flex-row

      /* Desktop (lg) */
      lg:p-8
    ">
      <img
        src={image}
        alt={title}
        className="
          w-full h-48 object-cover rounded-md
          md:w-1/3 md:h-auto
          lg:w-2/5
        "
        loading="lazy"
      />
      <div className="
        mt-4
        md:mt-0 md:ml-6
        lg:ml-8
      ">
        <h3 className="
          text-xl font-semibold
          md:text-2xl
          lg:text-3xl
        ">
          {title}
        </h3>
        <p className="
          mt-2 text-gray-600
          text-base
          lg:text-lg
        ">
          {description}
        </p>
      </div>
    </article>
  );
};
```

---

## 관련 문서

- [01_Navigation_Structure.md](./01_Navigation_Structure.md) - 네비게이션 구조
- [03_Component_Library.md](./03_Component_Library.md) - 컴포넌트 라이브러리
- [02_Visual_Identity.md](../01_Brand_Identity/02_Visual_Identity.md) - 비주얼 아이덴티티

---

*Havruta Project — powered by AreteVision*
