import { Injectable } from '@nestjs/common';
import { CreateMovieDTO } from './dto/createMovie.dto';

@Injectable()
export class MoviesService {
  private movies = [
    { id: 1, name: 'Titanic' },
    { id: 2, name: 'Avengers' },
    { id: 3, name: 'Frozen' },
  ];

  getAll() {
    return this.movies;
  }

  getOne(id: string) {
    // return this.movies.find((movie) => movie.id === parseInt(id));
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string) {
    const movieToDelete = this.getOne(id);
    this.movies.filter((movie) => movie.id !== +id);
    return movieToDelete;
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return this.movies[this.movies.length - 1];
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
