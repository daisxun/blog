import { Link } from '../confs/entity/link.entity';
import { Repository } from 'typeorm';
export declare class LinkService {
    private readonly linkRepository;
    constructor(linkRepository: Repository<Link>);
    addLink(params: any): Promise<any>;
    getLinkCount(): Promise<number>;
    getLinkList(params: any): Promise<any>;
    updateLink(params: any): Promise<any>;
    deleteLink(params: any): Promise<any>;
}
