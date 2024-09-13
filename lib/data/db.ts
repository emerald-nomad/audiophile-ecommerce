import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "./models/database";
import { SCHEMA_NAME } from "./table-names";
import { Kysely, PostgresDialect, WithSchemaPlugin } from "kysely";
import { Pool } from "pg";

export let db: Kysely<Database>;

if (process.env.VERCEL_ENV === "development") {
  db = new Kysely<any>({
    dialect: new PostgresDialect({
      pool: new Pool({
        host: "localhost",
        user: "postgres",
        password: "postgres",
        database: "postgres",
        port: 5432,
      }),
    }),
  }).withSchema(SCHEMA_NAME);
} else {
  db = createKysely<Database>({
    connectionString: process.env.POSTGRES_URL,
  }).withSchema(SCHEMA_NAME);
}

// postgres://default:ohD0CWvYi8Fk@ep-damp-union-a4se3zrf-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require
// postgres://default:ohD0CWvYi8Fk@ep-damp-union-a4se3zrf.us-east-1.aws.neon.tech/verceldb?sslmode=require
