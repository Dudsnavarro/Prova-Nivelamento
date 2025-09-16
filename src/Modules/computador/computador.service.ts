import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { DRIZZLE } from 'src/db/drizzle/drizzle.modules';
import type { DrizzleDB } from 'src/db/drizzle/types/drizzle';
import { eq } from 'drizzle-orm';
import { computador } from 'src/db/schema';

@Injectable()
export class ComputadorService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDB,
  ) {}

  async create(createComputadorDto: CreateComputadorDto) {
    const result = await this.db.insert(computador).values(createComputadorDto).returning()
    return result[0];
  };

  async findAll() {
    return await this.db.select().from(computador);
  }

  async findOne(id: number) {
    const result = await this.db.select().from(computador).where(eq(computador.id, id));
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  }

  async update(id: number, updateComputadorDto: UpdateComputadorDto) {
  const data = Object.fromEntries(
      Object.entries(updateComputadorDto).filter(([_, v]) => v !== undefined)
    );

    if (Object.keys(data).length === 0) throw new Error("Nenhum campo alterado.");

    const result = await this.db
      .update(computador)
      .set(data)
      .where(eq(computador.id, id))
      .returning();
    
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  };

  async remove(id: number) {
    const result = await this.db.delete(computador).where(eq(computador.id, id)).returning();
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  };
}
