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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../confs/entity/category.entity");
const typeorm_2 = require("typeorm");
const http_decoration_1 = require("../common/http.decoration");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async addCategory(params) {
        const newCategory = new category_entity_1.Category();
        newCategory.categorydesc = params.categorydesc;
        newCategory.categoryname = params.categoryname;
        newCategory.categorytype = params.categorytype;
        return await this.categoryRepository
            .save(newCategory)
            .then(() => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
    async getCategoryList(params) {
        const categoryList = await this.categoryRepository.query(`
            select c.id,
            c.categoryname,
            c.categorydesc,
            c.categorytype,
            c.status,
            ( SELECT COUNT(*) FROM article where FIND_IN_SET(c.id, category) ) as artNum,
            c.cdate
            from category as c
            ORDER BY c.cdate desc
            limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
        `);
        return categoryList;
    }
    async getAllCategory() {
        return await this.categoryRepository
            .createQueryBuilder('category')
            .getMany();
    }
    async getCategoryCount() {
        return await this.categoryRepository.createQueryBuilder().getCount();
    }
    async editCategpry(params) {
        return await this.categoryRepository
            .update(params.id, {
            categoryname: params.categoryname,
            categorydesc: params.categorydesc,
            categorytype: params.categorytype,
        })
            .then(() => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
    async delCategory(params) {
        return await this.categoryRepository
            .update(params.id, {
            status: params.status,
        })
            .then(() => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map