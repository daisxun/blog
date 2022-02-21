import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../confs/entity/user.entity';
import { CustomException } from '../common/http.decoration';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async userRegister(params): Promise<any> {
    const pwd = process.env.AUTH_PWD_SALT + params.password;
    const oldUser = await this.userRepository.findOne({
      username: params.username,
    });
    if (oldUser) {
      return {
        code: 200,
        message: '用户已存在',
      };
    } else {
      const newUser = new User();
      newUser.username = params.username;
      newUser.password = pwd;
      return await this.userRepository
        .save(newUser)
        .then(() => {
          return {
            code: 200,
            message: '添加用户成功',
          };
        })
        .catch(() => {
          throw new CustomException('添加失败');
        });
    }
  }
  async userInfoUpdate(params): Promise<any> {
    const updateInfo = {
      nickname: params.nickname,
      signature: params.signature,
      avatar: params.avatar,
      password: '',
    };
    return updateInfo;
  }
}
