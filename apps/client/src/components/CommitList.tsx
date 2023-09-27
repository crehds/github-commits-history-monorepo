import { useGetCommits } from "../hooks/useGetCommits";
import CommitItem from "./CommitItem";

function CommitList() {
  const commits = useGetCommits();
  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="tracking-wide text-5xl">Commits</h1>
      <ul>
        {commits.map((commit) => (
          <CommitItem key={commit.sha} commit={commit} />
        ))}
      </ul>
    </div>
  );
}

export default CommitList;