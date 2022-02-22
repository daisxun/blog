// 应用程序的根模块
import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { LinkModule } from './link/link.module';
import { TagModule } from './tag/tag.module';
import { ConfModule } from './confs/config.module';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
@Module({
  imports: [
    UserModule,
    ArticleModule,
    ConfModule,
    CategoryModule,
    CommentModule,
    LinkModule,
    TagModule,
  ],
})
export class AppModule {}
