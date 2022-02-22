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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_service_1 = require("./category.service");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async addCategory(params) {
        const newCategory = await this.categoryService.addCategory(params);
        return newCategory;
    }
    async getCategory(params) {
        const cateList = await this.categoryService.getCategoryList(params);
        const cateCount = await this.categoryService.getCategoryCount();
        const result = {
            list: cateList,
            total: cateCount,
        };
        return result;
    }
    async getAllCategory() {
        const allCategory = await this.categoryService.getAllCategory();
        return allCategory;
    }
    async editCategory(params) {
        const editCate = await this.categoryService.editCategpry(params);
        return editCate;
    }
    async delCategory(params) {
        const delCate = await this.categoryService.delCategory(params);
        return delCate;
    }
};
__decorate([
    (0, common_1.Post)('addCategory'),
    (0, swagger_1.ApiOperation)({ summary: '添加分类' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Post)('getCategory'),
    (0, swagger_1.ApiOperation)({ summary: '获取分类列表' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Post)('getAllCategory'),
    (0, swagger_1.ApiOperation)({ summary: '获取所有分类' }),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategory", null);
__decorate([
    (0, common_1.Post)('editCategory'),
    (0, swagger_1.ApiOperation)({ summary: '编辑分类' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "editCategory", null);
__decorate([
    (0, common_1.Post)('delCategory'),
    (0, swagger_1.ApiOperation)({ summary: '删除分类' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delCategory", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('分类'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map