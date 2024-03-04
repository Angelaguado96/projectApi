import { Controller, Post, Body, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-registrado.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Post()
  async create(@Res() res, @Body() createRegisterDto: CreateRegisterDto) {
    try {
      const { register, token } = await this.registerService.create(createRegisterDto);
      return res.status(200).json({
        message: 'Registro exitoso',
        register,
        token
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error al registrar usuario', error });
    }
  }
}
