/*
  Warnings:

  - Made the column `diferenca` on table `Lancamentos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `real` on table `Lancamentos` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lancamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL NOT NULL,
    "real" DECIMAL NOT NULL,
    "diferenca" DECIMAL NOT NULL,
    "obs" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funId" INTEGER NOT NULL,
    "despesaId" INTEGER NOT NULL,
    CONSTRAINT "Lancamentos_funId_fkey" FOREIGN KEY ("funId") REFERENCES "Funcionarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lancamentos_despesaId_fkey" FOREIGN KEY ("despesaId") REFERENCES "Despesas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lancamentos" ("dataCriacao", "despesaId", "diferenca", "estimado", "funId", "id", "nome", "obs", "real") SELECT "dataCriacao", "despesaId", "diferenca", "estimado", "funId", "id", "nome", "obs", "real" FROM "Lancamentos";
DROP TABLE "Lancamentos";
ALTER TABLE "new_Lancamentos" RENAME TO "Lancamentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
