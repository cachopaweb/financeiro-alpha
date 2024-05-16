-- CreateTable
CREATE TABLE "Empresas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

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
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Despesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valorEstimado" DECIMAL NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioCriou" INTEGER NOT NULL,
    "dataPrevisao" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Receitas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valorEstimado" DECIMAL NOT NULL,
    "dataCriacao" DATETIME NOT NULL,
    "usuarioCriou" INTEGER NOT NULL,
    "dataPrevisao" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Lancamentos_receita_despesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL NOT NULL,
    "real" DECIMAL NOT NULL,
    "diferenca" DECIMAL NOT NULL,
    "obs" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuId" INTEGER NOT NULL,
    "recDesId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL DEFAULT 1,
    "tipo" TEXT NOT NULL,
    "movId" INTEGER NOT NULL,
    CONSTRAINT "Lancamentos_receita_despesa_usuId_fkey" FOREIGN KEY ("usuId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lancamentos_receita_despesa_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lancamentos_receita_despesa_movId_fkey" FOREIGN KEY ("movId") REFERENCES "Movimentacoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Movimentacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "credito" DECIMAL NOT NULL,
    "debito" DECIMAL NOT NULL,
    "dataHora" DATETIME NOT NULL
);
