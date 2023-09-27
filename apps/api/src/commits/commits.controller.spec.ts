import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

describe('CommitsController', () => {
  let controller: CommitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
      providers: [CommitsService, Octokit, ConfigService],
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
  });

  describe('findAll', () => {
    it('should return an array of commits', async () => {
      const owner = 'crehds';
      const repo = 'github-commits-history-monorepo';
      const perPage = 3;
      const page = 1;
      const sha = 'main';
      const since = '2023-09-20';
      const until = '2023-09-28';

      const result = await controller.findAll(
        owner,
        repo,
        perPage,
        page,
        sha,
        since,
        until,
      );

      expect(result).toHaveLength(perPage);
    });
  });

  describe('findOne', () => {
    it('should return a commit', async () => {
      const owner = 'crehds';
      const repo = 'github-commits-history-monorepo';
      const sha = 'main';
      const perPage = 10;
      const page = 1;

      const result = await controller.findOne(owner, repo, sha, perPage, page);

      expect(result).toHaveProperty('author.login', 'crehds');
    });
  });
});
