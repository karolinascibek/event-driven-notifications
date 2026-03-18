import {
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { ProxiesService } from 'modules/proxies/proxies.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('PROXY_USERS') private readonly usersMService: ProxiesService,
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
