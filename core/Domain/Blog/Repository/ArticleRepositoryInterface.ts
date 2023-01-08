import { Article } from "../Entity/Article";

export interface ArticleRepositoryInterface {

  find(uuid: string):Promise<Article>

  add(article: Article):Promise<void>

  generateUUID():string

  clearRepository():Promise<void>

}