import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../confs/entity/comment.entity';
import { Repository } from 'typeorm';
import { CustomException } from '../common/http.decoration';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getCommentsCount(): Promise<number> {
    return await this.commentRepository
      .createQueryBuilder('comment')
      .getCount();
  }

  async getCommentsList(params): Promise<any> {
    const commentsList = await this.commentRepository.query(`
            select
            C.id, C.artId, C.content, C.from_uname,
            (SELECT artTitle FROM article where FIND_IN_SET(C.artId, id) ) as artTitle,
            C.from_uemail, C.from_uavatar,
            C.from_uweb,
            C.cdate,
            C.to_uname ,
            C.to_uemail ,
            C.to_uweb ,
            C.oldContent ,
            C.oldCdate ,
            C.isChecked ,
            C.to_uavatar
            from comment as C
            ORDER BY C.cdate desc
            limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
        `);
    return commentsList;
  }

  async getCommentById(id): Promise<any> {
    const affectedData = await this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.id= :id', { id: id })
      .getOne();
    return affectedData;
  }

  async updateComment(params): Promise<any> {
    return await this.commentRepository
      .update(params.id, {
        isChecked: params.isChecked,
      })
      .then(async () => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }
}
