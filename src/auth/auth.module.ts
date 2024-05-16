import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/database/prisma.service';

export const jwtSecret = 'ipec2024alfa';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '24h' }, // e.g. 30s, 7d, 24h
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JwtStrategy],
})
export class AuthModule { }