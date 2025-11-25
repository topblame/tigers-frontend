import type { AnalyzeNewsResponse } from "../types";

export const sampleAnalysis: AnalyzeNewsResponse = {
  sentiment: "positive",
  key_points: [
    "주요 시중은행의 1분기 실적이 시장 예상치를 웃돌며 투자심리가 살아나고 있습니다.",
    "AI 기반 리서치 시스템 도입으로 대출 심사 속도가 빨라져 고객 만족도가 개선되었습니다.",
    "변동성 확대 구간에서도 자본적정성을 방어하기 위한 선제적 대응 전략이 주효했습니다.",
  ],
};

export const sampleArticle = [
  "국내 주요 은행들이 AI 기반 심사 시스템을 도입하면서 대출 승인 속도를 크게 높이고 있습니다.",
  "덕분에 1분기 실적이 시장 예상치를 웃돌았고, 공격적인 자본 확충 전략도 순조롭게 진행되는 모습입니다.",
  "금융당국은 변동성 확대 구간에서도 소비자 보호를 강화하기 위해 추가 대책을 검토 중입니다.",
].join("\n\n");
