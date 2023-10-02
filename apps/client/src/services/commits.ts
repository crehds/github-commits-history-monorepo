import { Filters } from "../dto/filters.dto";

const API = '/api/commits/crehds';

export const getCommitsRequest = (repo: string, filters: Filters) => {

  const searchParams = new URLSearchParams();

  searchParams.append('perPage', filters.perPage.toString());
  searchParams.append('since', filters.since.toString());
  searchParams.append('until', filters.until.toString());

  return fetch(`${API}/${repo}?${searchParams.toString()}`);
};
