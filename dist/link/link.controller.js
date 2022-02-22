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
exports.LinkController = void 0;
const common_1 = require("@nestjs/common");
const link_service_1 = require("./link.service");
const swagger_1 = require("@nestjs/swagger");
let LinkController = class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    async addLink(params) {
        return await this.linkService.addLink(params);
    }
    async getLink(params) {
        const linkList = await this.linkService.getLinkList(params);
        const linkCount = await this.linkService.getLinkCount();
        return {
            list: linkList,
            total: linkCount,
        };
    }
    async editLink(params) {
        return await this.linkService.updateLink(params);
    }
    async updateLinkStatus(params) {
        return await this.linkService.deleteLink(params);
    }
};
__decorate([
    (0, common_1.Post)('addLink'),
    (0, swagger_1.ApiOperation)({ summary: '添加链接' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "addLink", null);
__decorate([
    (0, common_1.Post)('getLink'),
    (0, swagger_1.ApiOperation)({ summary: '获取链接' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLink", null);
__decorate([
    (0, common_1.Post)('editLink'),
    (0, swagger_1.ApiOperation)({ summary: '编辑链接' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "editLink", null);
__decorate([
    (0, common_1.Post)('updateLinkStatus'),
    (0, swagger_1.ApiOperation)({ summary: '删除链接' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "updateLinkStatus", null);
LinkController = __decorate([
    (0, swagger_1.ApiTags)('链接'),
    (0, common_1.Controller)('link'),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkController);
exports.LinkController = LinkController;
//# sourceMappingURL=link.controller.js.map