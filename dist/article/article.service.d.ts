import { Repository } from 'typeorm';
import { Article } from '../confs/entity/article.entity';
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: Repository<Article>);
    addArticle(params: any): Promise<any>;
    editArticle(params: any): Promise<any>;
    getArticleDetail(params: any): Promise<any>;
    getArtCount(): Promise<number>;
    getArtList(params: any): Promise<any>;
}
