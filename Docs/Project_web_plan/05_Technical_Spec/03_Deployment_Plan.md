# 배포 계획
# Deployment Plan

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 웹사이트 배포 전략, 환경 설정, CI/CD 파이프라인 정의 |

---

## 1. 배포 전략 개요 | Deployment Strategy Overview

### 1.1 배포 아키텍처

```
DEPLOYMENT ARCHITECTURE
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     PRODUCTION                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │    ┌──────────┐    ┌──────────┐    ┌──────────┐   │   │
│  │    │  Edge    │    │  Origin  │    │  Static  │   │   │
│  │    │  CDN     │ ←→ │  Server  │ ←→ │  Assets  │   │   │
│  │    │ (Vercel) │    │ (Vercel) │    │  (CDN)   │   │   │
│  │    └──────────┘    └──────────┘    └──────────┘   │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↑                                  │
│                   main branch                               │
│                          │                                  │
├──────────────────────────┼──────────────────────────────────┤
│                          │                                  │
│                     PREVIEW                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │    PR #123 → https://pr-123.havruta.vercel.app     │   │
│  │    PR #124 → https://pr-124.havruta.vercel.app     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↑                                  │
│                   feature branches                          │
│                          │                                  │
├──────────────────────────┼──────────────────────────────────┤
│                          │                                  │
│                     LOCAL DEV                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │    localhost:3000                                   │   │
│  │    (next dev)                                       │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 환경 구성

| 환경 | 목적 | URL | 배포 트리거 |
|------|------|-----|-------------|
| **Production** | 실제 서비스 | havruta.org | main 브랜치 푸시 |
| **Preview** | PR 검토 | pr-*.vercel.app | PR 생성/업데이트 |
| **Development** | 로컬 개발 | localhost:3000 | 수동 |

---

## 2. Vercel 배포 설정 | Vercel Configuration

### 2.1 프로젝트 설정

```
VERCEL PROJECT SETUP
─────────────────────────────────────────────────────────────

1. GitHub 저장소 연결
   └── github.com/havruta/havruta-web

2. 프레임워크 감지
   └── Next.js (자동 감지)

3. 빌드 설정
   ├── Build Command: pnpm build
   ├── Output Directory: .next (자동)
   └── Install Command: pnpm install

4. 루트 디렉토리
   └── ./ (기본값)
```

### 2.2 vercel.json 설정

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

### 2.3 환경 변수

```
ENVIRONMENT VARIABLES
─────────────────────────────────────────────────────────────

Production:
├── NEXT_PUBLIC_SITE_URL=https://havruta.org
├── NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
├── SENTRY_DSN=https://xxx@sentry.io/xxx
├── RESEND_API_KEY=re_xxxxx (이메일 전송)
└── NEWSLETTER_API_KEY=xxx

Preview:
├── NEXT_PUBLIC_SITE_URL=https://preview.havruta.org
└── (나머지는 Production과 동일 또는 테스트용)

Development (로컬):
├── .env.local 파일 사용
└── NEXT_PUBLIC_SITE_URL=http://localhost:3000

⚠️ 민감한 정보는 Vercel Dashboard에서만 설정
⚠️ NEXT_PUBLIC_ 접두사는 클라이언트 노출
```

---

## 3. CI/CD 파이프라인 | CI/CD Pipeline

### 3.1 GitHub Actions 워크플로우

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  # 1. 코드 품질 검사
  lint-and-type-check:
    name: Lint & Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run ESLint
        run: pnpm lint

      - name: Run TypeScript check
        run: pnpm type-check

  # 2. 단위 테스트
  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run tests
        run: pnpm test:ci

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

  # 3. 빌드 검증
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Check bundle size
        run: pnpm size-limit

  # 4. E2E 테스트 (선택적)
  e2e:
    name: E2E Tests
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps chromium

      - name: Run E2E tests
        run: pnpm test:e2e

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

### 3.2 Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on:
  deployment_status:

jobs:
  lighthouse:
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            ${{ github.event.deployment_status.target_url }}
            ${{ github.event.deployment_status.target_url }}/about
            ${{ github.event.deployment_status.target_url }}/projects
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true

      - name: Comment PR with results
        if: github.event_name == 'pull_request'
        uses: peter-evans/create-or-update-comment@v3
        with:
          issue-number: ${{ github.event.pull_request.number }}
          body: |
            ## Lighthouse Results

            | Page | Performance | Accessibility | Best Practices | SEO |
            |------|-------------|---------------|----------------|-----|
            | Home | ... | ... | ... | ... |
```

### 3.3 배포 파이프라인 흐름

```
DEPLOYMENT PIPELINE FLOW
─────────────────────────────────────────────────────────────

Feature Branch:
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Push   │ →  │  Lint   │ →  │  Test   │ →  │  Build  │
│         │    │  Check  │    │         │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
                                                   │
                                                   ▼
                                           ┌─────────────┐
                                           │   Preview   │
                                           │  Deployment │
                                           └─────────────┘

Pull Request:
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│   PR    │ →  │   CI    │ →  │ Preview │ →  │ Review  │
│ Created │    │  Pass   │    │  Deploy │    │  & QA   │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
                                                   │
                                                   ▼
                                           ┌─────────────┐
                                           │   Merge to  │
                                           │    Main     │
                                           └─────────────┘

Production:
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Merge  │ →  │  Build  │ →  │ Deploy  │ →  │ Monitor │
│ to Main │    │         │    │  Prod   │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
```

---

## 4. 도메인 & DNS 설정 | Domain & DNS Setup

### 4.1 도메인 구성

```
DOMAIN CONFIGURATION
─────────────────────────────────────────────────────────────

Primary Domain: havruta.org

DNS Records (Cloudflare 또는 Vercel DNS):
┌────────────────────────────────────────────────────────────┐
│  Type  │  Name      │  Value                │  TTL        │
├────────────────────────────────────────────────────────────┤
│  A     │  @         │  76.76.21.21          │  Auto       │
│  CNAME │  www       │  cname.vercel-dns.com │  Auto       │
└────────────────────────────────────────────────────────────┘

Vercel Domain Settings:
├── havruta.org (Primary)
├── www.havruta.org → havruta.org (Redirect)
└── havruta.vercel.app (기본, 유지)
```

### 4.2 SSL/TLS 설정

```
SSL/TLS CONFIGURATION
─────────────────────────────────────────────────────────────

Certificate: 자동 발급 (Let's Encrypt via Vercel)
Renewal: 자동 갱신

Settings:
├── HTTPS 강제 (HTTP → HTTPS 리다이렉트)
├── HSTS 활성화
├── TLS 1.2+ 최소 버전
└── 최신 암호화 스위트
```

---

## 5. 모니터링 & 알림 | Monitoring & Alerts

### 5.1 Uptime 모니터링

```
UPTIME MONITORING
─────────────────────────────────────────────────────────────

도구: Vercel (기본) 또는 Better Uptime / UptimeRobot

모니터링 엔드포인트:
├── https://havruta.org (메인)
├── https://havruta.org/api/health (API 상태)
└── https://havruta.org/projects (주요 페이지)

체크 간격: 1분

알림 채널:
├── Email: team@havruta.org
├── Slack: #alerts 채널
└── SMS: 긴급 상황시 (선택)
```

### 5.2 에러 모니터링 (Sentry)

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // 환경 구분
  environment: process.env.VERCEL_ENV || 'development',

  // 릴리즈 버전
  release: process.env.VERCEL_GIT_COMMIT_SHA,

  // 성능 모니터링
  tracesSampleRate: 0.1,

  // 세션 리플레이 (선택)
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
});
```

### 5.3 알림 설정

```
ALERT CONFIGURATION
─────────────────────────────────────────────────────────────

Critical (즉시 알림):
├── 사이트 다운
├── 에러율 > 5%
├── API 응답 시간 > 5초
└── 보안 관련 이벤트

Warning (요약 알림):
├── 에러율 > 1%
├── LCP > 4초
├── CLS > 0.25
└── 빌드 실패

Info (일일 리포트):
├── 트래픽 요약
├── 성능 지표
└── 에러 요약
```

---

## 6. 롤백 전략 | Rollback Strategy

### 6.1 즉시 롤백

```
INSTANT ROLLBACK (Vercel)
─────────────────────────────────────────────────────────────

방법:
1. Vercel Dashboard → Deployments
2. 이전 성공 배포 선택
3. "..." 메뉴 → "Promote to Production"

또는 CLI:
$ vercel rollback [deployment-url]

소요 시간: < 30초

언제 사용:
├── 심각한 버그 발견
├── 사이트 전체 다운
└── 보안 취약점 발견
```

### 6.2 Git 기반 롤백

```bash
# Git Revert (권장 - 이력 보존)
git revert HEAD
git push origin main

# Git Reset (주의 - 이력 삭제)
git reset --hard HEAD~1
git push origin main --force

# 특정 커밋으로 롤백
git revert <commit-hash>
git push origin main
```

### 6.3 롤백 체크리스트

```
ROLLBACK CHECKLIST
─────────────────────────────────────────────────────────────

롤백 전:
□ 문제 범위 파악
□ 영향받는 사용자 수 확인
□ 롤백할 버전 결정
□ 팀에 알림

롤백 후:
□ 사이트 정상 동작 확인
□ 주요 기능 테스트
□ 모니터링 지표 확인
□ 사후 분석 (Post-mortem) 예약
```

---

## 7. 보안 설정 | Security Configuration

### 7.1 보안 헤더

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 7.2 환경 변수 보안

```
ENVIRONMENT VARIABLE SECURITY
─────────────────────────────────────────────────────────────

규칙:
├── 민감한 키는 Vercel Dashboard에서만 설정
├── .env.local은 .gitignore에 포함
├── NEXT_PUBLIC_ 접두사 사용 최소화
└── 정기적인 키 순환 (3-6개월)

접근 제한:
├── API 키: Vercel Functions에서만 사용
├── 외부 서비스: IP 화이트리스트 설정
└── 관리자 기능: 추가 인증
```

### 7.3 의존성 보안

```yaml
# .github/workflows/security.yml
name: Security Audit

on:
  schedule:
    - cron: '0 0 * * 1'  # 매주 월요일
  push:
    branches: [main]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run npm audit
        run: pnpm audit

      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

---

## 8. 배포 일정 | Deployment Schedule

### 8.1 출시 일정

```
RELEASE SCHEDULE
─────────────────────────────────────────────────────────────

Phase 1: 개발 환경 (Week 1-2)
├── 로컬 개발 환경 구축
├── Vercel 프로젝트 생성
├── CI/CD 파이프라인 설정
└── Preview 배포 테스트

Phase 2: 스테이징 (Week 3)
├── 콘텐츠 통합
├── QA 테스트
├── 성능 최적화
└── 보안 검토

Phase 3: 소프트 런칭 (Week 4)
├── 내부 공개 (팀, 파트너)
├── 피드백 수집
├── 최종 수정
└── 모니터링 설정

Phase 4: 공식 런칭 (Week 5)
├── 도메인 연결
├── SEO 인덱싱 요청
├── 공식 발표
└── 모니터링 강화
```

### 8.2 정기 배포 정책

```
REGULAR DEPLOYMENT POLICY
─────────────────────────────────────────────────────────────

일반 업데이트:
├── 배포 윈도우: 화-목, 오전 10시-오후 4시 (KST)
├── 금요일/주말 배포 피하기
└── 대규모 변경은 사전 공지

긴급 패치:
├── 즉시 배포 가능
├── 롤백 준비 필수
└── 사후 리뷰 진행

콘텐츠 업데이트:
├── ISR로 백그라운드 갱신
├── 즉시 적용 (코드 배포 불필요)
└── 캐시 무효화 필요시 수동 처리
```

---

## 9. 체크리스트 | Checklists

### 9.1 배포 전 체크리스트

```
PRE-DEPLOYMENT CHECKLIST
─────────────────────────────────────────────────────────────

코드 품질:
□ 모든 테스트 통과
□ 린트 에러 없음
□ 타입 에러 없음
□ 코드 리뷰 완료

기능:
□ 주요 사용자 플로우 테스트
□ 반응형 레이아웃 확인
□ 폼 제출 테스트
□ 에러 처리 확인

성능:
□ Lighthouse 점수 90+
□ 번들 크기 예산 이내
□ 이미지 최적화 확인
□ 로딩 시간 목표 달성

보안:
□ 환경 변수 확인
□ 보안 헤더 설정
□ HTTPS 강제
□ 민감 정보 노출 없음

SEO:
□ 메타 태그 확인
□ sitemap.xml 생성
□ robots.txt 확인
□ 구조화 데이터 검증
```

### 9.2 배포 후 체크리스트

```
POST-DEPLOYMENT CHECKLIST
─────────────────────────────────────────────────────────────

즉시 확인:
□ 사이트 접근 가능
□ 주요 페이지 로딩
□ 네비게이션 동작
□ 폼 제출 가능
□ 모바일 레이아웃

모니터링:
□ 에러율 정상
□ 응답 시간 정상
□ 트래픽 패턴 정상
□ Core Web Vitals 녹색

알림:
□ 팀에 배포 완료 알림
□ 릴리즈 노트 작성 (필요시)
□ 문서 업데이트 (필요시)
```

---

## 10. 비상 연락처 | Emergency Contacts

```
EMERGENCY CONTACTS
─────────────────────────────────────────────────────────────

기술 리드:
├── 이름: [담당자명]
├── 이메일: tech-lead@havruta.org
└── 전화: 010-XXXX-XXXX

Vercel 지원:
├── https://vercel.com/support
└── Pro 플랜 시 Priority Support

Cloudflare 지원:
├── https://support.cloudflare.com
└── Status: https://www.cloudflarestatus.com

GitHub Status:
└── https://www.githubstatus.com
```

---

## 관련 문서

- [01_Tech_Stack.md](./01_Tech_Stack.md) - 기술 스택
- [02_Performance_Requirements.md](./02_Performance_Requirements.md) - 성능 요구사항
- [00_Project_Overview.md](../00_Overview/00_Project_Overview.md) - 프로젝트 개요

---

*Havruta Project — powered by AreteVision*
