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
