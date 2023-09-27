import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

describe('CommitsService', () => {
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsService, Octokit, ConfigService],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
