import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrimDto {
  @Expose()
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @ApiProperty()
  trimId: number;

  @IsNotEmpty()
  tire: any;
}