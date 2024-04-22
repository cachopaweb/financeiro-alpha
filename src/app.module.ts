import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { DespesasController } from './despesas/despesas.controller';
import { LancamentosController } from './lancamentos/lancamentos.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { AuthModule } from './auth/auth.module';
import { DespesasService } from './despesas/despesas.service';

@Module({
  imports: [AuthModule],
  controllers: [
    DespesasController,
    LancamentosController,
    UsuariosController,
    EmpresasController,
  ],
  providers: [
    AppService,
    PrismaService,
    DespesasService,
  ],
})
export class AppModule { }
