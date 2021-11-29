import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTireDto {
  @Expose()
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  type: string

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  wheelWidth: number

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  wheelFlatness: number

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  wheelSize: number;
}
