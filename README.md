<img width="100%" align="center" src="https://capsule-render.vercel.app/api?type=rect&color=0:fa5d66,100:fc1150&height=300&section=header&text=Cake&fontSize=90&fontColor=f6f6f6&desc=우리%20학교%20재능%20공유%20플랫폼%20🍰&descAlignY=70" alt="Cake - 우리 학교 재능 공유 플랫폼" />

<p align=center>
재능 공유? A piece of Cake 이지 🍰    
  <br/>
  우리 학교 재능 공유 플랫폼, <strong>Cake<i>!</i></strong>
</p>

<div align="center" >
  <img src="https://user-images.githubusercontent.com/40057032/142753807-bc66d385-a5b1-42e8-b9e6-a748d53376b3.gif" alt="케이크 데모 gif" width="200px" />
</div>

# 🍰 Cake! - Web Front-end

**우리 학교 재능 공유 플랫폼, Cake🍰** 의 웹 프론트엔드 레포지토리입니다.   
Cake는 위드코로나 시행에 발맞춰, 대학생들이 같은 학교 학생과 직접 만나 서로의 재능을 교환할 수 있도록 돕는 재능 공유 플랫폼입니다.   
Cake와 함께, 믿음직한 우리 학교 선후배, 동기들과 새로운 재능을 개발해 보세요! 🔥

- 🏠 [웹 페이지](https://wanted-cake.netlify.app/)
- 📑 [기술 설계 문서](https://docs.google.com/document/d/15EEdAm05md8PaBFjUEky3PJozWJyxrYEZ_oCcNg83Bk/edit?usp=sharing)
- 📔 [스토리북](https://wanted-fork-fork.github.io/cake-FE/)

## 주요 기능
- **스터디 목록**: 우리 학교에서 모집 중인 스터디 목록을 볼 수 있습니다.
- **스터디 상세 보기**: 스터디에 대한 상세 정보를 확인하고, 참여 신청을 보낼 수 있습니다.
- **스터디 만들기**: 스터디를 만들 수 있습니다. 내가 줄 수 있는 것과 받고 싶은 것, 언제 어디에서 스터디를 할 지를 고르고, 스터디에 대해 더 자세한 설명을 할 수도 있습니다.
- **스터디 관리하기**: 내가 만든 스터디나 참여한 스터디 목록을 볼 수 있습니다. 내가 만든 스터디를 신청한 사람들을 관리하거나, 내가 참여한 스터디의 채팅방을 확인할 수 있습니다.
- **스터디 검색하기**: 내가 주고 싶은 것과 받고 싶은 것, 스터디의 형태를 골라서 원하는 스터디를 찾을 수 있습니다.
- 그 외에도 마이페이지, 다른 사람의 프로필 보기 등의 기능을 제공합니다.
- 11월까지 개발하는 내용은 1:1 스터디에 한정됩니다. 이후에 1:n, n명 스터디 개발 및 채팅, 알림, 결제 기능을 개발할 예정입니다.

# 🔎 프로젝트 살펴보기

## 프로젝트 실행

프로젝트의 root 디렉토리에서 아래 커맨드를 실행
```shell
npm run install 
npm run dev
```
이후, 브라우저에서 `localhost:3000` 확인

## 주요 기술

- **React.js**: 웹 UI 라이브러리
- **Next.js**: 프로젝트 생성, SSR, Routing 등의 기능을 사용
- **styled-component**: css-in-js을 통해 컴포넌트 스타일을 관리하기 위해 사용
- **MobX**: 상태 관리 라이브러리
- **Axios**: HTTP 비동기 통신을 위하여 사용
- **TypeScript**: 정적 타입 사용 및 코드 에러 검출
- **ESLint & Prettier**: 코드 컨벤션 검사

### 외부 API

- [Kakao Maps API](https://apis.map.kakao.com/web/)
- [Kakao 로컬 API](https://developers.kakao.com/product/map)

## 컴포넌트 설계
### Atomic Design Pattern
- [Brad Frost의 Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) 을 따릅니다.
- Atoms: 기본 HTML Element (button, input 등...)
- Molecules: Atom 컴포넌트를 조합하여 만들어진 간단한 기능을 할 수 있는 컴포넌트. (검색 박스 등)
- Organisms: Molecule, Atom 컴포넌트를 조합하여 만들어짐. 하나의 UI 섹션을 이룸. (헤더 내비게이션, 상품 그리드 리스트)
- Templates: 위의 컴포넌트를 조합하여 하나의 페이지를 만듦. (메인 페이지)
- Pages: 위의 컴포넌트들이 기능하기 위한 로직과 내용을 제공.
- Page 외의 컴포넌트에는 로직이 포함되지 않도록 합니다.

### Storybook Driven Development
- UI 컴포넌트를 추가할 때에는 컴포넌트의 스토리북의 스토리를 만들어 UI를 확인한 후 실제로 적용합니다.
- UI 컴포넌트를 수정할 때에는 반드시 React 로컬 개발 환경이 아니라 스토리북을 확인하며 작업합니다.

## 프로젝트 구조
```
├── public              # Favicon 등 Static Resource 저장
├── .storybook          # Storybook 설정 파일
├── src
│   ├── components      # 컴포넌트 파일 - Atomic Design에 따라 정리됨
│   │    ├── atoms
│   │    ├── icon
│   │    ├── molecules
│   │    └── organs
│   ├── constant        # enum 등의 상수 값
│   ├── hooks           # Custom Hooks
│   ├── lib             # 외부 라이브러리 커스텀 설정
│   ├── models          # Typescript 타입과 API Response 타입 정의
│   │    └── dto        # API Response 타입 정의
│   ├── pages           # 로직 정의를 위한 페이지 컴포넌트, 이름은 routing에 따라 정함
│   ├── services        # REST API 사용을 위한 HTTP 서비스
│   ├── store           # MobX 스토어
│   ├── stories         # Storybook 스토리 파일
│   ├── styles          # 전역 스타일 설정
│   │    ├── fonts      # 폰트 적용
│   │    └── template   # 템플릿 컴포넌트에서 공통으로 사용되는 styled-component
│   ├── templates       # 페이지 UI를 표시하기 위한 템플릿 컴포넌트
│   └── utils           # 공통으로 사용하기 위한 기초 util 함수
├── README.md           # README
├── .babelrc            # 바벨 설정 파일 - styled-component SSR 설정 및 antd 설정
├── .eslintrc.json      # ESLint 설정 파일 - airbnb 컨벤션을 따름
├── .prettierrc         # Prettier 설정 파일
├── netlify.toml        # Netlify 플러그인 설정 파일
├── next-env.d.ts       # Next.js 타입 설정 파일 - 변경 금지
├── next.config.js      # Next.js 설정 파일 - 환경 변수, antd less 설정 등
├── package-lock.json   # npm 패키지 의존성 파일
├── package.json        # npm 패키지 의존성 및 프로젝트 상세 파일
└── tsconfig.json       # 타입스크립트 설정 파일

```

# 👥 협업

## Git Conventions

### Branch naming

[VincentDriessen의 Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) 를 따릅니다.   
배포를 위해 사용하고 있는 Netlify에서 Main 브랜치에 커밋 푸시가 일어날 때마다 배포를 진행하므로, 배포를 진행해야 할 때에만 main 브랜치에 머지를 진행합니다.

- 브랜치 종류
  - main: main 브랜치를 기준으로 배포를 진행합니다.
  - develop: 개발을 진행하는 중심 브랜치입니다.
  - release: QA를 진행하는 브랜치입니다.
  - feature: 새로운 기능을 개발하는 브랜치입니다. 생성된 Github Issue를 단위로 작업합니다.
  - hotfix: main 배포 브랜치의 버그를 긴급 수정하기 위한 브랜치입니다.
  - docs: README, Template 등의 문서를 수정하기 위한 브랜치입니다.
  - gh-page: 스토리북을 github-page에 배포하기 위한 브랜치입니다.
- Feature 브랜치 네이밍 규칙
  - `{브랜치 종류}/{이슈 번호}-{작업 요약}`
  - ex) `feature/1-add-login-ui`

### Commit naming

- [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
- [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)


```
<type>: <subject>
<BLANK LINE>
<body>
```

- types
  - feat (feature)
  - fix (bug fix)
  - docs (documentation)
  - style (formatting, missing semi colons, …)
  - refactor
  - test (when adding missing tests)
  - chore (maintain)
- body: 변경 사유와 변경 내용을 작성 (선택)
