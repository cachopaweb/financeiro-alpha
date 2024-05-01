import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { DespesasController } from './despesas/despesas.controller';
import { LancamentosController } from './lancamentos/lancamentos.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { AuthModule } from './auth/auth.module';
import { MovimentacoesController } from './movimentacoes/movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes/movimentacoes.service';
import { MovimentacoesController } from './movimentacoes/movimentacoes.controller';

@Module({
  imports: [AuthModule],
  controllers: [
    DespesasController,
    LancamentosController,
    UsuariosController,
    EmpresasController,
    MovimentacoesController,
  ],
  providers: [
    AppService,
    PrismaService,
    MovimentacoesService,
  ],
})
export class AppModule { }
