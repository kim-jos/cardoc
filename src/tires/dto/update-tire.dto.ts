import { CreateTireDto } from './create-tire.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateTireDto extends PartialType(CreateTireDto) { }