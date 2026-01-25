export const SITE_CONFIG = {
  name: 'Havruta Project',
  tagline: '말씀과 공동체로 더 깊은 사람을 세운다',
  description: 'ASI 시대, 흔들리지 않는 뿌리를 내리는 여정',
  url: 'https://havrutaproject.org',
  author: 'AreteVision',
};

export const NAV_ITEMS = [
  { label: '소개', href: '/about' },
  {
    label: '프로젝트',
    href: '/projects',
    children: [
      { label: 'ChurchThrive', href: '/projects/churchthrive', description: '교회 부흥의 새로운 패러다임' },
      { label: 'COMPASS', href: '/projects/compass', description: '성품과 은사로 찾는 사역의 방향' },
      { label: 'MATCH Family Verse', href: '/projects/match-family-verse', description: '가정에서 시작하는 말씀 공동체' },
      { label: 'BlueHill21Leader', href: '/projects/bluehill21leader', description: '다음 세대를 세우는 리더십' },
      { label: 'GBPF WRAM', href: '/projects/gbpf-wram', description: '성경적 재정관리의 지혜' },
    ]
  },
  { label: '자료실', href: '/resources' },
  { label: '문의', href: '/contact' },
];

export const PROJECTS = [
  {
    id: 'churchthrive',
    name: 'ChurchThrive',
    tagline: '교회 부흥의 새로운 패러다임',
    description: '15일 부트캠프를 통해 교회가 건강하게 성장할 수 있는 기반을 세웁니다.',
    icon: 'church',
    color: 'from-indigo-500 to-purple-600',
    href: '/projects/churchthrive',
  },
  {
    id: 'compass',
    name: 'COMPASS',
    tagline: '성품과 은사로 찾는 사역의 방향',
    description: '각 성도의 고유한 은사와 성품을 발견하고, 최적의 사역을 매칭합니다.',
    icon: 'compass',
    color: 'from-emerald-500 to-teal-600',
    href: '/projects/compass',
  },
  {
    id: 'match-family-verse',
    name: 'MATCH Family Verse',
    tagline: '가정에서 시작하는 말씀 공동체',
    description: 'F.A.M.I.L.Y 원칙으로 온 가족이 함께하는 성경 공부 플랫폼.',
    icon: 'home',
    color: 'from-amber-500 to-orange-600',
    href: '/projects/match-family-verse',
  },
  {
    id: 'bluehill21leader',
    name: 'BlueHill21Leader',
    tagline: '다음 세대를 세우는 리더십',
    description: '차세대 교회 리더를 위한 체계적인 훈련 프로그램.',
    icon: 'users',
    color: 'from-blue-500 to-cyan-600',
    href: '/projects/bluehill21leader',
  },
  {
    id: 'gbpf-wram',
    name: 'GBPF WRAM',
    tagline: '성경적 재정관리의 지혜',
    description: '청지기 정신에 기반한 가정 재정 관리 시스템.',
    icon: 'wallet',
    color: 'from-rose-500 to-pink-600',
    href: '/projects/gbpf-wram',
  },
];

export const REVIVAL_LOOP_STEPS = [
  { id: 'word', label: '말씀', labelEn: 'Word', description: '성경 말씀을 함께 읽습니다' },
  { id: 'memorize', label: '암송', labelEn: 'Memorize', description: '말씀을 마음에 새깁니다' },
  { id: 'inquire', label: '질문', labelEn: 'Inquire', description: '깊이 있는 질문을 던집니다' },
  { id: 'dialogue', label: '대화', labelEn: 'Dialogue', description: '공동체와 함께 나눕니다' },
  { id: 'obey', label: '순종', labelEn: 'Obey', description: '삶에서 실천합니다' },
  { id: 'protect', label: '보호', labelEn: 'Protect', description: '서로를 지키고 돌봅니다' },
];

export const FAMILY_PRINCIPLES = [
  { letter: 'F', word: 'Faith', korean: '믿음', description: '하나님을 신뢰하며 시작합니다' },
  { letter: 'A', word: 'Ask', korean: '질문', description: '깊이 있는 질문을 던집니다' },
  { letter: 'M', word: 'Memorize', korean: '암송', description: '말씀을 마음에 새깁니다' },
  { letter: 'I', word: 'Inquire', korean: '탐구', description: '말씀의 의미를 탐구합니다' },
  { letter: 'L', word: 'Learn', korean: '배움', description: '함께 배우고 성장합니다' },
  { letter: 'Y', word: 'Yield', korean: '열매', description: '삶의 열매를 맺습니다' },
];
