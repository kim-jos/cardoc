import { UpdateTireDto } from './dto/update-tire.dto';
import { CreateTireDto } from './dto/create-tire.dto';
import { TiresService } from './tires.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) { }

  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tiresService.create(createTireDto);
  }

  @Get()
  findOne(@Body() userId: any) {
    return this.tiresService.findOne(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrimDto: UpdateTireDto) {
    return this.tiresService.update(+id, updateTrimDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiresService.remove(+id);
  }
}
