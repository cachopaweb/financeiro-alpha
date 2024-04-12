-- CreateTable
CREATE TABLE "Funcionarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "salario" DECIMAL NOT NULL,
    "temValeTransporte" BOOLEAN NOT NULL,
    "chavePix" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usu_fun" INTEGER NOT NULL,
    CONSTRAINT "Usuarios_usu_fun_fkey" FOREIGN KEY ("usu_fun") REFERENCES "Funcionarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Despesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funCriou" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Lancamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL NOT NULL,
    "real" DECIMAL,
    "diferenca" DECIMAL,
    "obs" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funId" INTEGER NOT NULL,
    "despesaId" INTEGER NOT NULL,
    CONSTRAINT "Lancamentos_funId_fkey" FOREIGN KEY ("funId") REFERENCES "Funcionarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lancamentos_despesaId_fkey" FOREIGN KEY ("despesaId") REFERENCES "Despesas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
