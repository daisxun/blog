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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const typeorm_1 = require("typeorm");
let Article = class Article {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'bigint', comment: 'id', nullable: false }),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '标题', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "artTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '板块', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "artType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '摘要', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "abstract", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '分类', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '标签', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '缩略图', nullable: true }),
    __metadata("design:type", String)
], Article.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '内容', nullable: false }),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '发布时间', nullable: false }),
    __metadata("design:type", Number)
], Article.prototype, "cdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '修改时间', nullable: false }),
    __metadata("design:type", Number)
], Article.prototype, "editdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '浏览量', nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "pv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '留言数', nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "discuss", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '文状态', nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '评论', nullable: false, default: 1 }),
    __metadata("design:type", Number)
], Article.prototype, "artDiscuss", void 0);
Article = __decorate([
    (0, typeorm_1.Entity)()
], Article);
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map