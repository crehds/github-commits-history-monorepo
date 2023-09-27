import { useEffect, useState } from "react";
import { Commit } from "../dto/commits.dto";
import { getCommitsRequest } from "../services/commits";
import { Filters } from "../dto/filters.dto";
import { INITIAL_FILTERS } from "../constants/filters";

export function useGetCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);

  const handleCommits = async (filters: Filters) => {
    const response = await getCommitsRequest('github-commits-history-monorepo', filters);

    const data = await response.json();
    setCommits(data);
  };

  useEffect(() => {
    handleCommits({...INITIAL_FILTERS});
  },[]);

  return {commits, handleCommits};
}