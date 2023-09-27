import { useEffect, useState } from "react";
import { Commit } from "../dto/commits.dto";


export function useGetCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);

  const handleCommits = async () => {
    const response = await fetch('/api/commits/crehds/github-commits-history-monorepo');
    const data = await response.json();
    setCommits(data);
  };

  useEffect(() => {
    handleCommits();
  },[]);

  return commits;
}