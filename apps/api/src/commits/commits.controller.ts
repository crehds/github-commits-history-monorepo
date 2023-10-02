import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { FilterQueryPipe } from 'src/pipes/filter.pipe';

@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}

  @Get(':owner/:repo')
  findAll(
    @Param() params: { owner: string; repo: string },
    @Query(
      new ValidationPipe({ skipUndefinedProperties: true }),
      new FilterQueryPipe(),
    )
    query: {
      perPage?: number;
      page?: number;
      sha?: string;
      since?: string;
      until?: string;
    },
  ) {
    const { owner, repo } = params;
    const { perPage = 10, page = 1, sha = 'main', since, until } = query;
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
    @Param() params: { owner: string; repo: string; sha: string },
    @Query(
      new ValidationPipe({ skipUndefinedProperties: true }),
      new FilterQueryPipe(),
    )
    query: { perPage?: number; page?: number },
  ) {
    const { owner, repo, sha } = params;
    const { perPage = 10, page = 1 } = query;
    return this.commitsService.getOne(owner, repo, sha, page, perPage);
  }
}
