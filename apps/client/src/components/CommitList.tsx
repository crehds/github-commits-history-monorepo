import { useGetCommits } from "../hooks/useGetCommits";

function CommitList() {
  const commits = useGetCommits();
  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="tracking-wide text-5xl">Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommitList;