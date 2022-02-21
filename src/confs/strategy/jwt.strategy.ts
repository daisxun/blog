import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { User } from '../entity/user.entity';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '123456',
    } as StrategyOptions);
  }
  async validate(payload: any) {
    return await this.userRepository.findOne({
      username: payload.username,
    });
  }
}
