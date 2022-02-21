import { Strategy } from 'passport-local';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(username: string, password: string): Promise<User>;
}
export {};
