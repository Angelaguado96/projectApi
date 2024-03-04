import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Register } from '@prisma/client';
import { RegistadoEntify } from './entify/registado.entity';
import { JwtService } from '@nestjs/jwt';
import  *as bcrypt from 'bcrypt'




@Injectable()
export class RegisterService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async create(registadoEntity: RegistadoEntify): Promise<{ register: Register; token:string }> {
    const hash = await bcrypt.hash(registadoEntity.password,10);

    const register = await this.prisma.register.create({
      data: {
        name: registadoEntity.name,
        lastName: registadoEntity.lastName,
        email: registadoEntity.email,
        password: hash //aqui estot  encriptando  
      }
    });

    const token = this.jwtService.sign({
      id: register.id,
      email: register.email
    });

    return { register, token };
  }
}
