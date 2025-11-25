"use client";

import type { FormEvent } from "react";

interface ArticleFormProps {
  article: string;
  onChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  onFillSample: () => void;
  loading: boolean;
  status: string;
}

export function ArticleForm({
  article,
  onChange,
  onSubmit,
  onFillSample,
  loading,
  status,
}: ArticleFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void onSubmit();
  };

  return (
    <form id="news-form" className="article-form" onSubmit={handleSubmit}>
      <p className="section-title">기사 텍스트</p>
      <textarea
        value={article}
        onChange={(event) => onChange(event.target.value)}
        placeholder="금융 기사 전문을 붙여 넣고 AI 분석을 실행해 보세요."
      />
      <div className="button-row">
        <button type="submit" disabled={loading}>
          {loading ? "분석 중..." : "분석 요청"}
        </button>
        <button
          type="button"
          className="secondary"
          onClick={onFillSample}
          disabled={loading}
        >
          샘플 기사 채우기
        </button>
      </div>
      <div className="status-row">
        <span className={`dot ${loading ? "visible" : ""}`} />
        <span id="status">{status}</span>
      </div>
    </form>
  );
}
