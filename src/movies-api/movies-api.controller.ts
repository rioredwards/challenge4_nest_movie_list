import { Controller, Get } from '@nestjs/common';
import { MoviesApiService } from './movies-api.service';

@Controller('movies-api')
export class MoviesApiController {
  constructor(private moviesApiService: MoviesApiService) {}

  @Get('/popular')
  async getPopularMovies(): Promise<string[]> {
    const response = await this.moviesApiService.getPopularMovies();
    return response.results.map((movie) => movie?.title);
  }
}
