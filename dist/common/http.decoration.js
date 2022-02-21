"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
const common_1 = require("@nestjs/common");
class CustomException extends common_1.HttpException {
    constructor(message, errcode) {
        super({ message: message, code: errcode ? errcode : common_1.HttpStatus.OK }, common_1.HttpStatus.OK);
    }
}
exports.CustomException = CustomException;
//# sourceMappingURL=http.decoration.js.map