"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./entity/user.entity");
const article_entity_1 = require("./entity/article.entity");
const jwt_1 = require("@nestjs/jwt");
const config_service_1 = require("./config.service");
const local_strategy_1 = require("./strategy/local.strategy");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const entityArr = [user_entity_1.User, article_entity_1.Article];
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
const entity = typeorm_1.TypeOrmModule.forFeature(entityArr);
console.log('process.env=================', process.env);
let ConfModule = class ConfModule {
};
ConfModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            entity,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory() {
                    return {
                        type: 'mysql',
                        host: process.env.DATABASE_HOST,
                        port: Number(process.env.DATABASE_PORT),
                        username: process.env.DATABASE_USER,
                        password: process.env.DATABASE_PASSWORD,
                        database: process.env.DATABASE_NAME,
                        entities: entityArr,
                        synchronize: true,
                        charset: 'utf8mb4',
                    };
                },
                imports: undefined,
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory() {
                    return {
                        secret: process.env.JWT_SECRET,
                        signOptions: { expiresIn: '86400s' },
                    };
                },
                imports: undefined,
            }),
        ],
        providers: [config_service_1.ConfigService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [entity, config_service_1.ConfigService, jwt_1.JwtModule],
    })
], ConfModule);
exports.ConfModule = ConfModule;
//# sourceMappingURL=config.module.js.map