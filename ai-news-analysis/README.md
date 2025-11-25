# 금융 뉴스 AI 분석 (React + Next.js)

금융 기사 전문을 입력하면 감정(Sentiment)과 핵심 포인트를 Mock API 기반으로 빠르게 확인할 수 있는 프론트엔드 데모입니다. 추후 FastAPI 백엔드와 연동될 예정이므로 API Layer는 DI 형태로 분리해 두었습니다.

## 실행 방법

```bash
cd ai-news-analysis
npm install   # 최초 한 번
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 데모 UI를 확인할 수 있습니다.

## 주요 폴더

```
src/
  app/                  # Next.js App Router (layout, page, 글로벌 스타일)
  features/news/
    api/                # Mock API + 샘플 데이터
    hooks/              # useAnalyzeNews 훅 (DI 가능)
    components/         # ArticleForm, ResultPanel, NewsAnalyzer
```

## Mock API 플로우

1. 사용자가 기사 전문을 입력하고 "분석 요청" 버튼을 누르면 `useAnalyzeNews` 훅이 실행됩니다.
2. 훅은 기본값으로 `analyzeNewsMock`(랜덤 Sentiment + 샘플 key point, 지연 900~1500ms)을 호출합니다.
3. 응답은 `ResultPanel`에 전달되어 감정 pill과 핵심 포인트 카드 리스트로 렌더링됩니다.
4. FastAPI 연동 시 `useAnalyzeNews({ analyzeNews: analyzeNewsApi })`만 주입하면 동일 UI를 유지하면서 실제 API를 호출할 수 있습니다.

## TODO / 다음 단계

- FastAPI 실서버(`POST /news/analyze`)와 연결되는 `analyzeNewsApi` 구현
- Vitest 또는 React Testing Library를 활용한 최소 단위/컴포넌트 테스트
- TanStack Query 기반 비동기 상태 관리 및 에러 토스트 개선
