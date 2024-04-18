-- CreateTable
CREATE TABLE "Empresas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "salario" DECIMAL(65,30) NOT NULL,
    "temValeTransporte" BOOLEAN NOT NULL,
    "chavePix" TEXT NOT NULL,

    CONSTRAINT "Funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "usu_fun" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL(65,30) NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funCriou" INTEGER NOT NULL,

    CONSTRAINT "Despesas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lancamentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estimado" DECIMAL(65,30) NOT NULL,
    "real" DECIMAL(65,30) NOT NULL,
    "diferenca" DECIMAL(65,30) NOT NULL,
    "obs" TEXT,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funId" INTEGER NOT NULL,
    "despesaId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Lancamentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_usu_fun_fkey" FOREIGN KEY ("usu_fun") REFERENCES "Funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamentos" ADD CONSTRAINT "Lancamentos_funId_fkey" FOREIGN KEY ("funId") REFERENCES "Funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamentos" ADD CONSTRAINT "Lancamentos_despesaId_fkey" FOREIGN KEY ("despesaId") REFERENCES "Despesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamentos" ADD CONSTRAINT "Lancamentos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
