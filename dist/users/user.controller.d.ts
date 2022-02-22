import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class UserController {
    private readonly jwtService;
    private readonly userServe;
    constructor(jwtService: JwtService, userServe: UserService);
    register(params: any): Promise<object>;
    login(params: any): Promise<object>;
}
