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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const article_service_1 = require("./article.service");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async addArticle(params) {
        const addArt = await this.articleService.addArticle(params);
        return addArt;
    }
    async editArticle(params) {
        const editArt = await this.articleService.editArticle(params);
        return editArt;
    }
    async getArticleList(params) {
        const artList = await this.articleService.getArtList(params);
        const artCount = await this.articleService.getArtCount();
        const result = {
            list: artList,
            total: artCount,
        };
        return result;
    }
    async getArticleDetail(params) {
        const artDetail = await this.articleService.getArticleDetail(params);
        return artDetail;
    }
};
__decorate([
    (0, common_1.Post)('addArticle'),
    (0, swagger_1.ApiOperation)({ summary: '添加文章' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addArticle", null);
__decorate([
    (0, common_1.Post)('editArticle'),
    (0, swagger_1.ApiOperation)({ summary: '编辑文章' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "editArticle", null);
__decorate([
    (0, common_1.Post)('getArticleList'),
    (0, swagger_1.ApiOperation)({ summary: '获取文章列表' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticleList", null);
__decorate([
    (0, common_1.Post)('getArticleDetail'),
    (0, swagger_1.ApiOperation)({ summary: '获取文章详情' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticleDetail", null);
ArticleController = __decorate([
    (0, swagger_1.ApiTags)('文章'),
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map