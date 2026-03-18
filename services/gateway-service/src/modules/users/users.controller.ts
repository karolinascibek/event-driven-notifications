import {
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { MicroservicesService } from 'modules/microservices/microservices.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('MICROSERVICE_USERS') private readonly usersMService: MicroservicesService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<string>> {
    const response = await this.usersMService.sendRequest(createUserDto);
    return {
      code: 200,
      message: 'User created',
      data: response,
    };
  }
}
