import { PassportStrategy } from '@nestjs/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { CustomException } from '../../common/http.decoration';
// import md5 from 'md5';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string) {
    console.log('payload', username);
    const loginPwd = process.env.AUTH_PWD_SALT + password;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', {
        username: username,
      })
      .addSelect('user.password')
      .getOne();
    if (!user) {
      throw new CustomException('用户不存在');
    }
    if (loginPwd !== user.password) {
      throw new CustomException('密码不正确');
    }
    delete user.password;
    return user;
  }
}
