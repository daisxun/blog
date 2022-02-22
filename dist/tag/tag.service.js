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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tag_entity_1 = require("../confs/entity/tag.entity");
const http_decoration_1 = require("../common/http.decoration");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async addTag(params) {
        const newTag = new tag_entity_1.Tag();
        newTag.tagdesc = params.tagdesc;
        newTag.tagname = params.tagname;
        return await this.tagRepository
            .save(newTag)
            .then(() => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
    async getAllTag(params) {
        return await this.tagRepository.createQueryBuilder('tag').getMany();
    }
    async getTagList(params) {
        return await this.tagRepository.query(`
            select T.id, 
            T.tagname, 
            T.tagdesc, 
            T.status,
            ( SELECT COUNT(*) FROM article where FIND_IN_SET(T.id, tag) ) as artNum, 
            T.cdate 
            from tag as T
            ORDER BY T.cdate desc 
            limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
        `);
    }
    async getTagCount() {
        return await this.tagRepository.createQueryBuilder().getCount();
    }
    async editTag(params) {
        return await this.tagRepository
            .update(params.id, {
            tagname: params.tagname,
            tagdesc: params.tagdesc,
        })
            .then(() => {
            return '操作成功';
        })
            .catch(() => {
            throw new http_decoration_1.CustomException('操作失败');
        });
    }
    async delTag(params) {
        return await this.tagRepository
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
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map