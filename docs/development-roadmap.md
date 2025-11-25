# 금융 뉴스 AI 분석 서비스 - 개발 스타트 가이드

프론트엔드 우선 전략을 실제 작업 단계로 옮길 수 있도록 **첫 주에 완수할 수 있는 구체적인 체크리스트**와 **작업 순서**를 제공합니다. 모듈화를 유지해 백엔드(FastAPI)로 교체하기 쉬운 구조를 전제로 합니다.

## 0) 환경 준비
- Node.js 20.x / pnpm 또는 npm을 설치합니다.
- `NEXT_PUBLIC_API_BASE_URL` 환경 변수를 `.env.local`에 준비하되, 초기에는 Mock을 사용하므로 비워도 무방합니다.

## 1) 프로젝트 뼈대 잡기
1. **Next.js App 생성**: `npx create-next-app@latest`로 기본 앱을 생성합니다.
2. **경로 구조 추천**
   ```text
   src/
     app/              # Next.js App Router
     components/       # 재사용 UI 컴포넌트
     features/news/    # 뉴스 분석 도메인 (페이지, 훅, 모델, API 클라이언트)
       api/            # analyzeNewsMock / analyzeNewsApi
       types.ts        # DTO (Sentiment, AnalyzeNewsRequest/Response)
       hooks/          # useAnalyzeNews
       components/     # ArticleInput, ResultPanel 등
   ```
3. **UI 라이브러리**: Tailwind CSS 또는 Chakra UI 중 하나를 정해 초기 세팅을 완료합니다.

## 2) API 계층 분리 (Mock → 실서비스 교체 용이)
- `features/news/types.ts`에 DTO를 선언합니다. (`docs/frontend-strategy.md` 참고)
- `features/news/api/`에 다음 두 함수를 작성합니다.
  - `analyzeNewsMock(req)` : Promise로 `sampleAnalysis` 반환 (지연 1.5초 추가)
  - `analyzeNewsApi(req)` : `fetch(NEXT_PUBLIC_API_BASE_URL + '/news/analyze')`
- 상위 컴포넌트에서는 **동일한 함수 시그니처**를 사용하도록 DI 패턴을 적용합니다. 예) `useAnalyzeNews({ analyzeNews = analyzeNewsMock })`

## 3) UX 흐름 1차 구현 (Mock 기반)
- 페이지 흐름: `기사 입력 → 분석 실행 버튼 → 로딩 스피너 → 결과 카드`
- 필수 컴포넌트 초안
  - `ArticleInput`: textarea + 길이 표시
  - `AnalyzeButton`: disabled 상태/로딩 상태 반영
  - `ResultPanel`: 감정 배지(positive/neutral/negative), 핵심 포인트 리스트
- 상태 관리: 로컬 상태(`useState`)로 시작, 필요 시 TanStack Query로 교체.
- 에러 처리: fetch 실패 시 토스트 또는 경고 배너 노출.

## 4) 품질 장치
- **타입 안전성**: DTO 기반으로 요청/응답 타입을 강제합니다.
- **테스트**: `vitest` 또는 `@testing-library/react`로
  - `analyzeNewsMock`이 지연 후 샘플 데이터를 반환하는지
  - ResultPanel이 감정값에 따라 올바른 색상을 적용하는지
- **Lint/Format**: ESLint + Prettier 기본 설정 추가.

## 5) FastAPI 연동 시 체크리스트
- `.env.local`에 `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000` 설정.
- `analyzeNewsApi`를 훅에 주입하여 Mock을 대체.
- CORS 허용 및 에러 포맷(HTTP 4xx/5xx 응답 body 스키마) 확인.

## 6) 1주차 완료 정의 (DoD)
- Mock 기반으로 **입력→분석→결과** 흐름이 브라우저에서 동작한다.
- 핵심 DTO/클라이언트/훅/컴포넌트가 분리되어 FastAPI 교체 시 UI 수정이 최소화된다.
- 최소 2개의 컴포넌트 단위 테스트 또는 훅 테스트가 통과한다.
- README에 실행 방법(`pnpm dev`)과 환경 변수 예시가 기재되어 있다.

## 바로 실행 가능한 초기 작업 순서 (요약)
1. Next.js 생성 + UI 라이브러리 세팅
2. `features/news/types.ts` 작성
3. `features/news/api/analyzeNewsMock.ts` + `analyzeNewsApi.ts` 작성
4. `useAnalyzeNews` 훅 구현 (DI로 mock/api 주입)
5. 페이지에서 훅 연결 + 기본 컴포넌트 배치
6. 간단한 테스트 1~2개 추가
7. README에 실행/환경 변수 업데이트

> 위 순서를 따르면 프론트엔드가 백엔드 없이도 동작하는 **첫 기능 데모**를 빠르게 완성할 수 있습니다.
