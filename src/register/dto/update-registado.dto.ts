import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './create-registrado.dto';

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {}
