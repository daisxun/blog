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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
let Comment = class Comment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', comment: 'id' }),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '文章id', nullable: false }),
    __metadata("design:type", Number)
], Comment.prototype, "artId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论的文章链接', nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "artURL", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论内容', nullable: false }),
    __metadata("design:type", Object)
], Comment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论者昵称', nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "from_uname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论者邮箱', nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "from_uemail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论者头像', nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "from_uavatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '评论者网址', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "from_uweb", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '评论回复时间', nullable: false }),
    __metadata("design:type", Number)
], Comment.prototype, "cdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '被回复者昵称', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "to_uname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '被回复者头像', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "to_uavatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '被回复者邮箱', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "to_uemail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '被回复者网址', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "to_uweb", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '被回复的内容', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "oldContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '被回复的内容的回复时间', nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "oldCdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '被回复内容的id', nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "oldId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        comment: '评论是否审核过',
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], Comment.prototype, "isChecked", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map