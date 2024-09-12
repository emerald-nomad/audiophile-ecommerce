import * as path from "path";
import { Pool } from "pg";
import { promises as fs } from "fs";
import {
  Kysely,
  Migrator,
  PostgresDialect,
  FileMigrationProvider,
  CreateTableBuilder,
  sql,
} from "kysely";

declare module "kysely" {
  interface CreateTableBuilder<TB extends string, C extends string = never> {
    addIdColumn<CN extends string = "id">(
      col?: CN
    ): CreateTableBuilder<TB, C | CN>;
  }
}
CreateTableBuilder.prototype.addIdColumn = function (
  this: CreateTableBuilder<any, any>,
  col?: string
) {
  return this.addColumn(col || "id", "uuid", (col) =>
    col.primaryKey().defaultTo(sql`gen_random_uuid()`)
  );
};

async function migrateToLatest() {
  const db = new Kysely<any>({
    dialect: new PostgresDialect({
      pool: new Pool({
        host: "localhost",
        user: "postgres",
        password: "postgres",
        database: "postgres",
        port: 5432,
      }),
    }),
  });

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // This needs to be an absolute path.
      migrationFolder: path.join(__dirname, "../migrations"),
    }),
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === "Success") {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === "Error") {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error("failed to migrate");
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

migrateToLatest();
