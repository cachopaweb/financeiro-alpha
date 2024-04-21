import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { DespesasController } from './despesas/despesas.controller';
import { LancamentosController } from './lancamentos/lancamentos.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { LoginController } from './login/login.controller';

@Module({
  imports: [],
  controllers: [
    DespesasController,
    LancamentosController,
    UsuariosController,
    EmpresasController,
    LoginController
  ],
  providers: [
    AppService,
    PrismaService,
  ],
})
export class AppModule { }
