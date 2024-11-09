import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MangaCondition } from '../enums/manga-condition.enum';
import { MangaStatus } from '../enums/manga-status.enum';
import { MangaLanguage } from '../enums/manga-language.enum';

@Entity('mangas')
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  author: string;

  @Column({ length: 100, nullable: true })
  illustrator?: string;

  @Column({ length: 100 })
  publisher: string;

  @Column()
  isbn: string;

  @Column({ nullable: true })
  publicationDate?: Date;

  @Column('simple-array')
  genres: string[];

  @Column({ type: 'text', nullable: true })
  synopsis?: string;

  @Column()
  volumeNumber: number;

  @Column({
    type: 'enum',
    enum: MangaLanguage,
  })
  publicationLanguage: MangaLanguage;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  coverImage?: string;

  @Column({ nullable: true })
  thumbnailImage?: string;

  @Column({
    type: 'enum',
    enum: MangaStatus,
    nullable: true,
  })
  status?: MangaStatus;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({
    type: 'enum',
    enum: MangaCondition,
    nullable: true,
  })
  condition?: MangaCondition;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ nullable: true })
  stock: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
