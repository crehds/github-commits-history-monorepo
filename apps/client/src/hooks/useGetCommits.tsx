import { useEffect, useState } from "react";
import { Commit } from "../dto/commits.dto";
import { getCommitsRequest } from "../services/commits";
import { Filters } from "../dto/filters.dto";
import { INITIAL_FILTERS } from "../constants/filters";

type UseGetCommits = {
  commits: Commit[];
  isLoading: boolean;
  error: unknown;
  handleCommits: (filters: Filters) => void;
}

export function useGetCommits(): UseGetCommits {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const handleCommits = async (filters: Filters) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getCommitsRequest('github-commits-history-monorepo', filters);
      const data = await response.json();
      setCommits(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

  };

  useEffect(() => {
    handleCommits({...INITIAL_FILTERS});
  },[]);

  return {commits, isLoading, error, handleCommits};
}