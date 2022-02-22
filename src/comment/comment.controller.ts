import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('评论管理')
@Controller('comment')
export class CommentController {
  constructor(private readonly linkService: CommentService) {}

  @Post('getComment')
  @ApiOperation({ summary: '获取评论列表' })
  @HttpCode(200)
  async getCommentsList(@Body() params): Promise<any> {
    const commentList = await this.linkService.getCommentsList(params);
    const commentCount = await this.linkService.getCommentsCount();
    const result = {
      list: commentList,
      total: commentCount,
    };
    return result;
  }

  @Post('checkComment')
  @ApiOperation({ summary: '审核评论' })
  @HttpCode(200)
  async editLink(@Body() params): Promise<any> {
    const checkInfo = await this.linkService.updateComment(params);
    return checkInfo;
  }
}
