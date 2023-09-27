import { Filters } from "../dto/filters.dto";

const API = '/api/commits/crehds';

export const getCommitsRequest = (repo: string, filters: Filters) => {

  const searchParams = new URLSearchParams();

  searchParams.append('perPage', filters.perPage.toString());

  return fetch(`${API}/${repo}?${searchParams.toString()}`);
};
