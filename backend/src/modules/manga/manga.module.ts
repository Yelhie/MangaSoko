import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaService } from './services/manga.service';
import { MangaController } from './controllers/manga.controller';
import { Manga } from './entities/manga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga])],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
