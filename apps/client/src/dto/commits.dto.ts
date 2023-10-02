export interface Commit {
  sha: string;
  commit: {
    message: string
    author: {
      name: string;
      email: string;
      date: string;
    }
  },
  author: {
    login: string;
    avatar_url: string;
  }
}

export interface CommitFiles {
  sha: string;
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
}


export interface CommitDetails {
  sha: string;
  files: CommitFiles[];
}