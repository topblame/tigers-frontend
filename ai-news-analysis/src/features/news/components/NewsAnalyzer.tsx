"use client";

import { ArticleForm } from "./ArticleForm";
import { ResultPanel } from "./ResultPanel";
import { useAnalyzeNews } from "../hooks/useAnalyzeNews";
import { sampleAnalysis } from "../api/sampleAnalysis";

export function NewsAnalyzer() {
  const {
    article,
    setArticle,
    result,
    loading,
    status,
    handleAnalyze,
    fillSample,
  } = useAnalyzeNews();

  return (
    <section className="panel">
      <div className="form-grid">
        <ArticleForm
          article={article}
          onChange={setArticle}
          onSubmit={handleAnalyze}
          onFillSample={fillSample}
          loading={loading}
          status={status}
        />
        <ResultPanel result={result ?? sampleAnalysis} />
      </div>
      <p className="footer-note">
        현재 화면은 프론트엔드 확인을 위한 Mock API 기반입니다. FastAPI
        실서비스가 준비되면 API 호출 부분만 교체하면 됩니다.
      </p>
    </section>
  );
}
