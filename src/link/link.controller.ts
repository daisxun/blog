import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LinkService } from './link.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('链接')
@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('addLink')
  @ApiOperation({ summary: '添加链接' })
  @HttpCode(200)
  async addLink(@Body() params): Promise<any> {
    return await this.linkService.addLink(params);
  }

  @Post('getLink')
  @ApiOperation({ summary: '获取链接' })
  @HttpCode(200)
  async getLink(@Body() params): Promise<any> {
    const linkList = await this.linkService.getLinkList(params);
    const linkCount = await this.linkService.getLinkCount();
    return {
      list: linkList,
      total: linkCount,
    };
  }

  @Post('editLink')
  @ApiOperation({ summary: '编辑链接' })
  @HttpCode(200)
  async editLink(@Body() params): Promise<any> {
    return await this.linkService.updateLink(params);
  }

  @Post('updateLinkStatus')
  @ApiOperation({ summary: '删除链接' })
  @HttpCode(200)
  async updateLinkStatus(@Body() params): Promise<any> {
    return await this.linkService.deleteLink(params);
  }
}
