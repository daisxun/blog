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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tag_service_1 = require("./tag.service");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async addCategory(params) {
        return await this.tagService.addTag(params);
    }
    async getTag(params) {
        const tagList = await this.tagService.getTagList(params);
        const tagCount = await this.tagService.getTagCount();
        return {
            list: tagList,
            total: tagCount,
        };
    }
    async getAllTag(params) {
        return await this.tagService.getAllTag(params);
    }
    async editCategory(params) {
        return await this.tagService.editTag(params);
    }
    async delCategory(params) {
        return await this.tagService.delTag(params);
    }
};
__decorate([
    (0, common_1.Post)('addTag'),
    (0, swagger_1.ApiOperation)({ summary: '添加标签' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Post)('getTag'),
    (0, swagger_1.ApiOperation)({ summary: '获取标签列表' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getTag", null);
__decorate([
    (0, common_1.Post)('getAllTag'),
    (0, swagger_1.ApiOperation)({ summary: '获取所有标签' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getAllTag", null);
__decorate([
    (0, common_1.Post)('editTag'),
    (0, swagger_1.ApiOperation)({ summary: '编辑标签' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "editCategory", null);
__decorate([
    (0, common_1.Post)('delTag'),
    (0, swagger_1.ApiOperation)({ summary: '删除标签' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "delCategory", null);
TagController = __decorate([
    (0, swagger_1.ApiTags)('标签'),
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map