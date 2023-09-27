import { useEffect, useState } from "react";
import { Commit } from "../dto/commits.dto";
import { getCommitsRequest } from "../services/commits";


export function useGetCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);

  const handleCommits = async () => {
    const response = await getCommitsRequest('github-commits-history-monorepo');

    const data = await response.json();
    setCommits(data);
  };

  useEffect(() => {
    handleCommits();
  },[]);

  return commits;
}