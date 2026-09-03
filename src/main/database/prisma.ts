import "dotenv/config";

import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";
import { app } from "electron";
import path from "path";

const url = process.env.DATABASE_URL ?? `file:${path.join(app.getPath("userData"), "nexus-ai.db")}`;

const adapter = new PrismaLibSql({ url });

export const prisma = new PrismaClient({ adapter });
