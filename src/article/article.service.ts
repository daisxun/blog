import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../confs/entity/article.entity';
import { CustomException } from '../common/http.decoration';
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async addArticle(params): Promise<any> {
    const currentTime = new Date().getTime();
    const newArticle = new Article();
    newArticle.id = currentTime;
    newArticle.artTitle = params.artTitle;
    newArticle.artType = params.artType;
    newArticle.abstract = params.abstract;
    newArticle.category = params.category;
    newArticle.content = params.content;
    newArticle.tag = params.tag;
    newArticle.thumbnail = params.thumbnail;
    newArticle.artDiscuss = params.artDiscuss;
    newArticle.cdate = currentTime;
    newArticle.editdate = currentTime;
    newArticle.pv = 0;
    newArticle.discuss = 0;
    newArticle.status = 0;
    return await this.articleRepository
      .save(newArticle)
      .then(() => {
        return {
          code: 200,
          message: '添加成功',
        };
      })
      .catch((err) => {
        console.log(err);
        throw new CustomException('添加失败');
      });
  }

  async editArticle(params): Promise<any> {
    const currentTime = new Date().getTime();
    return await this.articleRepository
      .update(params.id, {
        artTitle: params.artTitle,
        artType: params.artType,
        abstract: params.abstract,
        category: params.category,
        content: params.content,
        artDiscuss: params.artDiscuss,
        tag: params.tag,
        thumbnail: params.thumbnail,
        editdate: currentTime,
      })
      .then(() => {
        return {
          code: 200,
          message: '添加成功',
        };
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }

  async getArticleDetail(params): Promise<any> {
    const articleDetail = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id= :id', { id: params.id })
      .getOne();
    return articleDetail;
  }

  async getArtCount(): Promise<number> {
    return await this.articleRepository.createQueryBuilder().getCount();
  }

  async getArtList(params): Promise<any> {
    const artList = await this.articleRepository.query(`
        select
        A.id, A.artTitle, A.abstract, A.artDiscuss, A.artType,
        (SELECT categoryname FROM category where FIND_IN_SET(A.category, id) ) as category,
        GROUP_CONCAT(T.tagname) as tag,
        A.thumbnail, A.pv,
        (SELECT COUNT(*) FROM comment where artId = A.id ) as discuss,
        A.content,
        A.cdate,
        A.editdate ,
        A.status
        from article as A
        left join tag as T
        on FIND_IN_SET(T.id , A.tag)
        group by A.id
        ORDER BY A.cdate desc
        limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
    `);
    return artList;
  }
}
