import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service';
import { MangaModule } from './modules/manga/manga.module';
import * as dotenv from 'dotenv';
import { Manga } from './modules/manga/entities/manga.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Manga, __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MangaModule,
  ],
  controllers: [],
  providers: [DatabaseService],
  exports: [],
})
export class AppModule {}
