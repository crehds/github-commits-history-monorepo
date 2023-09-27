import { useEffect, useState } from 'react';
import './App.css';
import { Commit } from './dto/commits.dto';

function App() {
  const [commits, setCommits] = useState<Commit[]>([]);
  useEffect(() => {
    fetch('/api/commits/crehds/github-commits-history-monorepo')
      .then((res) => res.json())
      .then((data) => setCommits(data));
  });
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
