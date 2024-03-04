import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';



@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'vida123',
      signOptions: {expiresIn:'1h'}
    })
  ],
})
export class RegisterModule {}