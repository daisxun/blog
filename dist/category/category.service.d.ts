import { Category } from '../confs/entity/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    addCategory(params: any): Promise<any>;
    getCategoryList(params: any): Promise<any>;
    getAllCategory(): Promise<any>;
    getCategoryCount(): Promise<number>;
    editCategpry(params: any): Promise<any>;
    delCategory(params: any): Promise<any>;
}
