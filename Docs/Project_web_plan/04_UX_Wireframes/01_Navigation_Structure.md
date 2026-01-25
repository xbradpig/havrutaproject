# 네비게이션 구조
# Navigation Structure

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 웹사이트 네비게이션 구조 및 UX 패턴 정의 |

---

## 1. 네비게이션 아키텍처 | Navigation Architecture

### 1.1 전체 구조 개요

```
NAVIGATION ARCHITECTURE
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────┐
│                    GLOBAL HEADER                         │
│  ┌──────┐  ┌────────────────────────┐  ┌─────────────┐ │
│  │ Logo │  │    Primary Navigation   │  │ CTA Button  │ │
│  └──────┘  └────────────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
    │  About  │     │ Projects │     │Resources│
    │ (단일)  │     │ (메가)   │     │ (메가)  │
    └─────────┘     └─────────┘     └─────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
         Sub-nav     Sub-nav     Sub-nav
```

### 1.2 네비게이션 유형

| 유형 | 설명 | 적용 위치 |
|------|------|-----------|
| **Global Nav** | 모든 페이지 상단 고정 | Header |
| **Mega Menu** | 확장형 드롭다운 | Projects, Resources |
| **Breadcrumb** | 현재 위치 표시 | 서브 페이지 |
| **Footer Nav** | 보조 네비게이션 | Footer |
| **Mobile Nav** | 햄버거 메뉴 | 모바일 |

---

## 2. 헤더 네비게이션 | Header Navigation

### 2.1 Desktop Header (≥1024px)

```
DESKTOP HEADER LAYOUT
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│ 16px padding                                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  [Logo]        [About] [Projects ▼] [Resources ▼]      │ │
│ │  Havruta                                                │ │
│ │  Project       ←── Primary Nav ──→     [시작하기]      │ │
│ │                                          ↑              │ │
│ │                                      CTA Button         │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Height: 72px
Background: White (scroll 시 shadow 추가)
Position: Fixed top
Z-index: 1000
```

### 2.2 Primary Navigation Items

```
PRIMARY NAVIGATION
─────────────────────────────────────────────────────────────

1. About (단일 링크)
   └── /about

2. Projects (메가 메뉴)
   ├── 프로젝트 허브 (Projects Hub)
   │   └── /projects
   └── 개별 프로젝트
       ├── ChurchThrive       → /projects/churchthrive
       ├── COMPASS            → /projects/compass
       ├── MATCH Family Verse → /projects/match-family-verse
       ├── BlueHill21Leader   → /projects/bluehill21leader
       └── GBPF WRAM          → /projects/gbpf-wram

3. Resources (메가 메뉴)
   ├── Resources Hub         → /resources
   ├── Guides               → /resources/guides
   ├── Downloads            → /resources/downloads
   └── Blog                 → /resources/blog

4. CTA Button
   └── "시작하기" → /contact 또는 가장 관련 있는 액션
```

### 2.3 Mega Menu 상세

```
PROJECTS MEGA MENU
─────────────────────────────────────────────────────────────

Trigger: Hover (Desktop) / Click (Tablet)
Animation: Fade + Slide down (200ms ease-out)

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐  ┌─────────────────────────────────┐  │
│  │                 │  │                                 │  │
│  │  프로젝트 허브  │  │  ┌─────┐ ┌─────┐ ┌─────┐      │  │
│  │                 │  │  │CT   │ │CMP  │ │MFV  │      │  │
│  │  전체 프로젝트  │  │  │     │ │     │ │     │      │  │
│  │  생태계를       │  │  └─────┘ └─────┘ └─────┘      │  │
│  │  둘러보세요     │  │                                 │  │
│  │                 │  │  ┌─────┐ ┌─────┐               │  │
│  │  [허브 보기 →]  │  │  │BH21 │ │WRAM │               │  │
│  │                 │  │  │     │ │     │               │  │
│  └─────────────────┘  │  └─────┘ └─────┘               │  │
│                       │                                 │  │
│  Featured Section     │  Project Cards (5개)            │  │
│                       └─────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Width: 100% viewport (max 1200px centered)
Background: White
Shadow: 0 4px 20px rgba(0,0,0,0.1)
```

### 2.4 Scroll Behavior

```javascript
// Header Scroll Behavior
const headerBehavior = {
  // 스크롤 시작 시
  onScroll: {
    position: 'fixed',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },

  // 빠른 스크롤 다운 시 (선택적)
  onScrollDown: {
    transform: 'translateY(-100%)',  // 숨김
  },

  // 스크롤 업 시
  onScrollUp: {
    transform: 'translateY(0)',      // 표시
  },

  // 최상단
  atTop: {
    boxShadow: 'none',
    background: 'transparent'        // 히어로 섹션에서
  }
};
```

---

## 3. 모바일 네비게이션 | Mobile Navigation

### 3.1 Mobile Header (<1024px)

```
MOBILE HEADER LAYOUT
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo]                                    [☰ Menu]        │
│  Havruta Project                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Height: 64px (모바일) / 56px (작은 모바일)
Hamburger Icon: 24x24px
Touch Target: 44x44px minimum
```

### 3.2 Mobile Menu (Full Screen Overlay)

```
MOBILE MENU EXPANDED
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo]                                    [✕ Close]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  About                                              →       │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  Projects                                           +       │
│  ─────────────────────────────────────────────────────     │
│    └─ ChurchThrive                                         │
│    └─ COMPASS                                              │
│    └─ MATCH Family Verse                                   │
│    └─ BlueHill21Leader                                     │
│    └─ GBPF WRAM                                            │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  Resources                                          +       │
│  ─────────────────────────────────────────────────────     │
│    └─ Guides                                               │
│    └─ Downloads                                            │
│    └─ Blog                                                 │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              시작하기 (Primary CTA)                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│  Language: 한국어 ▼                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Animation: Slide from right (300ms ease-out)
Background: White
Overlay: rgba(0,0,0,0.5)
Close: 외부 클릭, X 버튼, ESC 키
```

### 3.3 Accordion Sub-navigation

```
ACCORDION BEHAVIOR
─────────────────────────────────────────────────────────────

초기 상태:
┌─────────────────────────────────────────────────────────────┐
│  Projects                                           [+]     │
└─────────────────────────────────────────────────────────────┘

클릭 후 (확장):
┌─────────────────────────────────────────────────────────────┐
│  Projects                                           [-]     │
├─────────────────────────────────────────────────────────────┤
│    ChurchThrive                                     →       │
│    COMPASS                                          →       │
│    MATCH Family Verse                               →       │
│    BlueHill21Leader                                 →       │
│    GBPF WRAM                                        →       │
└─────────────────────────────────────────────────────────────┘

Animation: Height expand (200ms ease-out)
Icon rotation: + to - (180° rotation)
```

---

## 4. 브레드크럼 | Breadcrumb Navigation

### 4.1 브레드크럼 구조

```
BREADCRUMB STRUCTURE
─────────────────────────────────────────────────────────────

위치: 페이지 상단, 헤더 아래
표시 조건: depth ≥ 2 인 모든 페이지

예시:
홈 > Projects > ChurchThrive

┌─────────────────────────────────────────────────────────────┐
│  Home  /  Projects  /  ChurchThrive                         │
│   ↑         ↑             ↑                                 │
│  링크     링크         현재 (비링크)                        │
└─────────────────────────────────────────────────────────────┘

스타일:
- 링크: Indigo-600, underline on hover
- 구분자: "/" 또는 ">" (Gray-400)
- 현재: Gray-600, no link
- Font: 14px (0.875rem)
```

### 4.2 페이지별 브레드크럼

| 페이지 | 브레드크럼 |
|--------|-----------|
| ChurchThrive | 홈 > Projects > ChurchThrive |
| COMPASS | 홈 > Projects > COMPASS |
| Guides | 홈 > Resources > Guides |
| Contact | 홈 > Contact |
| Blog Post | 홈 > Resources > Blog > [제목] |

---

## 5. 푸터 네비게이션 | Footer Navigation

### 5.1 푸터 구조

```
FOOTER NAVIGATION LAYOUT
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │             │  │          │  │          │  │         │ │
│  │ BRAND       │  │ PROJECTS │  │ RESOURCES│  │ CONNECT │ │
│  │             │  │          │  │          │  │         │ │
│  │ Logo        │  │ Church   │  │ Guides   │  │ Contact │ │
│  │             │  │ Thrive   │  │          │  │         │ │
│  │ Tagline     │  │ COMPASS  │  │ Downloads│  │ Newsletter│
│  │             │  │ MATCH    │  │          │  │         │ │
│  │ Social      │  │ BlueHill │  │ Blog     │  │ About   │ │
│  │ Icons       │  │ WRAM     │  │          │  │         │ │
│  │             │  │          │  │          │  │         │ │
│  └─────────────┘  └──────────┘  └──────────┘  └─────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  © 2025 Havruta Project     Privacy  Terms     Language ▼  │
│  powered by AreteVision                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 푸터 링크 구조

```
FOOTER LINK GROUPS
─────────────────────────────────────────────────────────────

Column 1: Brand
├── Logo (Home link)
├── Tagline: "말씀과 공동체로 더 깊은 사람을 세운다"
└── Social Icons
    ├── YouTube
    ├── Instagram
    └── Facebook

Column 2: Projects
├── ChurchThrive
├── COMPASS
├── MATCH Family Verse
├── BlueHill21Leader
└── GBPF WRAM

Column 3: Resources
├── Guides
├── Downloads
├── Blog
└── FAQ

Column 4: Connect
├── Contact
├── Newsletter
├── About
└── Careers (향후)

Bottom Bar:
├── Copyright
├── Privacy Policy
├── Terms of Service
└── Language Selector
```

---

## 6. 특수 네비게이션 패턴 | Special Navigation Patterns

### 6.1 In-Page Navigation (Single Page)

```
IN-PAGE NAV (About, Project Detail 등)
─────────────────────────────────────────────────────────────

Desktop: 사이드바 고정 네비게이션
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────┐                                             │
│  │           │   ┌─────────────────────────────────────┐   │
│  │ • 철학    │   │                                     │   │
│  │   비전    │   │          Main Content               │   │
│  │   가치    │   │                                     │   │
│  │   팀      │   │                                     │   │
│  │           │   │                                     │   │
│  │ Sticky    │   └─────────────────────────────────────┘   │
│  │           │                                             │
│  └───────────┘                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Mobile: 상단 탭 또는 드롭다운
┌─────────────────────────────────────────────────────────────┐
│  [철학] [비전] [가치] [팀]  ← 가로 스크롤 탭                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Main Content                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Project Switcher

```
PROJECT SWITCHER (프로젝트 페이지 내)
─────────────────────────────────────────────────────────────

위치: 프로젝트 상세 페이지 하단 또는 사이드바

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  다른 프로젝트 둘러보기                                     │
│  ───────────────────────────────────────────────────────   │
│                                                             │
│  ← COMPASS            현재: ChurchThrive      MATCH →      │
│                                                             │
│  또는:                                                      │
│                                                             │
│  [CT] [CMP] [MFV] [BH21] [WRAM]                            │
│         ↑                                                   │
│     현재 활성                                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Back to Top

```
BACK TO TOP BUTTON
─────────────────────────────────────────────────────────────

표시 조건: 스크롤 > 500px
위치: 우하단 고정
크기: 48x48px
애니메이션: Fade in/out

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                                          ┌─────┐           │
│                                          │  ↑  │           │
│                                          │     │           │
│                                          └─────┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

스타일:
- Background: Indigo-600
- Icon: White arrow up
- Hover: Indigo-700, scale(1.05)
- Shadow: 0 4px 12px rgba(0,0,0,0.15)
```

---

## 7. 네비게이션 상태 | Navigation States

### 7.1 상태별 스타일

```
NAVIGATION STATES
─────────────────────────────────────────────────────────────

Default:
├── Color: Gray-700
├── Font-weight: 500
└── Background: transparent

Hover:
├── Color: Indigo-600
├── Background: Indigo-50 (메가 메뉴 아이템)
└── Underline: 2px solid Indigo-600

Active/Current:
├── Color: Indigo-600
├── Font-weight: 600
└── Indicator: 하단 2px 바 또는 도트

Focus:
├── Outline: 2px solid Indigo-500
├── Outline-offset: 2px
└── Background: Indigo-50

Disabled:
├── Color: Gray-400
├── Cursor: not-allowed
└── Opacity: 0.6
```

### 7.2 현재 페이지 표시

```css
/* 현재 페이지 네비게이션 아이템 */
.nav-item.active {
  color: var(--indigo-600);
  font-weight: 600;
  position: relative;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--indigo-600);
  border-radius: 1px;
}
```

---

## 8. 접근성 | Accessibility

### 8.1 키보드 네비게이션

```
KEYBOARD NAVIGATION
─────────────────────────────────────────────────────────────

Tab: 다음 포커스 가능 요소로 이동
Shift + Tab: 이전 요소로 이동
Enter/Space: 링크 활성화 또는 메뉴 토글
Escape: 열린 메뉴 닫기
Arrow Keys: 메가 메뉴/드롭다운 내 이동

┌─────────────────────────────────────────────────────────────┐
│  [Logo]    [About]  [Projects ▼]  [Resources ▼]  [CTA]     │
│             Tab→      Tab→          Tab→           Tab→     │
│                         │                                   │
│                    Enter/Space                              │
│                         ↓                                   │
│            ┌────────────────────────┐                       │
│            │  ↑↓ Arrow Keys         │                       │
│            │  to navigate items     │                       │
│            │  Escape to close       │                       │
│            └────────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 ARIA 속성

```html
<!-- 메인 네비게이션 -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/about" role="menuitem">About</a>
    </li>
    <li role="none">
      <button
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="projects-menu"
      >
        Projects
      </button>
      <ul id="projects-menu" role="menu" aria-hidden="true">
        <!-- 서브 메뉴 아이템 -->
      </ul>
    </li>
  </ul>
</nav>

<!-- 모바일 메뉴 버튼 -->
<button
  aria-label="Open menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  <span class="hamburger-icon"></span>
</button>

<!-- 브레드크럼 -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li aria-current="page">ChurchThrive</li>
  </ol>
</nav>
```

### 8.3 Skip Links

```html
<!-- 페이지 최상단 (body 바로 뒤) -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<a href="#footer" class="skip-link">
  Skip to footer
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--indigo-600);
  color: white;
  padding: 8px 16px;
  z-index: 9999;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}
</style>
```

---

## 9. 반응형 브레이크포인트 | Responsive Breakpoints

### 9.1 네비게이션 브레이크포인트

```
NAVIGATION BREAKPOINTS
─────────────────────────────────────────────────────────────

Mobile: 0 - 767px
├── 햄버거 메뉴
├── 전체 화면 오버레이
└── 아코디언 서브 메뉴

Tablet: 768px - 1023px
├── 햄버거 메뉴 (또는 축약 메뉴)
├── 터치 친화적 메가 메뉴
└── 큰 터치 타겟

Desktop: 1024px+
├── 전체 수평 메뉴
├── 호버 메가 메뉴
└── 고정 헤더
```

### 9.2 컴포넌트별 변화

| 컴포넌트 | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Header Height | 56-64px | 64px | 72px |
| Menu Type | Hamburger | Hamburger | Horizontal |
| Mega Menu | Accordion | Touch Mega | Hover Mega |
| Logo Size | Small | Medium | Full |
| CTA | In Menu | In Menu | Header |
| Breadcrumb | Hidden/Compact | Visible | Visible |

---

## 10. 구현 코드 예시 | Implementation Examples

### 10.1 React 컴포넌트 구조

```jsx
// components/Navigation/index.tsx
export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="nav-header">
      <Logo />

      {/* Desktop Navigation */}
      <nav className="nav-desktop" aria-label="Main navigation">
        <NavItem href="/about">About</NavItem>
        <NavDropdown
          label="Projects"
          items={projectItems}
          isOpen={activeDropdown === 'projects'}
          onToggle={() => setActiveDropdown('projects')}
        />
        <NavDropdown
          label="Resources"
          items={resourceItems}
          isOpen={activeDropdown === 'resources'}
          onToggle={() => setActiveDropdown('resources')}
        />
      </nav>

      <CTAButton href="/contact">시작하기</CTAButton>

      {/* Mobile Menu Button */}
      <MobileMenuButton
        isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
```

### 10.2 CSS 구조

```css
/* 기본 헤더 스타일 */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  transition: box-shadow 0.3s ease;
}

.nav-header.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 반응형 */
@media (max-width: 1023px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }
}
```

---

## 관련 문서

- [02_Mobile_First_Design.md](./02_Mobile_First_Design.md) - 모바일 퍼스트 디자인
- [03_Component_Library.md](./03_Component_Library.md) - 컴포넌트 라이브러리
- [01_Site_Map.md](../00_Overview/01_Site_Map.md) - 사이트맵

---

*Havruta Project — powered by AreteVision*
