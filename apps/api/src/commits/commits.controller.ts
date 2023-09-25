import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}

  @Get(':owner/:repo')
  findAll(@Param('owner') owner: string, @Param('repo') repo: string) {
    return this.commitsService.getAll(owner, repo);
  }
}
