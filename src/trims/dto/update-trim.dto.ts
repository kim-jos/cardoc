import { PartialType } from '@nestjs/swagger';
import { CreateTrimDto } from './create-trim.dto';

export class UpdateTrimDto extends PartialType(CreateTrimDto) { }