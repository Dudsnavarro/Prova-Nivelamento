import { bigserial, date, pgTable, varchar } from "drizzle-orm/pg-core";

export const computador = pgTable("computador", {
    id: bigserial({mode: "number"}).primaryKey().notNull(),
    nome: varchar().notNull(),
    cor: varchar().notNull(),
    dataFabricacao: date({mode: "string"}).notNull(),
})