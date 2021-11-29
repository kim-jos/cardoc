import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ForbiddenException, HttpCode, UseGuards } from '@nestjs/common';
import { TrimsService } from './trims.service';
import { CreateTrimDto } from './dto/create-trim.dto';
import { UpdateTrimDto } from './dto/update-trim.dto';

@Controller('trims')
export class TrimsController {
  constructor(private readonly trimsService: TrimsService) { }

  @Post()
  @HttpCode(200)
  create(@Body() createTrimDto: any) {
    if (createTrimDto.data.length > 5) throw new ForbiddenException('Maximum of 5 car info can be recorded at one time')
    return this.trimsService.create(createTrimDto.data);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  findOne(@Body() userId: { userId: string }) {
    return this.trimsService.findOne(userId.userId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrimDto: UpdateTrimDto) {
  //   return this.trimsService.update(+id, updateTrimDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trimsService.remove(+id);
  // }
}
