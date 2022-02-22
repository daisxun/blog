import { Comment } from '../confs/entity/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    getCommentsCount(): Promise<number>;
    getCommentsList(params: any): Promise<any>;
    getCommentById(id: any): Promise<any>;
    updateComment(params: any): Promise<any>;
}
