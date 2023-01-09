import { Article } from "../../Entity/Article";
import { ArticleRepositoryInterface } from "../../Repository/ArticleRepositoryInterface";
import { generateUUID as uuid } from "@packages/functions";

export class ArticleRepository implements ArticleRepositoryInterface {
  
  private repository: Article[] = [];

  async add(article: Article): Promise<void> {
    this.repository.push(article);
  }

  async find(uuid: string): Promise<Article> {

    let result: Article | null = null;

    this.repository.forEach((article: Article) => {
      if (article.uuid === uuid) {
        result = article;
      }
    });

    return new Promise((resolve, reject) => {
      if (result === null) {
        reject("Article is null");
      } else {
        resolve(result);
      }
    });
  }

  generateUUID(): string {
    const id = uuid();
    return id;
  }

  async clearRepository() {
    this.repository = [];
  }
}
