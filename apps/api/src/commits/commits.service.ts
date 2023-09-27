import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class CommitsService {
  constructor(private readonly octokit: Octokit) {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
  }

  async getAll(owner: string, repo: string) {
    try {
      const commits = await this.octokit.repos.listCommits({
        owner,
        repo,
      });

      return commits.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
