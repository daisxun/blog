import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    addCategory(params: any): Promise<any>;
    getTag(params: any): Promise<any>;
    getAllTag(params: any): Promise<any>;
    editCategory(params: any): Promise<any>;
    delCategory(params: any): Promise<any>;
}
