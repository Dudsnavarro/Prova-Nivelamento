import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerifericosService } from './perifericos.service';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';

@Controller('perifericos')
export class PerifericosController {
  constructor(private readonly perifericosService: PerifericosService) {}

  @Post()
  create(@Body() createPerifericoDto: CreatePerifericoDto) {
    return this.perifericosService.create(createPerifericoDto);
  }

  @Get()
  findAll() {
    return this.perifericosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.perifericosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePerifericoDto: UpdatePerifericoDto) {
    return this.perifericosService.update(id, updatePerifericoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.perifericosService.remove(id);
  }
}
