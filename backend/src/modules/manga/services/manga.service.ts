import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manga } from '../entities/manga.entity';
import { CreateMangaDto } from '../dto/create-manga.dto';
import { UpdateMangaDto } from '../dto/update-manga.dto';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(Manga)
    private mangaRepository: Repository<Manga>,
  ) {}

  async create(createMangaDto: CreateMangaDto): Promise<Manga> {
    const manga = this.mangaRepository.create(createMangaDto);
    return await this.mangaRepository.save(manga);
  }

  async findAll(): Promise<Manga[]> {
    return await this.mangaRepository.find();
  }

  async findOne(id: number): Promise<Manga> {
    const manga = await this.mangaRepository.findOne({ where: { id } });
    if (!manga) {
      throw new NotFoundException(`Manga #${id} not found`);
    }
    return manga;
  }

  async update(id: number, updateMangaDto: UpdateMangaDto): Promise<Manga> {
    const manga = await this.findOne(id);
    Object.assign(manga, updateMangaDto);
    return await this.mangaRepository.save(manga);
  }

  async remove(id: number): Promise<void> {
    const manga = await this.findOne(id);
    await this.mangaRepository.remove(manga);
  }

  async findByTitle(title: string): Promise<Manga[]> {
    return await this.mangaRepository.find({
      where: { title: title },
    });
  }

  async findByAuthor(author: string): Promise<Manga[]> {
    return await this.mangaRepository.find({
      where: { author: author },
    });
  }
}
