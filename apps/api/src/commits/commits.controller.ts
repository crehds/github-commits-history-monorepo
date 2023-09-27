import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}

  @Get(':owner/:repo')
  findAll(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('perPage') perPage: number,
    @Query('page') page: number,
    @Query('sha') sha: string,
    @Query('since') since: string,
    @Query('until') until: string,
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

  @Get(':owner/:repo/:sha')
  findOne(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('sha') sha: string,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    return this.commitsService.getOne(owner, repo, sha, page, perPage);
  }
}
