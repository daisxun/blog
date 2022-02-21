import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryColumn({ type: 'bigint', comment: 'id', nullable: false })
  id: number;
  @Column({ type: 'text', comment: '标题', nullable: false })
  artTitle: string;
  @Column({ type: 'text', comment: '板块', nullable: false })
  artType: string;
  @Column({ type: 'text', comment: '摘要', nullable: false })
  abstract: string;
  @Column({ type: 'text', comment: '分类', nullable: false })
  category: string;
  @Column({ type: 'text', comment: '标签', nullable: false })
  tag: string;
  @Column({ type: 'text', comment: '缩略图', nullable: true })
  thumbnail: string;
  @Column({ type: 'text', comment: '内容', nullable: false })
  content: string;
  @Column({ type: 'bigint', comment: '发布时间', nullable: false })
  cdate: number;
  @Column({ type: 'bigint', comment: '修改时间', nullable: false })
  editdate: number;
  @Column({ type: 'int', comment: '浏览量', nullable: false, default: 0 })
  pv: number;
  @Column({ type: 'int', comment: '留言数', nullable: false, default: 0 })
  discuss: number;
  @Column({ type: 'int', comment: '文状态', nullable: false, default: 0 })
  status: number;
  @Column({ type: 'int', comment: '评论', nullable: false, default: 1 })
  artDiscuss: number;
}
