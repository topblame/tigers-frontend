export type Sentiment = "positive" | "neutral" | "negative";

export interface AnalyzeNewsRequest {
  article: string;
}

export interface AnalyzeNewsResponse {
  sentiment: Sentiment;
  key_points: string[];
}
