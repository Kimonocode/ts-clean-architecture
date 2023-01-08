import { Article } from "../../Entity/Article";
import { ArticleRepositoryInterface } from "../../Repository/ArticleRepositoryInterface";
import { WriteAnArticleRequest } from "./Dto/WriteAnArticleRequest";
import { WriteAnArticleResponse } from "./Dto/WriteAnArticleResponse";
import { WriteAnArticleInterface } from "./Interfaces/WriteAnArticleInterface";
import { WriteAnArticlePresenter } from "./Interfaces/WriteAnArticlePresenter";

export class WriteAnArticle implements WriteAnArticleInterface {
  
  constructor( private repository: ArticleRepositoryInterface )
  {

  }

  async execute( request: WriteAnArticleRequest, presenter: WriteAnArticlePresenter | null ): Promise<void> {

    const response = new WriteAnArticleResponse();
    /**
     * Implement Logic for response here .... 
     */
    
      
    /**
     * Response is good so... ->
     */

    // const uuid = this.repository.generateUUID(); // -> generate random uuid

    // -> Create a new instance of Article
    //const article = new Article(uuid, request.title, request.body, request.slug ,  request.publishedAt, request.online);
    // -> Add Article to Repository
    //await this.repository.add(article);
    // -> Give new Article Created to Response
    //response.article = article;
    // -> Presenter present response to VIEW MODEL
    //presenter.presentWriteAnArticleResponse(response);

    // -> USE CASE JOB FINISHED ...
  }

}
