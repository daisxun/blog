import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userServe: UserService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '注册' })
  @HttpCode(200)
  async register(@Body() params): Promise<object> {
    const resData = await this.userServe.userRegister(params);
    return resData;
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  async login(@Body() params): Promise<object> {
    const payload = { ...params };
    const token = this.jwtService.sign(payload);
    return { ...params, token };
  }
}
