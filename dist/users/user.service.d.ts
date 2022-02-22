import { Repository } from 'typeorm';
import { User } from '../confs/entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    userRegister(params: any): Promise<any>;
    userInfoUpdate(params: any): Promise<any>;
}
