import type {
  AnalyzeNewsRequest,
  AnalyzeNewsResponse,
  Sentiment,
} from "../types";
import { sampleAnalysis } from "./sampleAnalysis";

const SENTIMENTS: Sentiment[] = ["positive", "neutral", "negative"];

export async function analyzeNewsMock(
  req: AnalyzeNewsRequest,
): Promise<AnalyzeNewsResponse> {
  if (!req.article.trim()) {
    throw new Error("empty-article");
  }

  // Simulate API latency and slightly randomize sentiment for variety.
  const sentiment =
    SENTIMENTS[Math.floor(Math.random() * SENTIMENTS.length)] ??
    sampleAnalysis.sentiment;
  const delay = 900 + Math.random() * 600;

  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    ...sampleAnalysis,
    sentiment,
  };
}
