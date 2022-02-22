import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';

@ApiTags('标签')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('addTag')
  @ApiOperation({ summary: '添加标签' })
  @HttpCode(200)
  async addCategory(@Body() params): Promise<any> {
    return await this.tagService.addTag(params);
  }

  @Post('getTag')
  @ApiOperation({ summary: '获取标签列表' })
  @HttpCode(200)
  async getTag(@Body() params): Promise<any> {
    const tagList = await this.tagService.getTagList(params);
    const tagCount = await this.tagService.getTagCount();
    return {
      list: tagList,
      total: tagCount,
    };
  }

  @Post('getAllTag')
  @ApiOperation({ summary: '获取所有标签' })
  @HttpCode(200)
  async getAllTag(@Body() params): Promise<any> {
    return await this.tagService.getAllTag(params);
  }

  @Post('editTag')
  @ApiOperation({ summary: '编辑标签' })
  @HttpCode(200)
  async editCategory(@Body() params): Promise<any> {
    return await this.tagService.editTag(params);
  }

  @Post('delTag')
  @ApiOperation({ summary: '删除标签' })
  @HttpCode(200)
  async delCategory(@Body() params): Promise<any> {
    return await this.tagService.delTag(params);
  }
}
