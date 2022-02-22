import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '../confs/entity/tag.entity';
import { CustomException } from '../common/http.decoration';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async addTag(params): Promise<any> {
    const newTag = new Tag();
    newTag.tagdesc = params.tagdesc;
    newTag.tagname = params.tagname;
    return await this.tagRepository
      .save(newTag)
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }

  async getAllTag(params): Promise<any> {
    return await this.tagRepository.createQueryBuilder('tag').getMany();
  }

  async getTagList(params): Promise<any> {
    return await this.tagRepository.query(`
            select T.id, 
            T.tagname, 
            T.tagdesc, 
            T.status,
            ( SELECT COUNT(*) FROM article where FIND_IN_SET(T.id, tag) ) as artNum, 
            T.cdate 
            from tag as T
            ORDER BY T.cdate desc 
            limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
        `);
  }

  async getTagCount(): Promise<number> {
    return await this.tagRepository.createQueryBuilder().getCount();
  }

  async editTag(params): Promise<any> {
    return await this.tagRepository
      .update(params.id, {
        tagname: params.tagname,
        tagdesc: params.tagdesc,
      })
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }

  async delTag(params): Promise<any> {
    return await this.tagRepository
      .update(params.id, {
        status: params.status,
      })
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }
}
