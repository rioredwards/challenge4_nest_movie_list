import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { MoviesApiModule } from './movies-api/movies-api.module';

@Module({
  imports: [MoviesModule, TvShowsModule, MoviesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
