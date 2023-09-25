import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { Octokit } from '@octokit/rest';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService, Octokit],
})
export class CommitsModule {}
