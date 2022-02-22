import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly linkService;
    constructor(linkService: CommentService);
    getCommentsList(params: any): Promise<any>;
    editLink(params: any): Promise<any>;
}
