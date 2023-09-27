const API = '/api/commits/crehds/';

export const getCommitsRequest = (repo: string) => {
  return fetch(`${API}/${repo}`);
};
