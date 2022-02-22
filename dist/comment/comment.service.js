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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("../confs/entity/comment.entity");
const typeorm_2 = require("typeorm");
const http_decoration_1 = require("../common/http.decoration");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async getCommentsCount() {
        return await this.commentRepository
            .createQueryBuilder('comment')
            .getCount();
    }
    async getCommentsList(params) {
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
    async getCommentById(id) {
        const affectedData = await this.commentRepository
            .createQueryBuilder('comment')
            .where('comment.id= :id', { id: id })
            .getOne();
        return affectedData;
    }
    async updateComment(params) {
        return await this.commentRepository
            .update(params.id, {
            isChecked: params.isChecked,
        })
            .then(async () => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map