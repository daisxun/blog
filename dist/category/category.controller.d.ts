import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    addCategory(params: any): Promise<any>;
    getCategory(params: any): Promise<any>;
    getAllCategory(): Promise<any>;
    editCategory(params: any): Promise<any>;
    delCategory(params: any): Promise<any>;
}
