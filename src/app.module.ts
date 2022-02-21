// 应用程序的根模块
import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ArticleModule } from './article/article.module';
import { ConfModule } from './confs/config.module';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
@Module({
  imports: [UserModule, ArticleModule, ConfModule],
})
export class AppModule {}
