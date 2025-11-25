"use client";

import type { AnalyzeNewsResponse, Sentiment } from "../types";

function getSentimentLabel(sentiment?: Sentiment) {
  switch (sentiment) {
    case "positive":
      return "긍정적";
    case "neutral":
      return "중립적";
    case "negative":
      return "부정적";
    default:
      return "-";
  }
}

interface ResultPanelProps {
  result: AnalyzeNewsResponse | null;
}

export function ResultPanel({ result }: ResultPanelProps) {
  const sentiment = result?.sentiment;
  const keyPoints = result?.key_points ?? [];

  return (
    <div className="result-card">
      <p className="section-title">분석 결과</p>
      <div className="sentiment-row">
        <span className="sentiment-label">감정(Sentiment)</span>
        <span className={`sentiment-pill ${sentiment ?? "neutral"}`}>
          {getSentimentLabel(sentiment)}
        </span>
      </div>
      <p className="section-title">핵심 포인트</p>
      <ul className="keypoints">
        {keyPoints.length === 0 ? (
          <li>아직 분석 결과가 없습니다.</li>
        ) : (
          keyPoints.map((point) => <li key={point}>{point}</li>)
        )}
      </ul>
    </div>
  );
}
