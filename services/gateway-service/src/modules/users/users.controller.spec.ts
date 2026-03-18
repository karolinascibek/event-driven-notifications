import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { ValidationPipe } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return ApiResponse<string>', () => {
    const dto: CreateUserDto = {
      name: 'Anna', 
      lastname: 'TEST', 
      email: 'anna@test.pl', 
      password: 'password1'
    }

    const result: ApiResponse<string> = controller.create(dto);

    expect(result).toEqual({
      code: 200,
      message: 'User created',
      data: 'OK'
    });
  })

  
  it('should throw BadRequestException for invalid email', async () => {
      const dto: CreateUserDto = {
        name: 'Anna',
        lastname: 'Test',
        password: 'password1',
        email: 'invalid-email' // zły format
      };

      const pipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

      await expect(pipe.transform(dto, { type: 'body', metatype: CreateUserDto }))
        .rejects.toThrow(); // wyjątek rzucany przez ValidationPipe
    });
});
