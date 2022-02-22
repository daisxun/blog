import { LinkService } from './link.service';
export declare class LinkController {
    private readonly linkService;
    constructor(linkService: LinkService);
    addLink(params: any): Promise<any>;
    getLink(params: any): Promise<any>;
    editLink(params: any): Promise<any>;
    updateLinkStatus(params: any): Promise<any>;
}
