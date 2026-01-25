# 랜딩 페이지 기획
# Landing Page Specification

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| URL | `/` (root) |
| 목적 | 첫 방문자 전환, 브랜드 임팩트, 프로젝트 안내 |

---

## 1. 페이지 개요 | Page Overview

### 1.1 페이지 목적

```
┌─────────────────────────────────────────────────────────────┐
│                    LANDING PAGE GOALS                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. 첫인상 형성 (First Impression)                          │
│     → 3초 안에 Havruta Project가 무엇인지 전달              │
│                                                              │
│  2. 철학 공감 (Philosophy Resonance)                        │
│     → ASI 시대 맥락과 우리의 대안 제시                      │
│                                                              │
│  3. 프로젝트 발견 (Project Discovery)                       │
│     → 6개 프로젝트 생태계 미리보기                          │
│                                                              │
│  4. 행동 유도 (Conversion)                                  │
│     → 뉴스레터 구독, 프로젝트 탐색                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 핵심 지표

| 지표 | 목표 | 측정 방법 |
|------|------|-----------|
| 평균 체류시간 | 2분+ | Analytics |
| 스크롤 깊이 | 70%+ | Scroll tracking |
| CTA 클릭률 | 5%+ | Click tracking |
| Projects Hub 이동률 | 40%+ | Link tracking |

---

## 2. 페이지 구조 | Page Structure

### 2.1 섹션 구성

```
LANDING PAGE SECTIONS
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│  SECTION 1: Hero                                             │
│  - 메인 헤드라인 + 서브 카피                                 │
│  - Primary CTA + Secondary CTA                               │
│  - 비주얼 (일러스트 또는 비디오 배경)                        │
│  Height: 100vh (Full viewport)                               │
├─────────────────────────────────────────────────────────────┤
│  SECTION 2: Problem/Context                                  │
│  - ASI 시대의 질문과 도전                                    │
│  - 세상의 방식 vs 우리의 방식                                │
│  Height: ~50vh                                               │
├─────────────────────────────────────────────────────────────┤
│  SECTION 3: Philosophy Preview                               │
│  - 핵심 철학 요약                                            │
│  - 부흥 루프 시각화                                          │
│  Height: ~70vh                                               │
├─────────────────────────────────────────────────────────────┤
│  SECTION 4: Projects Overview                                │
│  - 6개 프로젝트 카드 그리드                                  │
│  - Projects Hub 링크                                         │
│  Height: Auto                                                │
├─────────────────────────────────────────────────────────────┤
│  SECTION 5: Social Proof (Optional)                          │
│  - 증언/추천글                                               │
│  - 파트너/사용 교회 로고                                     │
│  Height: ~40vh                                               │
├─────────────────────────────────────────────────────────────┤
│  SECTION 6: Newsletter CTA                                   │
│  - 이메일 구독 폼                                            │
│  - 가치 제안                                                 │
│  Height: ~40vh                                               │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  - 네비게이션 링크                                           │
│  - 소셜 미디어                                               │
│  - 법적 고지                                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 섹션별 상세 기획 | Section Details

### 3.1 Hero Section

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: Logo | About | Projects | Resources | Contact | 🌐]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│                    [Visual/Illustration]                     │
│                                                              │
│              ASI 시대, 우리가 지켜야 할 것은                 │
│              경쟁력이 아닙니다.                              │
│                                                              │
│                   정체성입니다.                              │
│                                                              │
│         말씀과 공동체로 더 깊은 사람을 세웁니다.             │
│                                                              │
│           [프로젝트 둘러보기]  [철학 알아보기]               │
│                                                              │
│                                                              │
│                         ↓ Scroll                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 콘텐츠 명세

| 요소 | 내용 (KR) | 내용 (EN) |
|------|-----------|-----------|
| Pre-title | ASI 시대, 우리가 지켜야 할 것은 | In the ASI Era, what we must protect is |
| Headline | 경쟁력이 아닙니다. **정체성입니다.** | not competitiveness. **It's identity.** |
| Sub-headline | 말씀과 공동체로 더 깊은 사람을 세웁니다 | Building deeper people through Word and community |
| Primary CTA | 프로젝트 둘러보기 | Explore Projects |
| Secondary CTA | 철학 알아보기 | Learn Our Philosophy |

#### 개발 명세

```typescript
// Hero Section Props
interface HeroSectionProps {
  preTitle: string;
  headline: string;
  highlightedText: string;
  subHeadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundType: 'image' | 'video' | 'illustration' | 'gradient';
  backgroundSrc?: string;
}

// Animation
- Headline: Fade in + slide up (0.5s delay)
- Sub-headline: Fade in + slide up (0.7s delay)
- CTAs: Fade in (1s delay)
- Scroll indicator: Bounce animation (continuous)
```

---

### 3.2 Problem/Context Section

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    시대가 던지는 질문                        │
│                                                              │
│  ┌─────────────────────┐    ┌─────────────────────┐        │
│  │   세상이 말합니다    │    │   우리는 말합니다    │        │
│  ├─────────────────────┤    ├─────────────────────┤        │
│  │ "더 똑똑해져라"     │ → │ "더 깊은 뿌리를 내려라"│        │
│  │ "경쟁에서 살아남아라"│ → │ "서로를 지켜라"      │        │
│  │ "답을 찾아라"       │ → │ "진리를 사랑하라"    │        │
│  └─────────────────────┘    └─────────────────────┘        │
│                                                              │
│         "하나님은 '더 강한 스펙'으로 성도를 지키지           │
│          않으셨다. '더 깊은 뿌리'로 성도를 지키셨다."        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 콘텐츠 명세

| 요소 | 콘텐츠 |
|------|--------|
| Section Title | 시대가 던지는 질문 |
| Left Column Title | 세상이 말합니다 |
| Right Column Title | 우리는 말합니다 |
| Contrast Items | 3-4개 대조 항목 |
| Quote | Philosophy.md 핵심 인용 |

---

### 3.3 Philosophy Preview Section

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    부흥은 루프입니다                         │
│                                                              │
│          "부흥은 하루가 아니라 습관입니다.                   │
│           부흥은 감정이 아니라 구조입니다."                  │
│                                                              │
│                    [부흥 루프 다이어그램]                    │
│                                                              │
│              ┌───────┐                                       │
│              │ 말씀  │                                       │
│              └───┬───┘                                       │
│                  ↓                                           │
│    ┌───────┐ ← ─ ─ ─ ─ → ┌───────┐                          │
│    │ 보호  │             │ 암송  │                          │
│    └───┬───┘             └───┬───┘                          │
│        ↑                     ↓                               │
│    ┌───┴───┐             ┌───┴───┐                          │
│    │ 순종  │ ← ─ ─ ─ ─ → │ 질문  │                          │
│    └───────┘             └───┬───┘                          │
│                              ↓                               │
│                          ┌───────┐                           │
│                          │ 대화  │                           │
│                          └───────┘                           │
│                                                              │
│                    [철학 전체 보기]                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 개발 명세

```typescript
// Revival Loop Component
interface RevivalLoopProps {
  steps: Array<{
    id: string;
    label: string;
    description: string;
    icon: string;
  }>;
  interactive: boolean;
  animateOnScroll: boolean;
}

// Steps Data
const revivalLoopSteps = [
  { id: 'word', label: '말씀', description: '입력' },
  { id: 'memorize', label: '암송', description: '내면화' },
  { id: 'question', label: '질문', description: '분별' },
  { id: 'dialogue', label: '대화', description: '공동체' },
  { id: 'obey', label: '순종', description: '적용' },
  { id: 'protect', label: '보호', description: '서로 지킴' },
];

// Animation
- 각 단계가 순차적으로 하이라이트 (hover 또는 자동)
- 연결선이 펄스 애니메이션
```

---

### 3.4 Projects Overview Section

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                  프로젝트 생태계                             │
│        하나의 뿌리에서 자라나는 여섯 개의 열매               │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  [Icon]      │  │  [Icon]      │  │  [Icon]      │      │
│  │              │  │              │  │              │      │
│  │ ChurchThrive │  │   COMPASS    │  │ MATCH_Family │      │
│  │              │  │              │  │   _Verse     │      │
│  │ 교회 부흥의  │  │ 은사를 발견  │  │ 가정이 작은  │      │
│  │ 구조를 세움  │  │ 사역을 찾음  │  │ 교회가 됨    │      │
│  │              │  │              │  │              │      │
│  │ [알아보기]   │  │ [알아보기]   │  │ [알아보기]   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  [Icon]      │  │  [Icon]      │  │  [Icon]      │      │
│  │              │  │              │  │              │      │
│  │ BlueHill21   │  │  GBPF_WRAM   │  │   Havruta    │      │
│  │   Leader     │  │              │  │ Project_Web  │      │
│  │              │  │              │  │              │      │
│  │ 리더를 세움  │  │ 청지기 재정  │  │ 통합 허브    │      │
│  │ 지식을 쌓음  │  │ 관리         │  │              │      │
│  │              │  │              │  │              │      │
│  │ [알아보기]   │  │ [알아보기]   │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│                   [전체 프로젝트 보기]                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 프로젝트 카드 데이터

```typescript
interface ProjectCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  isActive: boolean;
}

const projects: ProjectCard[] = [
  {
    id: 'churchthrive',
    name: 'ChurchThrive',
    tagline: '교회 부흥의 구조',
    description: '15일 부트캠프로 지속 가능한 부흥의 체질을 만듭니다',
    icon: 'church',
    color: '#2D5A4A',
    href: '/projects/churchthrive',
    isActive: true,
  },
  {
    id: 'compass',
    name: 'COMPASS',
    tagline: '은사와 사역 매칭',
    description: '성품과 은사를 진단하고 맞는 사역을 찾습니다',
    icon: 'compass',
    color: '#1A2B4A',
    href: '/projects/compass',
    isActive: true,
  },
  // ... 나머지 프로젝트
];
```

---

### 3.5 Social Proof Section (Optional)

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                  함께하는 교회들의 이야기                    │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  "ChurchThrive 부트캠프 이후, 우리 교회의 말씀      │   │
│  │   나눔 문화가 완전히 바뀌었습니다. 부흥이 정말      │   │
│  │   습관이 될 수 있다는 것을 경험했습니다."           │   │
│  │                                                      │   │
│  │                   — 김○○ 목사, ○○교회              │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│           [●] [ ] [ ]    (Testimonial Carousel)             │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Logo 1│  │Logo 2│  │Logo 3│  │Logo 4│  │Logo 5│         │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 3.6 Newsletter CTA Section

#### 와이어프레임

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ░░░░░░░░░░░░░░░ Background: Soft Cream ░░░░░░░░░░░░░░░░░  │
│                                                              │
│                  말씀과 함께하는 여정,                       │
│                    함께해요                                  │
│                                                              │
│          매주 인사이트와 말씀 나눔을 보내드립니다            │
│                                                              │
│           ┌─────────────────────────────────────┐           │
│           │  이메일 주소를 입력하세요            │           │
│           └─────────────────────────────────────┘           │
│                      [구독하기]                              │
│                                                              │
│              🔒 스팸 없음 · 언제든 구독 취소                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 개발 명세

```typescript
interface NewsletterFormProps {
  headline: string;
  subHeadline: string;
  placeholder: string;
  buttonText: string;
  privacyNote: string;
  onSubmit: (email: string) => Promise<void>;
}

// States
- Default: 입력 필드 + 버튼
- Loading: 버튼 스피너
- Success: 감사 메시지 + 체크 아이콘
- Error: 에러 메시지 + 재시도

// Integration
- 이메일 마케팅 서비스 연동 (Mailchimp, ConvertKit 등)
```

---

## 4. 반응형 디자인 | Responsive Design

### 4.1 Desktop (1440px+)

```
- Hero: 중앙 정렬, 양쪽 여백 충분
- Projects: 3-column 그리드
- Philosophy: 수평 레이아웃
```

### 4.2 Tablet (768px - 1439px)

```
- Hero: 텍스트 크기 축소
- Projects: 2-column 그리드
- Philosophy: 수평 유지 or 수직 전환
```

### 4.3 Mobile (< 768px)

```
- Hero: 스택 레이아웃, 버튼 풀 width
- Projects: 1-column 스택
- Philosophy: 수직 스택, 루프 단순화
- Newsletter: 풀 width 폼
```

---

## 5. 인터랙션 & 애니메이션 | Interactions & Animations

### 5.1 스크롤 기반

```
SCROLL-BASED ANIMATIONS
─────────────────────────────────────────────────────────────

1. Hero → Problem Section
   - Hero 요소 페이드 아웃
   - Problem 섹션 페이드 인 + 슬라이드 업

2. Problem → Philosophy Section
   - Contrast 카드 순차 등장 (stagger)
   - Quote 타이핑 효과 (optional)

3. Philosophy Section
   - 부흥 루프 다이어그램 단계별 하이라이트
   - 스크롤 진행에 따라 활성 단계 변경

4. Projects Section
   - 카드 순차 등장 (stagger 100ms)
   - 호버 시 lift effect
```

### 5.2 호버 & 클릭

```
HOVER/CLICK INTERACTIONS
─────────────────────────────────────────────────────────────

Project Cards:
  - Hover: scale(1.02), shadow 증가
  - Click: ripple effect → 페이지 전환

Buttons:
  - Primary: 배경색 10% 밝아짐
  - Secondary: 배경색 채워짐 (outline → filled)

Revival Loop Steps:
  - Hover: 해당 단계 확대, 설명 툴팁
```

---

## 6. SEO & 메타데이터 | SEO & Metadata

### 6.1 메타 태그

```html
<title>Havruta Project - ASI 시대의 교회 부흥</title>
<meta name="description" content="말씀과 공동체로 더 깊은 사람을 세우는 프로젝트 생태계. ASI 시대에도 흔들리지 않는 정체성을 지킵니다.">

<!-- Open Graph -->
<meta property="og:title" content="Havruta Project">
<meta property="og:description" content="말씀과 공동체로 더 깊은 사람을 세웁니다">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://havruta-project.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Havruta Project">
<meta name="twitter:description" content="ASI 시대, 정체성을 지키는 교회">
```

### 6.2 구조화 데이터

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Havruta Project",
  "description": "ASI 시대에도 교회와 성도가 정체성을 잃지 않고, 말씀 안에서 서로를 지키며 부흥을 지속시키는 프로젝트 생태계",
  "url": "https://havruta-project.com",
  "logo": "https://havruta-project.com/logo.png"
}
```

---

## 7. 성능 요구사항 | Performance Requirements

### 7.1 로딩 최적화

| 항목 | 요구사항 |
|------|----------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total Page Weight | < 2MB |

### 7.2 이미지 최적화

```
- Next.js Image 컴포넌트 사용
- WebP/AVIF 포맷 자동 변환
- Lazy loading (뷰포트 외 이미지)
- Blur placeholder
```

---

## 8. 접근성 | Accessibility

### 8.1 요구사항

```
WCAG 2.1 AA 준수
─────────────────────────────────────────────────────────────

□ 키보드 네비게이션 가능
□ 스크린 리더 호환
□ 충분한 색상 대비 (4.5:1 이상)
□ 포커스 인디케이터 명확
□ 대체 텍스트 제공 (이미지)
□ 시맨틱 HTML 사용
□ skip to content 링크
```

---

## 9. 컴포넌트 체크리스트 | Component Checklist

### 필요 컴포넌트

```
□ Navigation (Header)
□ HeroSection
□ ContrastSection
□ PhilosophySection
  □ RevivalLoopDiagram
□ ProjectsGridSection
  □ ProjectCard
□ TestimonialSection
  □ TestimonialCarousel
□ NewsletterSection
  □ NewsletterForm
□ Footer
```

---

## 관련 문서

- [01_Site_Map.md](../00_Overview/01_Site_Map.md) - 전체 사이트맵
- [02_About_Page.md](./02_About_Page.md) - About 페이지
- [03_Projects_Hub.md](./03_Projects_Hub.md) - Projects Hub
- [03_Component_Library.md](../04_UX_Wireframes/03_Component_Library.md) - 컴포넌트

---

*Havruta Project — powered by AreteVision*
