import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import  {Login} from '@prisma/client'
import { EntifyLogin } from './entities/login.entity'

@Injectable()
export class LoginService {

 constructor (
  private readonly prismaService: PrismaService,
   private readonly jwtService: JwtService
 ){}
  async create(entifyLogin: EntifyLogin):Promise<{ login: Login,token:string}> {
   
    const login = await this.prismaService.login.create({
      data:{
 
        email:entifyLogin.email,
        password :entifyLogin.password
      }
    })
    const token = this.jwtService.sign({
      id: login.id,
      email: login.email
    });
     
    return { login, token };
  }

 
}
