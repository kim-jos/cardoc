import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose()
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @MinLength(5, {
    message: 'password must be at least 5 characters',
    context: {
      errorCode: 1003,
      developerNote: 'The validated string must contain 5 or more characters.',
    },
  })
  @ApiProperty()
  password: string;
}
