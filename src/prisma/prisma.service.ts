import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


/* 
* Esto  establece  prisma  para  inyectar a sus modulos 
* el --OnModueleInit -- esto ejecuta  codigo  ni bien llame ala case exportada
 */

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
 async onModuleInit() {
  await this.$connect();
 }
}

