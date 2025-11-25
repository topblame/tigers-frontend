import { useCallback, useMemo, useState } from "react";
import type { AnalyzeNewsResponse } from "../types";
import { analyzeNewsMock } from "../api/analyzeNewsMock";
import { sampleArticle } from "../api/sampleAnalysis";

interface UseAnalyzeNewsOptions {
  analyzeNews?: typeof analyzeNewsMock;
}

export function useAnalyzeNews(
  { analyzeNews = analyzeNewsMock }: UseAnalyzeNewsOptions = {
    analyzeNews: analyzeNewsMock,
  },
) {
  const [article, setArticle] = useState("");
  const [result, setResult] = useState<AnalyzeNewsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!article.trim()) {
      setError("분석할 기사를 입력해 주세요.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await analyzeNews({ article });
      setResult(response);
    } catch (err) {
      console.error(err);
      setError("Mock API 호출 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [analyzeNews, article]);

  const fillSample = useCallback(() => {
    setArticle(sampleArticle);
  }, []);

  const status = useMemo(() => {
    if (loading) return "AI가 기사를 분석하고 있어요…";
    if (error) return error;
    if (result) return "분석이 완료되었습니다.";
    return "준비 완료";
  }, [error, loading, result]);

  return {
    article,
    setArticle,
    result,
    loading,
    error,
    status,
    handleAnalyze,
    fillSample,
  };
}
