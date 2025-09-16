import { bigint, bigserial, pgTable, varchar } from "drizzle-orm/pg-core";
import { computador } from "./computador";

export const periferico = pgTable("periferico", {
    id: bigserial({mode: "number"}).primaryKey().notNull(),
    nome: varchar().notNull(),
    computador_id: bigint("computador_id",{mode: "number"}).references(() => computador.id).notNull()
});