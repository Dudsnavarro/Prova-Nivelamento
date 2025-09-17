CREATE TABLE "computador" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"nome" varchar NOT NULL,
	"cor" varchar NOT NULL,
	"dataFabricacao" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "periferico" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"nome" varchar NOT NULL,
	"computador_id" bigint NOT NULL
);
--> statement-breakpoint
ALTER TABLE "periferico" ADD CONSTRAINT "periferico_computador_id_computador_id_fk" FOREIGN KEY ("computador_id") REFERENCES "public"."computador"("id") ON DELETE no action ON UPDATE no action;