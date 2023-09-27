import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}

  @Get(':owner/:repo')
  findAll(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('sha') sha: string,
    @Query('since') since: string,
    @Query('until') until: string,
    @Query('perPage') perPage: number,
    @Query('page') page: number,
  ) {
    return this.commitsService.getAll(
      owner,
      repo,
      perPage,
      page,
      sha,
      since,
      until,
    );
  }
}
