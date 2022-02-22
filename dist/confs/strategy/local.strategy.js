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
exports.LocalStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const http_decoration_1 = require("../../common/http.decoration");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'local') {
    constructor(userRepository) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.userRepository = userRepository;
    }
    async validate(username, password) {
        console.log('payload', username);
        const loginPwd = process.env.AUTH_PWD_SALT + password;
        const user = await this.userRepository
            .createQueryBuilder('user')
            .where('user.username = :username', {
            username: username,
        })
            .addSelect('user.password')
            .getOne();
        if (!user) {
            throw new http_decoration_1.CustomException('用户不存在');
        }
        if (loginPwd !== user.password) {
            throw new http_decoration_1.CustomException('密码不正确');
        }
        delete user.password;
        return user;
    }
};
LocalStrategy = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map