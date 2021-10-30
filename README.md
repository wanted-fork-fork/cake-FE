# CAKE - Web Front End


## 주요 기술

- React.js: 웹 UI 라이브러리
- Next.js: 프로젝트 생성, SSR, Routing 등
- styled-component: styling
- MobX: 상태 관리
- TypeScript: 정적 타입 사용 및 코드 에러 검출
- ESLint & Prettier: 코드 컨벤션 검사
- Axios: HTTP 비동기 통신

## 프로젝트 실행
```
yarn install 
yarn dev
```
이후 `localhost:3000` 확인

## Git Conventions

### Branch naming

[VincentDriessen의 Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)를 따름
- 브랜치 종류
  - main: 배포 기준 브랜치
  - develop: 개발 브랜치
  - release: QA를 위한 브랜치
  - feature: 기능 구현을 위한 브랜치
  - hotfix: main 배포 브랜치의 버그를 긴급 수정
- 네이밍
  - {브랜치 종류}/{이슈 번호}-{작업 요약}
  - ex) feature/1-add-login-ui

### Commit naming

- [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
- [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)


```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- types
  - feat (feature)
  - fix (bug fix)
  - docs (documentation)
  - style (formatting, missing semi colons, …)
  - refactor
  - test (when adding missing tests)
  - chore (maintain)
- body: 변경 사유와 변경 내용을 작성
- footer: 완료된 이슈 넘버 작성
