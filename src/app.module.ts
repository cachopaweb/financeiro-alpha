import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { DespesasController } from './despesas/despesas.controller';
import { LancamentosController } from './lancamentos/lancamentos.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { AuthModule } from './auth/auth.module';
import { MovimentacoesService } from './movimentacoes/movimentacoes.service';
import { MovimentacoesController } from './movimentacoes/movimentacoes.controller';
import { DespesasService } from './despesas/despesas.service';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasService } from './receitas/receitas.service';

@Module({
  imports: [AuthModule],
  controllers: [
    DespesasController,
    LancamentosController,
    UsuariosController,
    EmpresasController,
    MovimentacoesController,
    ReceitasController,
  ],
  providers: [
    AppService,
    PrismaService,
    MovimentacoesService,
    DespesasService,
    ReceitasService,
  ],
})
export class AppModule { }
