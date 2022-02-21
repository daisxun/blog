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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../confs/entity/user.entity");
const http_decoration_1 = require("../common/http.decoration");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async userRegister(params) {
        const pwd = process.env.AUTH_PWD_SALT + params.password;
        const oldUser = await this.userRepository.findOne({
            username: params.username,
        });
        if (oldUser) {
            return {
                code: 200,
                message: '用户已存在',
            };
        }
        else {
            const newUser = new user_entity_1.User();
            newUser.username = params.username;
            newUser.password = pwd;
            return await this.userRepository
                .save(newUser)
                .then(() => {
                return {
                    code: 200,
                    message: '添加用户成功',
                };
            })
                .catch(() => {
                throw new http_decoration_1.CustomException('添加失败');
            });
        }
    }
    async userInfoUpdate(params) {
        const updateInfo = {
            nickname: params.nickname,
            signature: params.signature,
            avatar: params.avatar,
            password: '',
        };
        return updateInfo;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map