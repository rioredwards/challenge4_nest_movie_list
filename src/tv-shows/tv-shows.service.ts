import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';

@Injectable()
export class TvShowsService {
  create(createTvShowDto: CreateTvShowDto) {
    return 'This action adds a new tvShow';
  }

  findAll() {
    return `This action returns all tvShows`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tvShow`;
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    return `This action updates a #${id} tvShow`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
