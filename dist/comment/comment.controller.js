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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const swagger_1 = require("@nestjs/swagger");
let CommentController = class CommentController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    async getCommentsList(params) {
        const commentList = await this.linkService.getCommentsList(params);
        const commentCount = await this.linkService.getCommentsCount();
        const result = {
            list: commentList,
            total: commentCount,
        };
        return result;
    }
    async editLink(params) {
        const checkInfo = await this.linkService.updateComment(params);
        return checkInfo;
    }
};
__decorate([
    (0, common_1.Post)('getComment'),
    (0, swagger_1.ApiOperation)({ summary: '获取评论列表' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentsList", null);
__decorate([
    (0, common_1.Post)('checkComment'),
    (0, swagger_1.ApiOperation)({ summary: '审核评论' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "editLink", null);
CommentController = __decorate([
    (0, swagger_1.ApiTags)('评论管理'),
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map