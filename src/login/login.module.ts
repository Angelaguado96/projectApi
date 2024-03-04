import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports:[
    PrismaService,
   JwtModule.register({
    secret: 'vida123',
    signOptions:{expiresIn:'1h'}
   })
  ]

})
export class LoginModule {}
