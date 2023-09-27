import './App.css';
import { useGetCommits } from './hooks/useGetCommits';

function App() {
  const commits = useGetCommits();
  return (
    <main>
      <h1>Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
