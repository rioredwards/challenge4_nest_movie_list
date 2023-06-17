import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/createMovie.dto';
import { UpdateMovieDTO } from './dto/updateMovie.dto';

@Controller('movies')
export class MoviesController {
  // GET /movies
  @Get()
  getMovies() {
    // TODO

    return 'This will return all movies';
  }
  // GET /movies/:id
  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    // TODO

    return `This will return a movie with the id of ${movieId}`;
  }
  // POST /movies
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDTO) {
    // TODO

    return {
      name: createMovieDto.name,
    };
  }
  // DELETE /movies/:id
  @Delete('/:id')
  removeMovie(@Param('id') movieId: string) {
    // TODO

    return `This will delete a movie with the id of ${movieId}`;
  }
  // PUT /movies/:id
  @Put('/:id')
  patchMovie(@Param('id') movieId: string, UpdateMovieDTO: UpdateMovieDTO) {
    // TODO

    return {
      updatedMovie: movieId,
      ...UpdateMovieDTO,
    };
  }
}
