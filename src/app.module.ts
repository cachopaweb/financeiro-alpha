import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { DespesasController } from './despesas/despesas.controller';
import { LancamentosController } from './lancamentos/lancamentos.controller';

@Module({
  imports: [],
  controllers: [DespesasController, LancamentosController],
  providers: [
    AppService,
    PrismaService,
  ],
})
export class AppModule { }
