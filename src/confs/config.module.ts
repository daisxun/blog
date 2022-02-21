import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entity/user.entity';
import { Article } from './entity/article.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from './config.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
const entityArr = [User, Article];
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const entity = TypeOrmModule.forFeature(entityArr);
console.log('process.env=================', process.env);
@Global()
@Module({
  imports: [
    entity,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: entityArr,
          synchronize: true,
          charset: 'utf8mb4',
        };
      },
      imports: undefined,
    }),
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '86400s' }, // token有效期24小时
        };
      },
      imports: undefined,
    }),
  ],
  providers: [ConfigService, LocalStrategy, JwtStrategy],
  exports: [entity, ConfigService, JwtModule],
})
export class ConfModule {}
