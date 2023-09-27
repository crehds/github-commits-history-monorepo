import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService, Octokit, ConfigService],
})
export class CommitsModule {}
