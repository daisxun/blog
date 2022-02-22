import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../confs/entity/category.entity';
import { Repository } from 'typeorm';
import { CustomException } from '../common/http.decoration';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async addCategory(params): Promise<any> {
    const newCategory = new Category();
    newCategory.categorydesc = params.categorydesc;
    newCategory.categoryname = params.categoryname;
    newCategory.categorytype = params.categorytype;
    return await this.categoryRepository
      .save(newCategory)
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }

  async getCategoryList(params): Promise<any> {
    const categoryList = await this.categoryRepository.query(`
            select c.id,
            c.categoryname,
            c.categorydesc,
            c.categorytype,
            c.status,
            ( SELECT COUNT(*) FROM article where FIND_IN_SET(c.id, category) ) as artNum,
            c.cdate
            from category as c
            ORDER BY c.cdate desc
            limit ${(params.currentPage - 1) * params.limit}, ${params.limit};
        `);
    return categoryList;
  }

  async getAllCategory(): Promise<any> {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .getMany();
  }
  async getCategoryCount(): Promise<number> {
    return await this.categoryRepository.createQueryBuilder().getCount();
  }

  async editCategpry(params): Promise<any> {
    return await this.categoryRepository
      .update(params.id, {
        categoryname: params.categoryname,
        categorydesc: params.categorydesc,
        categorytype: params.categorytype,
      })
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }

  async delCategory(params): Promise<any> {
    return await this.categoryRepository
      .update(params.id, {
        status: params.status,
      })
      .then(() => {
        return '操作成功';
      })
      .catch(() => {
        throw new CustomException('操作失败');
      });
  }
}
