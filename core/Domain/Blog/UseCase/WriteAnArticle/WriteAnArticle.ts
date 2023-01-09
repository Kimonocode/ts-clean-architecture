import { Article } from "../../Entity/Article";
import { ArticleRepositoryInterface } from "../../Repository/ArticleRepositoryInterface";
import { WriteAnArticleRequest } from "./Dto/WriteAnArticleRequest";
import { WriteAnArticleResponse } from "./Dto/WriteAnArticleResponse";
import { WriteAnArticleInterface } from "./Interfaces/WriteAnArticleInterface";
import { WriteAnArticlePresenter } from "./Interfaces/WriteAnArticlePresenter";

/*
 * (c) Barloy Ronald <ronald.github.dev@gmail.com>
 *
 * Write An Article Use Case whit Clean Architecture implementation
 * 
 * Logic ... ->
 * 
 * The class has an execute method with two important parameters: 
 * A Request (Dto) and a Presenter (Port). Once the logic is executed;
 * A Response (Dto) is passed to the presenter which itself will present it to a View Model
 */

export class WriteAnArticle implements WriteAnArticleInterface {

  // Nota bene -> "Our classes should depend on abstractions, not concrete details. — Robert C. Martin"
  constructor( private repository: ArticleRepositoryInterface )
  {
    
  }

  async execute( request: WriteAnArticleRequest, output: WriteAnArticlePresenter | null ): Promise<void> {

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
    // -> output present response to VIEW MODEL
    //output.presentWriteAnArticleResponse(response);

    // -> USE CASE JOB FINISHED ...
  }

}
