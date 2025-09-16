import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';

@Controller('computador')
export class ComputadorController {
  constructor(private readonly computadorService: ComputadorService) {}

  @Post()
  create(@Body() createComputadorDto: CreateComputadorDto) {
    return this.computadorService.create(createComputadorDto);
  }

  @Get()
  findAll() {
    return this.computadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.computadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateComputadorDto: UpdateComputadorDto) {
    return this.computadorService.update(id, updateComputadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.computadorService.remove(id);
  }
}
