import { NewsAnalyzer } from "@/features/news/components/NewsAnalyzer";

export default function Home() {
  return (
    <div className="page-background">
      <main className="container">
        <header className="header">
          <h1 className="title">금융 뉴스 AI 분석</h1>
          <span className="badge">프론트엔드 기능 데모 (Mock API)</span>
        </header>
        <NewsAnalyzer />
      </main>
    </div>
  );
}
