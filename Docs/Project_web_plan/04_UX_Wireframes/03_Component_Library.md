# UI 컴포넌트 라이브러리 명세
# UI Component Library Specification

---

## 문서 정보 | Document Info

| 항목 | 내용 |
|------|------|
| 버전 | v1.0 |
| 작성일 | 2025-01-25 |
| 목적 | 재사용 가능한 UI 컴포넌트 정의 및 명세 |

---

## 1. 컴포넌트 라이브러리 개요 | Component Library Overview

### 1.1 디자인 시스템 원칙

```
DESIGN SYSTEM PRINCIPLES
─────────────────────────────────────────────────────────────

1. CONSISTENCY (일관성)
   → 동일한 컴포넌트는 어디서든 동일하게 동작

2. COMPOSABILITY (조합성)
   → 작은 컴포넌트를 조합해 복잡한 UI 구성

3. ACCESSIBILITY (접근성)
   → 모든 컴포넌트는 WCAG 2.1 AA 준수

4. RESPONSIVENESS (반응성)
   → 모바일 퍼스트, 모든 화면 크기 지원

5. THEMEABLE (테마 적용)
   → CSS 변수 기반 커스터마이징 가능
```

### 1.2 컴포넌트 분류

```
COMPONENT CATEGORIES
─────────────────────────────────────────────────────────────

1. PRIMITIVES (기본 요소)
   ├── Button
   ├── Input
   ├── Typography
   ├── Icon
   └── Image

2. PATTERNS (패턴)
   ├── Card
   ├── Form
   ├── Modal
   └── Dropdown

3. LAYOUTS (레이아웃)
   ├── Container
   ├── Grid
   ├── Stack
   └── Section

4. NAVIGATION (네비게이션)
   ├── Header
   ├── Footer
   ├── Breadcrumb
   └── Menu

5. FEEDBACK (피드백)
   ├── Toast
   ├── Alert
   ├── Loading
   └── Progress
```

---

## 2. 기본 요소 | Primitives

### 2.1 Button

```
BUTTON COMPONENT
─────────────────────────────────────────────────────────────

Variants:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌──────────────┐  Primary (Filled)                       │
│  │  시작하기     │  bg: Indigo-600, text: White           │
│  └──────────────┘  hover: Indigo-700                      │
│                                                            │
│  ┌──────────────┐  Secondary (Outline)                    │
│  │  더 알아보기  │  border: Indigo-600, text: Indigo-600  │
│  └──────────────┘  hover: bg Indigo-50                    │
│                                                            │
│  ┌──────────────┐  Ghost (Text)                           │
│  │  취소        │  text: Gray-600                         │
│  └──────────────┘  hover: bg Gray-100                     │
│                                                            │
│  ┌──────────────┐  Destructive                            │
│  │  삭제        │  bg: Red-600, text: White               │
│  └──────────────┘  hover: Red-700                         │
│                                                            │
└────────────────────────────────────────────────────────────┘

Sizes:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [sm]    height: 32px, padding: 8px 12px, font: 14px      │
│                                                            │
│  [md]    height: 40px, padding: 10px 16px, font: 16px     │
│                                                            │
│  [lg]    height: 48px, padding: 12px 24px, font: 18px     │
│                                                            │
│  [xl]    height: 56px, padding: 16px 32px, font: 18px     │
│                                                            │
└────────────────────────────────────────────────────────────┘

States:
├── default
├── hover
├── focus (ring: 2px Indigo-500)
├── active (scale: 0.98)
├── disabled (opacity: 0.5, cursor: not-allowed)
└── loading (spinner + text)
```

```jsx
// Button Component Interface
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

// Usage Example
<Button variant="primary" size="lg" rightIcon={<ArrowRight />}>
  시작하기
</Button>
```

### 2.2 Input

```
INPUT COMPONENT
─────────────────────────────────────────────────────────────

Types:
├── text
├── email
├── password
├── number
├── tel
├── search
└── textarea

Anatomy:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Label *                                                   │
│  ┌────────────────────────────────────────────────────┐   │
│  │ [Icon]  Placeholder text...              [Action]  │   │
│  └────────────────────────────────────────────────────┘   │
│  Helper text or error message                              │
│                                                            │
└────────────────────────────────────────────────────────────┘

States:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Default:   border: Gray-300                              │
│  Hover:     border: Gray-400                              │
│  Focus:     border: Indigo-500, ring: 2px Indigo-100     │
│  Error:     border: Red-500, ring: 2px Red-100           │
│  Disabled:  bg: Gray-100, cursor: not-allowed            │
│  Success:   border: Green-500                             │
│                                                            │
└────────────────────────────────────────────────────────────┘

Sizes:
├── sm: height 36px, font 14px
├── md: height 44px, font 16px (default)
└── lg: height 52px, font 18px
```

```jsx
// Input Component Interface
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search';
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  value: string;
  onChange: (value: string) => void;
}

// Usage Example
<Input
  label="이메일"
  type="email"
  placeholder="example@havruta.org"
  helperText="뉴스레터를 받을 이메일 주소"
  required
/>
```

### 2.3 Typography

```
TYPOGRAPHY COMPONENTS
─────────────────────────────────────────────────────────────

Heading Components:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  <H1>      48px / 3rem     Playfair Display    weight:700 │
│  <H2>      36px / 2.25rem  Playfair Display    weight:600 │
│  <H3>      28px / 1.75rem  Noto Serif KR       weight:600 │
│  <H4>      22px / 1.375rem Noto Serif KR       weight:600 │
│  <H5>      18px / 1.125rem Inter/Pretendard   weight:600 │
│  <H6>      16px / 1rem     Inter/Pretendard   weight:600 │
│                                                            │
└────────────────────────────────────────────────────────────┘

Text Components:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  <Text>         16-18px   body text                       │
│  <Text.Lead>    20px      larger intro text               │
│  <Text.Small>   14px      smaller text                    │
│  <Text.Muted>   Gray-500  subdued text                    │
│  <Text.Bold>    weight: 600                               │
│                                                            │
└────────────────────────────────────────────────────────────┘

Special:
├── <Quote>      블록 인용구 (Scripture 스타일)
├── <Caption>    이미지/미디어 캡션
└── <Code>       코드 블록
```

```jsx
// Typography Interface
interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'error';
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

// Usage Examples
<Heading level={1}>말씀과 공동체로 더 깊은 사람을 세운다</Heading>
<Text lead>하브루타의 핵심 철학을 소개합니다.</Text>
<Quote source="요한복음 15:5">나는 포도나무요 너희는 가지라</Quote>
```

### 2.4 Icon

```
ICON SYSTEM
─────────────────────────────────────────────────────────────

Icon Library: Lucide Icons (추천) 또는 Heroicons

Sizes:
├── xs: 12px
├── sm: 16px
├── md: 20px (default)
├── lg: 24px
└── xl: 32px

Colors:
├── currentColor (inherit from parent)
├── primary (Indigo-600)
├── muted (Gray-400)
└── white

Custom Icons:
├── Logo
├── Revival Loop Diagram
├── Project Icons (6개)
└── F.A.M.I.L.Y Icons
```

```jsx
// Icon Component Interface
interface IconProps {
  name: string;  // Lucide icon name
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'current' | 'primary' | 'muted' | 'white';
  className?: string;
}

// Usage
<Icon name="arrow-right" size="md" color="primary" />
<Icon name="book-open" size="lg" />
```

---

## 3. 패턴 컴포넌트 | Pattern Components

### 3.1 Card

```
CARD COMPONENT
─────────────────────────────────────────────────────────────

Variants:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Default Card:              Elevated Card:                 │
│  ┌─────────────────┐       ┌─────────────────┐            │
│  │  [Image]        │       │  [Image]        │ shadow-lg  │
│  │  ─────────────  │       │  ─────────────  │            │
│  │  Title          │       │  Title          │            │
│  │  Description    │       │  Description    │            │
│  │  [Action]       │       │  [Action]       │            │
│  └─────────────────┘       └─────────────────┘            │
│                                                            │
│  Outline Card:              Interactive Card:              │
│  ┌─────────────────┐       ┌─────────────────┐            │
│  │  [Image]        │ 1px   │  [Image]        │ hover:     │
│  │  ─────────────  │ border│  ─────────────  │ lift +     │
│  │  Title          │       │  Title          │ shadow     │
│  │  Description    │       │  Description    │            │
│  │  [Action]       │       │  [Action →]     │            │
│  └─────────────────┘       └─────────────────┘            │
│                                                            │
└────────────────────────────────────────────────────────────┘

Project Card (특수):
┌────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                     │  │
│  │              [Project Icon]                         │  │
│  │                                                     │  │
│  │              ChurchThrive                           │  │
│  │              ───────────────                        │  │
│  │              "교회 부흥의 새로운 패러다임"          │  │
│  │                                                     │  │
│  │              [자세히 보기 →]                        │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  Background: 프로젝트별 그라데이션 또는 컬러               │
│  Hover: Scale 1.02, Shadow increase                       │
└────────────────────────────────────────────────────────────┘
```

```jsx
// Card Component Interface
interface CardProps {
  variant?: 'default' | 'elevated' | 'outline' | 'interactive';
  image?: {
    src: string;
    alt: string;
    aspectRatio?: '16:9' | '4:3' | '1:1';
  };
  title: string;
  description?: string;
  footer?: ReactNode;
  onClick?: () => void;
  href?: string;
}

// Project Card Interface
interface ProjectCardProps {
  project: 'churchthrive' | 'compass' | 'match' | 'bluehill' | 'wram';
  tagline: string;
  href: string;
}
```

### 3.2 Modal

```
MODAL COMPONENT
─────────────────────────────────────────────────────────────

Structure:
┌────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░┌────────────────────────────────────────┐░░░░░░░ │
│ ░░░░░░░│  Modal Title                      [✕]  │░░░░░░░ │
│ ░░░░░░░├────────────────────────────────────────┤░░░░░░░ │
│ ░░░░░░░│                                        │░░░░░░░ │
│ ░░░░░░░│        Modal Content                   │░░░░░░░ │
│ ░░░░░░░│                                        │░░░░░░░ │
│ ░░░░░░░│                                        │░░░░░░░ │
│ ░░░░░░░├────────────────────────────────────────┤░░░░░░░ │
│ ░░░░░░░│              [Cancel] [Confirm]        │░░░░░░░ │
│ ░░░░░░░└────────────────────────────────────────┘░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────────────────────────┘
  ↑ Overlay (black 50% opacity)

Sizes:
├── sm: max-width 400px
├── md: max-width 500px (default)
├── lg: max-width 640px
└── full: max-width 90vw

Animation:
├── Enter: Fade in + Scale from 0.95
├── Exit: Fade out + Scale to 0.95
└── Duration: 200ms ease-out

Accessibility:
├── Focus trap
├── ESC to close
├── Click outside to close (optional)
└── aria-modal="true"
```

```jsx
// Modal Component Interface
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
  footer?: ReactNode;
  children: ReactNode;
}

// Usage
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="뉴스레터 구독"
  footer={
    <>
      <Button variant="ghost" onClick={onClose}>취소</Button>
      <Button variant="primary" onClick={onConfirm}>구독하기</Button>
    </>
  }
>
  <p>Havruta Project의 소식을 받아보세요.</p>
  <Input label="이메일" type="email" />
</Modal>
```

### 3.3 Form

```
FORM COMPONENT
─────────────────────────────────────────────────────────────

Form Layout:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  <Form>                                                    │
│    <FormField>                                             │
│      <FormLabel>이름 *</FormLabel>                         │
│      <FormControl>                                         │
│        <Input />                                           │
│      </FormControl>                                        │
│      <FormHelperText>실명을 입력해주세요</FormHelperText>  │
│      <FormErrorMessage>필수 항목입니다</FormErrorMessage>  │
│    </FormField>                                            │
│                                                            │
│    <FormField>                                             │
│      <FormLabel>이메일 *</FormLabel>                       │
│      <Input type="email" />                                │
│    </FormField>                                            │
│                                                            │
│    <FormActions>                                           │
│      <Button type="submit">제출</Button>                   │
│    </FormActions>                                          │
│  </Form>                                                   │
│                                                            │
└────────────────────────────────────────────────────────────┘

Form Elements:
├── Input (text, email, password, etc.)
├── Textarea
├── Select
├── Checkbox
├── Radio
├── Switch
└── File Upload
```

### 3.4 Dropdown / Select

```
DROPDOWN COMPONENT
─────────────────────────────────────────────────────────────

Closed State:
┌────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Select an option...                            [▼] │  │
│  └─────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘

Open State:
┌────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Select an option...                            [▲] │  │
│  ├─────────────────────────────────────────────────────┤  │
│  │  ○ Option 1                                        │  │
│  │  ● Option 2 (selected)                      [✓]   │  │
│  │  ○ Option 3                                        │  │
│  │  ○ Option 4                                        │  │
│  └─────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘

Features:
├── Keyboard navigation (↑↓, Enter, Escape)
├── Search/filter (optional)
├── Multi-select (optional)
├── Option groups
└── Custom option rendering
```

---

## 4. 레이아웃 컴포넌트 | Layout Components

### 4.1 Container

```
CONTAINER COMPONENT
─────────────────────────────────────────────────────────────

Variants:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  <Container>         max-width: 1200px, centered          │
│  <Container.Narrow>  max-width: 720px (text content)      │
│  <Container.Wide>    max-width: 1440px                    │
│  <Container.Fluid>   width: 100%, padding only            │
│                                                            │
└────────────────────────────────────────────────────────────┘

Responsive Padding:
├── Mobile: 16px
├── Tablet: 24px
└── Desktop: 32px
```

### 4.2 Grid

```
GRID COMPONENT
─────────────────────────────────────────────────────────────

<Grid cols={3} gap={6}>
  <Grid.Item>...</Grid.Item>
  <Grid.Item>...</Grid.Item>
  <Grid.Item>...</Grid.Item>
</Grid>

Responsive Grid:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  <Grid cols={{ base: 1, md: 2, lg: 3 }}>                  │
│                                                            │
│  Mobile:        Tablet:         Desktop:                   │
│  ┌─────────┐   ┌─────┬─────┐   ┌───┬───┬───┐             │
│  │    1    │   │  1  │  2  │   │ 1 │ 2 │ 3 │             │
│  ├─────────┤   ├─────┼─────┤   └───┴───┴───┘             │
│  │    2    │   │  3  │     │                              │
│  ├─────────┤   └─────┴─────┘                              │
│  │    3    │                                              │
│  └─────────┘                                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 4.3 Stack

```
STACK COMPONENT
─────────────────────────────────────────────────────────────

Vertical Stack (default):
<Stack spacing={4}>
  <Item />
  <Item />
  <Item />
</Stack>

┌─────────────┐
│    Item     │
├─────────────┤  ← spacing
│    Item     │
├─────────────┤  ← spacing
│    Item     │
└─────────────┘

Horizontal Stack:
<Stack direction="horizontal" spacing={4}>

┌─────┬─────┬─────┐
│Item │Item │Item │
└─────┴─────┴─────┘
   ↑     ↑
 spacing
```

### 4.4 Section

```
SECTION COMPONENT
─────────────────────────────────────────────────────────────

<Section>
  <Section.Header>
    <Section.Eyebrow>프로젝트</Section.Eyebrow>
    <Section.Title>우리의 솔루션</Section.Title>
    <Section.Description>...</Section.Description>
  </Section.Header>
  <Section.Content>
    ...
  </Section.Content>
</Section>

Visual:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                         프로젝트                           │
│                    ─────────────────                       │
│                      우리의 솔루션                         │
│           Havruta Project가 제공하는 다양한 프로그램       │
│                                                            │
│  ┌────────────────────────────────────────────────────┐   │
│  │                                                    │   │
│  │                   Section Content                  │   │
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘

Padding:
├── Mobile: py-12 (48px)
├── Tablet: py-16 (64px)
└── Desktop: py-24 (96px)

Backgrounds:
├── default (white)
├── muted (Gray-50)
├── primary (Indigo-50)
└── dark (Gray-900)
```

---

## 5. 네비게이션 컴포넌트 | Navigation Components

### 5.1 Header

```jsx
// Header Component
<Header>
  <Header.Logo />
  <Header.Nav>
    <Header.NavItem href="/about">About</Header.NavItem>
    <Header.NavDropdown label="Projects">
      <Header.NavDropdownItem href="/projects/churchthrive">
        ChurchThrive
      </Header.NavDropdownItem>
      {/* ... */}
    </Header.NavDropdown>
  </Header.Nav>
  <Header.CTA href="/contact">시작하기</Header.CTA>
  <Header.MobileMenuButton />
</Header>
```

### 5.2 Footer

```
FOOTER COMPONENT
─────────────────────────────────────────────────────────────

<Footer>
  <Footer.Main>
    <Footer.Brand>
      <Logo />
      <Tagline />
      <SocialLinks />
    </Footer.Brand>
    <Footer.Links>
      <Footer.LinkGroup title="Projects">...</Footer.LinkGroup>
      <Footer.LinkGroup title="Resources">...</Footer.LinkGroup>
      <Footer.LinkGroup title="Connect">...</Footer.LinkGroup>
    </Footer.Links>
  </Footer.Main>
  <Footer.Bottom>
    <Copyright />
    <LegalLinks />
    <LanguageSelector />
  </Footer.Bottom>
</Footer>
```

### 5.3 Breadcrumb

```jsx
// Breadcrumb Component
<Breadcrumb>
  <Breadcrumb.Item href="/">홈</Breadcrumb.Item>
  <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
  <Breadcrumb.Item current>ChurchThrive</Breadcrumb.Item>
</Breadcrumb>

// Renders:
// 홈 / Projects / ChurchThrive
```

---

## 6. 피드백 컴포넌트 | Feedback Components

### 6.1 Toast / Notification

```
TOAST COMPONENT
─────────────────────────────────────────────────────────────

Variants:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Success:                                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ [✓] 성공적으로 저장되었습니다.                 [✕] │  │
│  └─────────────────────────────────────────────────────┘  │
│  bg: Green-50, border-left: Green-500                     │
│                                                            │
│  Error:                                                    │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ [✕] 오류가 발생했습니다. 다시 시도해주세요.   [✕] │  │
│  └─────────────────────────────────────────────────────┘  │
│  bg: Red-50, border-left: Red-500                         │
│                                                            │
│  Warning:                                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ [!] 주의: 저장하지 않은 변경사항이 있습니다.  [✕] │  │
│  └─────────────────────────────────────────────────────┘  │
│  bg: Yellow-50, border-left: Yellow-500                   │
│                                                            │
│  Info:                                                     │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ [i] 새로운 업데이트가 있습니다.               [✕] │  │
│  └─────────────────────────────────────────────────────┘  │
│  bg: Blue-50, border-left: Blue-500                       │
│                                                            │
└────────────────────────────────────────────────────────────┘

Position: top-right (default), top-center, bottom-right
Duration: 5000ms (auto-dismiss)
Animation: Slide in from right
```

### 6.2 Alert

```
ALERT COMPONENT
─────────────────────────────────────────────────────────────

Inline Alert (페이지 내 고정):
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                     │  │
│  │  [Icon]  Alert Title                                │  │
│  │          Alert description with more details.       │  │
│  │                                                     │  │
│  │          [Action Button]                            │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘

Variants: success, error, warning, info
Dismissible: optional close button
```

### 6.3 Loading / Spinner

```
LOADING COMPONENTS
─────────────────────────────────────────────────────────────

Spinner:
┌─────────────────────┐
│                     │
│        ◠           │  Simple rotating spinner
│                     │
└─────────────────────┘

Skeleton:
┌────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐  │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                    │  │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░             │  │
│  └─────────────────────────────────────────────────────┘  │
│  Shimmer animation                                         │
└────────────────────────────────────────────────────────────┘

Full Page Loading:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                                                            │
│                         [Logo]                             │
│                        Loading...                          │
│                                                            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 6.4 Progress

```
PROGRESS COMPONENTS
─────────────────────────────────────────────────────────────

Progress Bar:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  진행률: 65%                                               │
│  ┌────────────────────────────────────────────────────┐   │
│  │████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░│   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘

Step Progress:
┌────────────────────────────────────────────────────────────┐
│                                                            │
│    (1)───────(2)───────(3)───────(4)                      │
│     ●─────────●─────────○─────────○                       │
│   기본정보   상세정보   검토      완료                     │
│     ↑ current                                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 7. 특수 컴포넌트 | Special Components

### 7.1 Revival Loop Diagram

```
REVIVAL LOOP COMPONENT
─────────────────────────────────────────────────────────────

Philosophy.md의 부흥 루프를 시각화하는 인터랙티브 컴포넌트

        ┌──────────────────────────────────────────┐
        │                                          │
        │              [말씀/Word]                 │
        │                  │                       │
        │     ┌────────────┼────────────┐         │
        │     │            │            │         │
        │     ▼            │            ▼         │
        │  [보호]          │        [암송]        │
        │  Protection      │      Memorization    │
        │     │            │            │         │
        │     │       [부흥 루프]       │         │
        │     │      Revival Loop      │         │
        │     │            │            │         │
        │     ▼            │            ▼         │
        │  [순종]          │        [질문]        │
        │  Obedience       │        Inquiry       │
        │     │            │            │         │
        │     └────────────┼────────────┘         │
        │                  │                       │
        │              [대화]                      │
        │            Dialogue                      │
        │                                          │
        └──────────────────────────────────────────┘

Interactive Features:
├── 각 단계 호버 시 설명 표시
├── 애니메이션 순환 (auto-play option)
├── 클릭 시 해당 섹션으로 스크롤
└── 현재 강조 단계 하이라이트
```

### 7.2 Project Ecosystem Map

```
PROJECT ECOSYSTEM COMPONENT
─────────────────────────────────────────────────────────────

6개 프로젝트의 관계를 시각화

┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    [Havruta Project]                       │
│                          │                                 │
│           ┌──────────────┼──────────────┐                 │
│           │              │              │                 │
│           ▼              ▼              ▼                 │
│      ┌────────┐    ┌────────┐    ┌────────┐              │
│      │Church  │    │COMPASS │    │ MATCH  │              │
│      │Thrive  │    │        │    │Family  │              │
│      └────────┘    └────────┘    └────────┘              │
│           │              │              │                 │
│           └──────────────┼──────────────┘                 │
│                          │                                 │
│           ┌──────────────┼──────────────┐                 │
│           │              │              │                 │
│           ▼              ▼              ▼                 │
│      ┌────────┐    ┌────────┐                             │
│      │BlueHill│    │ GBPF   │                             │
│      │ 21L    │    │ WRAM   │                             │
│      └────────┘    └────────┘                             │
│                                                            │
└────────────────────────────────────────────────────────────┘

Features:
├── 호버 시 프로젝트 미리보기
├── 클릭 시 상세 페이지 이동
├── 공통 기반(CMDS, 하브루타) 표시
└── 반응형: 모바일에서는 카드 리스트로 변환
```

### 7.3 Newsletter Form

```
NEWSLETTER COMPONENT
─────────────────────────────────────────────────────────────

┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                     │  │
│  │           📬 하브루타 소식 받기                     │  │
│  │                                                     │  │
│  │     말씀과 공동체의 이야기를 전해드립니다.          │  │
│  │                                                     │  │
│  │   ┌─────────────────────────────┐  ┌──────────┐   │  │
│  │   │  이메일 주소 입력...        │  │ 구독하기 │   │  │
│  │   └─────────────────────────────┘  └──────────┘   │  │
│  │                                                     │  │
│  │   □ 개인정보 처리방침에 동의합니다                 │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘

States:
├── Default: 입력 폼
├── Loading: 버튼 스피너
├── Success: 완료 메시지 + 체크 아이콘
└── Error: 에러 메시지 표시
```

---

## 8. 컴포넌트 Props 참조 | Props Reference

### 8.1 공통 Props

```typescript
// 모든 컴포넌트에 적용 가능한 공통 Props
interface CommonProps {
  className?: string;      // 추가 CSS 클래스
  style?: CSSProperties;   // 인라인 스타일
  id?: string;             // DOM ID
  testId?: string;         // 테스트용 ID
  children?: ReactNode;    // 자식 요소
}

// 반응형 Props 패턴
type Responsive<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

// 예시: cols?: Responsive<number>
// cols={3} 또는 cols={{ base: 1, md: 2, lg: 3 }}
```

### 8.2 컴포넌트별 Props 요약

| 컴포넌트 | 주요 Props |
|----------|-----------|
| **Button** | variant, size, disabled, loading, leftIcon, rightIcon |
| **Input** | type, label, error, helperText, size, leftIcon |
| **Card** | variant, image, title, description, footer, onClick |
| **Modal** | isOpen, onClose, title, size, footer |
| **Grid** | cols, gap, alignItems, justifyContent |
| **Stack** | direction, spacing, alignItems |
| **Section** | background, paddingY |
| **Toast** | variant, message, duration, onClose |

---

## 9. 테마 & 커스터마이징 | Theming

### 9.1 CSS 변수

```css
:root {
  /* Colors */
  --color-primary: #4F46E5;      /* Indigo-600 */
  --color-primary-hover: #4338CA; /* Indigo-700 */
  --color-secondary: #6B7280;    /* Gray-500 */
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;      /* Gray-50 */
  --color-text: #111827;         /* Gray-900 */
  --color-text-muted: #6B7280;   /* Gray-500 */
  --color-border: #E5E7EB;       /* Gray-200 */

  /* Typography */
  --font-family-heading: 'Playfair Display', 'Noto Serif KR', serif;
  --font-family-body: 'Inter', 'Pretendard', sans-serif;

  /* Spacing */
  --spacing-unit: 4px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### 9.2 다크 모드 (향후 지원)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-surface: #1F2937;
    --color-text: #F9FAFB;
    --color-text-muted: #9CA3AF;
    --color-border: #374151;
  }
}
```

---

## 관련 문서

- [01_Navigation_Structure.md](./01_Navigation_Structure.md) - 네비게이션 구조
- [02_Mobile_First_Design.md](./02_Mobile_First_Design.md) - 모바일 퍼스트 디자인
- [02_Visual_Identity.md](../01_Brand_Identity/02_Visual_Identity.md) - 비주얼 아이덴티티

---

*Havruta Project — powered by AreteVision*
