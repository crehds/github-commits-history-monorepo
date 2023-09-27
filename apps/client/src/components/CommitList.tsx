import { useGetCommits } from "../hooks/useGetCommits";

function CommitList() {
  const commits = useGetCommits();
  return (
    <>
    <h1>Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            {commit.commit.message}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommitList;