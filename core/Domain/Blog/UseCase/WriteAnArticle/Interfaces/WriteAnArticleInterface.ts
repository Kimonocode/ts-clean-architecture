import { ArticleRepositoryInterface } from "../../../Repository/ArticleRepositoryInterface";
import { WriteAnArticleRequest } from "../Dto/WriteAnArticleRequest";
import { WriteAnArticlePresenter } from "./WriteAnArticlePresenter";


export interface WriteAnArticleInterface {

  execute(request: WriteAnArticleRequest, presenter: WriteAnArticlePresenter):Promise<void>

}