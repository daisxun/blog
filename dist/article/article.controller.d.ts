import { ArticleService } from './article.service';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    addArticle(params: any): Promise<any>;
    editArticle(params: any): Promise<any>;
    getArticleList(params: any): Promise<any>;
    getArticleDetail(params: any): Promise<any>;
}
