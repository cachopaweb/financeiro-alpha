-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Receitas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valorEstimado" DECIMAL NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioCriou" INTEGER NOT NULL,
    "dataPrevisao" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Receitas" ("dataCriacao", "dataPrevisao", "id", "nome", "usuarioCriou", "valorEstimado") SELECT "dataCriacao", "dataPrevisao", "id", "nome", "usuarioCriou", "valorEstimado" FROM "Receitas";
DROP TABLE "Receitas";
ALTER TABLE "new_Receitas" RENAME TO "Receitas";
CREATE TABLE "new_Movimentacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "credito" DECIMAL NOT NULL,
    "debito" DECIMAL NOT NULL,
    "dataHora" DATETIME NOT NULL,
    "empresaId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Movimentacoes_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movimentacoes" ("credito", "dataHora", "debito", "descricao", "id") SELECT "credito", "dataHora", "debito", "descricao", "id" FROM "Movimentacoes";
DROP TABLE "Movimentacoes";
ALTER TABLE "new_Movimentacoes" RENAME TO "Movimentacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
