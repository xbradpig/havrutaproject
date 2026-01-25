# Havruta Project 웹사이트 배포 가이드

## Cloudflare Pages 배포

### 1. GitHub 연결 방식 (권장)

#### Step 1: GitHub 저장소 생성
```bash
cd web
git init
git add .
git commit -m "Initial commit: Havruta Project website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/havruta-project-web.git
git push -u origin main
```

#### Step 2: Cloudflare Pages 설정
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 로그인
2. **Workers & Pages** > **Create application** > **Pages** 클릭
3. **Connect to Git** 선택
4. GitHub 계정 연결 및 저장소 선택

#### Step 3: 빌드 설정
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `pnpm install && pnpm build`
- **Build output directory**: `out`
- **Root directory**: `/` (또는 저장소 내 web 폴더 경로)
- **Node.js version**: 18 이상

#### Step 4: 환경 변수 (필요시)
```
NODE_VERSION=18
```

---

### 2. 직접 업로드 방식

#### Step 1: 로컬 빌드
```bash
cd web
pnpm install
pnpm build
```

#### Step 2: out 폴더 업로드
1. Cloudflare Dashboard > Workers & Pages
2. **Create application** > **Pages** > **Upload assets**
3. `out` 폴더의 모든 파일 드래그 앤 드롭

---

## 도메인 연결: havrutaproject.org

### Step 1: Cloudflare Pages에서 커스텀 도메인 추가
1. Pages 프로젝트 선택
2. **Custom domains** 탭 클릭
3. **Set up a custom domain** 클릭
4. `havrutaproject.org` 입력

### Step 2: DNS 설정

#### Option A: Cloudflare DNS 사용 (권장)
도메인의 네임서버를 Cloudflare로 변경:
1. 도메인 등록기관에서 네임서버 변경
2. Cloudflare가 제공하는 네임서버로 설정
3. Cloudflare가 자동으로 DNS 레코드 구성

#### Option B: 외부 DNS 사용
도메인 DNS에 CNAME 레코드 추가:
```
Type: CNAME
Name: @ (또는 www)
Target: <your-project>.pages.dev
```

### Step 3: SSL/TLS 설정
Cloudflare Pages는 자동으로 SSL 인증서를 발급합니다.
- **SSL/TLS 모드**: Full (strict) 권장

---

## 배포 확인 체크리스트

- [ ] 빌드 성공 (13개 페이지 생성)
- [ ] Cloudflare Pages 프로젝트 생성
- [ ] 커스텀 도메인 연결
- [ ] SSL 인증서 활성화
- [ ] 모든 페이지 접근 테스트
  - [ ] https://havrutaproject.org/
  - [ ] https://havrutaproject.org/about/
  - [ ] https://havrutaproject.org/projects/
  - [ ] https://havrutaproject.org/contact/
  - [ ] https://havrutaproject.org/resources/

---

## 트러블슈팅

### 404 오류
- `trailingSlash: true` 설정 확인
- `out` 폴더에 HTML 파일 존재 확인

### 이미지 로드 실패
- `images: { unoptimized: true }` 설정 확인
- 이미지 경로가 public 폴더 기준인지 확인

### 빌드 실패
```bash
# 캐시 정리 후 재빌드
rm -rf .next out node_modules
pnpm install
pnpm build
```

---

## 자동 배포 (CI/CD)

GitHub 연결 시 자동 배포:
- `main` 브랜치 push → 자동 프로덕션 배포
- PR 생성 → Preview 배포 URL 생성

---

## 연락처
문제 발생 시 AreteVision 팀에 문의하세요.
