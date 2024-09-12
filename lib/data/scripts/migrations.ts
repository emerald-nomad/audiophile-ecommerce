import * as path from "path";
import { promises as fs } from "fs";
import {
  Migrator,
  FileMigrationProvider,
  CreateTableBuilder,
  sql,
  Kysely,
  PostgresDialect,
} from "kysely";
import { Pool } from "pg";
import { SCHEMA_NAME } from "../table-names";
import { db } from "../db";

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
  

  const migrator = new Migrator({
    db,
    migrationTableSchema: SCHEMA_NAME,
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
