# 콘텐츠 계층 구조
# Content Hierarchy

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 웹사이트 콘텐츠의 계층 구조 및 우선순위 정의 |

---

## 1. 콘텐츠 계층 개요 | Content Hierarchy Overview

### 1.1 계층 구조 원칙

```
┌─────────────────────────────────────────────────────────────┐
│                 CONTENT HIERARCHY PRINCIPLES                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. 철학 우선 (Philosophy First)                            │
│     → 모든 콘텐츠는 Philosophy.md에서 시작                  │
│                                                              │
│  2. 점진적 깊이 (Progressive Depth)                         │
│     → 간단 → 상세 → 전문 순으로 심화                        │
│                                                              │
│  3. 행동 유도 (Action-Oriented)                             │
│     → 모든 콘텐츠는 다음 단계로 연결                        │
│                                                              │
│  4. 연결성 (Interconnection)                                │
│     → 콘텐츠 간 유기적 링크                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. 콘텐츠 피라미드 | Content Pyramid

### 2.1 피라미드 구조

```
                         △
                        /│\
                       / │ \
                      /  │  \
                     /   │   \
                    / CORE │    \
                   /   │   \
                  /────┼────\
                 /     │     \
                /   SUPPORT   \
               /───────┼───────\
              /        │        \
             /      DETAIL       \
            /──────────┼──────────\
           /           │           \
          /         EXTEND          \
         /─────────────┼─────────────\

Level 1: CORE (핵심)
- Philosophy
- Mission/Vision
- Brand Promise

Level 2: SUPPORT (지원)
- Project Introductions
- Key Features
- Value Propositions

Level 3: DETAIL (상세)
- How-to Guides
- Specifications
- Case Studies

Level 4: EXTEND (확장)
- Blog Articles
- Resources
- Updates
```

### 2.2 레벨별 정의

| 레벨 | 콘텐츠 유형 | 목적 | 위치 |
|------|-------------|------|------|
| **Core** | 철학, 미션/비전, 핵심 메시지 | 브랜드 정체성 확립 | Landing Hero, About |
| **Support** | 프로젝트 소개, 가치 제안 | 이해와 관심 유발 | Project Pages, Hub |
| **Detail** | 가이드, 명세, 사례 | 신뢰 구축, 의사결정 지원 | Sub-pages, Resources |
| **Extend** | 블로그, 업데이트, 자료 | 지속 참여, SEO | Resources, Blog |

---

## 3. 페이지별 콘텐츠 계층 | Page-by-Page Hierarchy

### 3.1 Landing Page

```
LANDING PAGE CONTENT HIERARCHY
─────────────────────────────────────────────────────────────

┌─ HERO (Core Level) ─────────────────────────────────────┐
│  • Main Headline: 핵심 메시지 (1문장)                   │
│  • Sub-headline: 가치 제안 (1문장)                      │
│  • Primary CTA                                          │
│  Priority: ★★★★★                                       │
└─────────────────────────────────────────────────────────┘
          │
          ▼
┌─ PROBLEM/CONTEXT (Support Level) ──────────────────────┐
│  • 시대적 맥락 (ASI 시대)                              │
│  • 대조 메시지 (세상 vs Havruta)                       │
│  Priority: ★★★★☆                                       │
└─────────────────────────────────────────────────────────┘
          │
          ▼
┌─ PHILOSOPHY PREVIEW (Core → Support) ──────────────────┐
│  • 부흥 루프 시각화                                     │
│  • 핵심 인용구                                          │
│  Priority: ★★★★☆                                       │
└─────────────────────────────────────────────────────────┘
          │
          ▼
┌─ PROJECTS OVERVIEW (Support Level) ────────────────────┐
│  • 6개 프로젝트 카드                                   │
│  • 각 프로젝트 1줄 소개                                │
│  Priority: ★★★★☆                                       │
└─────────────────────────────────────────────────────────┘
          │
          ▼
┌─ SOCIAL PROOF (Detail Level) ──────────────────────────┐
│  • 증언/추천                                            │
│  • 파트너 로고                                          │
│  Priority: ★★★☆☆                                       │
└─────────────────────────────────────────────────────────┘
          │
          ▼
┌─ NEWSLETTER CTA (Support Level) ───────────────────────┐
│  • 가치 제안                                            │
│  • 이메일 폼                                            │
│  Priority: ★★★☆☆                                       │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Project Page (공통 구조)

```
PROJECT PAGE CONTENT HIERARCHY
─────────────────────────────────────────────────────────────

Level 1 (Core):
├── Project Name + Tagline
└── Core Value Proposition

Level 2 (Support):
├── Problem Statement
├── Solution Overview
└── Key Features (3-6개)

Level 3 (Detail):
├── How It Works
├── Curriculum/Process
├── Specifications
└── Testimonials

Level 4 (Extend):
├── Related Resources
├── FAQ
└── Related Projects
```

---

## 4. 콘텐츠 유형별 우선순위 | Content Type Priority

### 4.1 우선순위 매트릭스

```
                HIGH IMPACT
                    │
        ┌───────────┼───────────┐
        │           │           │
        │  INVEST   │  OPTIMIZE │
        │           │           │
        │ • Core    │ • Support │
        │   Message │   Content │
        │ • Hero    │ • Project │
        │   Copy    │   Intros  │
LOW     │           │           │     HIGH
EFFORT ─┼───────────┼───────────┼── EFFORT
        │           │           │
        │  QUICK    │  CONSIDER │
        │  WINS     │           │
        │           │           │
        │ • CTAs    │ • Blog    │
        │ • Labels  │   Posts   │
        │           │ • Guides  │
        │           │           │
        └───────────┼───────────┘
                    │
                LOW IMPACT
```

### 4.2 콘텐츠 유형별 가이드

| 유형 | 우선순위 | 길이 | 업데이트 빈도 |
|------|----------|------|---------------|
| Hero Headlines | ★★★★★ | 10-15 단어 | 분기별 |
| Value Propositions | ★★★★★ | 1-2 문장 | 분기별 |
| Project Introductions | ★★★★☆ | 100-200 단어 | 반기별 |
| Feature Descriptions | ★★★★☆ | 50-100 단어 | 필요시 |
| How-to Guides | ★★★☆☆ | 500-1000 단어 | 필요시 |
| Blog Articles | ★★★☆☆ | 800-1500 단어 | 주간/격주 |
| FAQ | ★★☆☆☆ | 50-100 단어/항목 | 필요시 |
| Legal/Policy | ★☆☆☆☆ | 필요만큼 | 연간 |

---

## 5. 정보 아키텍처 | Information Architecture

### 5.1 콘텐츠 클러스터

```
CONTENT CLUSTERS
─────────────────────────────────────────────────────────────

Cluster 1: Philosophy & Brand
├── Philosophy.md (Pillar)
├── Brand Philosophy
├── Mission/Vision
├── Core Values
└── Brand Story

Cluster 2: Projects Ecosystem
├── Projects Hub (Pillar)
├── ChurchThrive
├── COMPASS
├── MATCH_Family_Verse
├── BlueHill21Leader
└── GBPF_WRAM

Cluster 3: Resources & Education
├── Resources Hub (Pillar)
├── Guides
├── Templates
├── Articles
└── Downloads

Cluster 4: Community & Support
├── Contact
├── FAQ
├── Newsletter
└── Social
```

### 5.2 내부 링크 전략

```
INTERNAL LINKING STRATEGY
─────────────────────────────────────────────────────────────

Hub-and-Spoke Model:

                  Landing
                     │
         ┌───────────┼───────────┐
         │           │           │
       About     Projects    Resources
         │           │           │
    Philosophy   Hub Page    Hub Page
         │      /    │    \      │
         └─── Individual ───────┘
              Project Pages

Rules:
1. 모든 하위 페이지 → Hub 페이지 링크
2. Hub 페이지 → 모든 하위 페이지 링크
3. 관련 프로젝트 간 상호 링크
4. 콘텐츠 내 자연스러운 컨텍스트 링크
```

---

## 6. 콘텐츠 깊이 전략 | Content Depth Strategy

### 6.1 Progressive Disclosure

```
PROGRESSIVE DISCLOSURE MODEL
─────────────────────────────────────────────────────────────

Layer 1: 스캔 가능 (Scannable)
────────────────────────────────
• Headlines
• Sub-headlines
• Bullet points
• Icons/Images
→ 목적: 빠른 이해, 관심 유발

Layer 2: 읽기 가능 (Readable)
────────────────────────────────
• Short paragraphs
• Feature descriptions
• Value propositions
→ 목적: 이해 심화, 관심 확인

Layer 3: 연구 가능 (Researchable)
────────────────────────────────
• Detailed guides
• Specifications
• Case studies
→ 목적: 의사결정 지원, 신뢰 구축

Layer 4: 참조 가능 (Referenceable)
────────────────────────────────
• Documentation
• FAQ
• Terms/Policies
→ 목적: 지속 참조, 문제 해결
```

### 6.2 페이지별 깊이 전략

| 페이지 | Layer 1 | Layer 2 | Layer 3 | Layer 4 |
|--------|---------|---------|---------|---------|
| Landing | ★★★★★ | ★★★☆☆ | ★☆☆☆☆ | ☆☆☆☆☆ |
| About | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★☆☆☆☆ |
| Projects Hub | ★★★★★ | ★★★☆☆ | ★☆☆☆☆ | ☆☆☆☆☆ |
| Project Detail | ★★★★☆ | ★★★★☆ | ★★★★☆ | ★★☆☆☆ |
| Resources | ★★★☆☆ | ★★★☆☆ | ★★★★★ | ★★★☆☆ |
| Contact | ★★★☆☆ | ★★☆☆☆ | ★☆☆☆☆ | ★★★☆☆ |

---

## 7. 콘텐츠 거버넌스 | Content Governance

### 7.1 콘텐츠 소유권

| 콘텐츠 영역 | 소유자 | 검토자 |
|-------------|--------|--------|
| Core Messages | Brand Lead | 전체 팀 |
| Project Content | Project Lead | Brand Lead |
| Resources | Content Team | Project Leads |
| Technical Docs | Dev Team | Product Lead |

### 7.2 업데이트 주기

```
UPDATE FREQUENCY
─────────────────────────────────────────────────────────────

Weekly:
• Blog/Article 포스팅 (목표)
• Resources 추가

Monthly:
• Project 페이지 검토
• FAQ 업데이트
• Analytics 기반 최적화

Quarterly:
• Core Messages 검토
• Landing Page 최적화
• A/B 테스트 결과 반영

Annually:
• 전체 콘텐츠 감사
• Brand Guidelines 갱신
• Strategy 재검토
```

---

## 8. 품질 체크리스트 | Quality Checklist

### 8.1 콘텐츠 게시 전 확인

```
□ Philosophy.md의 핵심 메시지와 일치하는가?
□ 적절한 계층(Core/Support/Detail/Extend)에 배치되었는가?
□ 다음 단계(CTA)가 명확한가?
□ 관련 콘텐츠와 상호 링크되어 있는가?
□ Voice & Tone 가이드라인을 따르는가?
□ SEO 요소가 포함되어 있는가?
□ 모바일에서 읽기 좋은가?
□ 다국어 버전이 필요한가?
```

---

## 관련 문서

- [02_SEO_Keywords.md](./02_SEO_Keywords.md) - SEO 키워드
- [03_CTA_Strategy.md](./03_CTA_Strategy.md) - CTA 전략
- [04_Storytelling_Framework.md](./04_Storytelling_Framework.md) - 스토리텔링

---

*Havruta Project — powered by AreteVision*
