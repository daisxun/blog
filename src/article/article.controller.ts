import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ArticleService } from './article.service';

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('addArticle')
  @ApiOperation({ summary: '添加文章' })
  @HttpCode(200)
  async addArticle(@Body() params): Promise<any> {
    const addArt = await this.articleService.addArticle(params);
    return addArt;
  }

  @Post('editArticle')
  @ApiOperation({ summary: '编辑文章' })
  @HttpCode(200)
  async editArticle(@Body() params): Promise<any> {
    const editArt = await this.articleService.editArticle(params);
    return editArt;
  }
  @Post('getArticleList')
  @ApiOperation({ summary: '获取文章列表' })
  @HttpCode(200)
  async getArticleList(@Body() params): Promise<any> {
    const artList = await this.articleService.getArtList(params);
    const artCount = await this.articleService.getArtCount();
    const result = {
      list: artList,
      total: artCount,
    };
    return result;
  }
  @Post('getArticleDetail')
  @ApiOperation({ summary: '获取文章详情' })
  @HttpCode(200)
  async getArticleDetail(@Body() params): Promise<any> {
    const artDetail = await this.articleService.getArticleDetail(params);
    return artDetail;
  }
}
