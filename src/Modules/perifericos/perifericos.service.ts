import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
import { DRIZZLE } from 'src/db/drizzle/drizzle.modules';
import type { DrizzleDB } from 'src/db/drizzle/types/drizzle';
import { eq } from 'drizzle-orm';
import { periferico } from 'src/db/schema';

@Injectable()
export class PerifericosService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDB,
  ) {}
  
  async create(createPerifericoDto: CreatePerifericoDto) {
    const result = await this.db.insert(periferico).values(createPerifericoDto).returning()
    return result[0];
  };

  async findAll() {
    return await this.db.select().from(periferico);
  }

  async findOne(id: number) {
    const result = await this.db.select().from(periferico).where(eq(periferico.id, id));
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  }


  async update(id: number, updatePerifericoDto: UpdatePerifericoDto) {
  const data = Object.fromEntries(
      Object.entries(updatePerifericoDto).filter(([_, v]) => v !== undefined)
    );

    if (Object.keys(data).length === 0) throw new Error("Nenhum campo alterado.");

    const result = await this.db
      .update(periferico)
      .set(data)
      .where(eq(periferico.id, id))
      .returning();
    
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  };
  async remove(id: number) {
    const result = await this.db.delete(periferico).where(eq(periferico.id, id)).returning();
    if (result.length === 0) throw new NotFoundException(`Computador ${id} nao encontrado.`);
    return result[0];
  };
}
