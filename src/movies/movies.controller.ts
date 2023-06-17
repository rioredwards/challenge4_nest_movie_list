import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/createMovie.dto';
import { UpdateMovieDTO } from './dto/updateMovie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // GET /movies
  @Get()
  getMovies() {
    return this.moviesService.getAll();
  }

  // GET /movies/:id
  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
  }

  // POST /movies
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDTO) {
    return this.moviesService.create(createMovieDto);
  }

  // DELETE /movies/:id
  @Delete('/:id')
  removeMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // PUT /movies/:id
  @Put('/:id')
  patchMovie(@Param('id') movieId: string, UpdateMovieDTO: UpdateMovieDTO) {
    return this.moviesService.update(movieId, UpdateMovieDTO);
  }
}
