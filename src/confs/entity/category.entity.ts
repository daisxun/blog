import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'id' })
  id: number;
  @Column({ type: 'text', comment: '分类名称', nullable: false })
  categoryname: string;
  @Column({ type: 'text', comment: '分类描述', nullable: false })
  categorydesc: string;
  @Column({ type: 'text', comment: '所属板块', nullable: false })
  categorytype: string;
  @Column({ type: 'int', comment: '分类状态', nullable: false, default: 0 })
  status: number;
  @Column({
    type: 'bigint',
    comment: '创建时间',
    nullable: false,
    default: new Date().getTime(),
  })
  cdate: number;
}
