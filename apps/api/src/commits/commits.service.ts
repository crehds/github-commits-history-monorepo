import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitsService {
  constructor(
    private readonly octokit: Octokit,
    private readonly configService: ConfigService,
  ) {
    this.octokit = new Octokit({
      auth: this.configService.get<string>('githubToken'),
    });
  }

  async getAll(
    owner: string,
    repo: string,
    perPage?: number,
    page?: number,
    sha?: string,
    since?: string,
    until?: string,
  ) {
    try {
      const commits = await this.octokit.repos.listCommits({
        owner,
        repo,
        sha,
        since,
        until,
        per_page: perPage,
        page,
      });

      return commits.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async getOne(owner: string, repo: string, sha: string) {
    try {
      const commit = await this.octokit.repos.getCommit({
        owner,
        repo,
        ref: sha,
      });

      return commit.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
