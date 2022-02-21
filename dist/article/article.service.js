"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("../confs/entity/article.entity");
const http_decoration_1 = require("../common/http.decoration");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async addArticle(params) {
        const currentTime = new Date().getTime();
        const newArticle = new article_entity_1.Article();
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
            throw new http_decoration_1.CustomException('添加失败');
        });
    }
    async editArticle(params) {
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
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
    async getArticleDetail(params) {
        const articleDetail = await this.articleRepository
            .createQueryBuilder('article')
            .where('article.id= :id', { id: params.id })
            .getOne();
        return articleDetail;
    }
    async getArtCount() {
        return await this.articleRepository.createQueryBuilder().getCount();
    }
    async getArtList(params) {
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
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map