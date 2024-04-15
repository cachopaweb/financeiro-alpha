/*
  Warnings:

  - Added the required column `email` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usu_fun" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    CONSTRAINT "Usuarios_usu_fun_fkey" FOREIGN KEY ("usu_fun") REFERENCES "Funcionarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuarios" ("id", "nome", "usu_fun") SELECT "id", "nome", "usu_fun" FROM "Usuarios";
DROP TABLE "Usuarios";
ALTER TABLE "new_Usuarios" RENAME TO "Usuarios";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
