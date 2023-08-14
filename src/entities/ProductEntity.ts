import { Either, right } from '../shared/either'
import { IError } from '../shared/iError'
import { AbstractEntity } from './AbstractEntity'

export enum ProductStatus {
  published = 'published',
  trash = 'trash',
}

export interface IProductEntity {
  code: number
  status: ProductStatus
  imported_t: Date
  url: string
  creator: string
  created_t: Date
  last_modified_t: Date
  product_name: string
  quantity: string
  brands: string
  categories: string
  labels: string
  cities: string
  purchase_places: string
  stores: string
  ingredients_text: string
  traces: string
  serving_size: string
  serving_quantity: number
  nutriscore_score: number
  nutriscore_grade: string
  main_category: string
  image_url: string
}

export class ProductEntity extends AbstractEntity<IProductEntity> {
  static create(props: IProductEntity): Either<IError, ProductEntity> {
    const product = new ProductEntity({
      ...props,
    })

    return right(product)
  }
}
