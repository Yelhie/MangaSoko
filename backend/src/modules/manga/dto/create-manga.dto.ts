import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEnum,
  IsISBN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MangaCondition } from '../enums/manga-condition.enum';
import { MangaStatus } from '../enums/manga-status.enum';
import { MangaLanguage } from '../enums/manga-language.enum';

export class CreateMangaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  author: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  illustrator?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  publisher: string;

  @IsISBN()
  @IsNotEmpty()
  isbn: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  publicationDate?: Date;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  genres: string[];

  @IsString()
  @IsOptional()
  @MaxLength(2000)
  synopsis?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  volumeNumber: number;

  @IsEnum(MangaLanguage)
  @IsNotEmpty()
  publicationLanguage: MangaLanguage;

  @IsNumber()
  @IsOptional()
  @Min(1900)
  @Max(new Date().getFullYear())
  year?: number;

  @IsUrl()
  @IsOptional()
  coverImage?: string;

  @IsUrl()
  @IsOptional()
  thumbnailImage?: string;

  @IsEnum(MangaStatus)
  @IsOptional()
  status?: MangaStatus;

  @IsNumber()
  @Min(0)
  @Max(10000)
  @IsOptional()
  price?: number;

  @IsEnum(MangaCondition)
  @IsOptional()
  condition?: MangaCondition;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(5)
  rating?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10000)
  stock?: number;
}
