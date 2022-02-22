import { Repository } from 'typeorm';
import { Tag } from '../confs/entity/tag.entity';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    addTag(params: any): Promise<any>;
    getAllTag(params: any): Promise<any>;
    getTagList(params: any): Promise<any>;
    getTagCount(): Promise<number>;
    editTag(params: any): Promise<any>;
    delTag(params: any): Promise<any>;
}
