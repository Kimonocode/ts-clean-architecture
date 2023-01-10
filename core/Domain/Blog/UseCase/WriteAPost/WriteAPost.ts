import { Post } from "../../Entity/Post";
import type { PostRepositoryInterface } from "../../Repository/PostRepositoryInterface";
import type { WriteAPostPresenter } from "./Contracts/WriteAPostPresenter";
import type { WriteAPostRequest } from "./Dto/WriteAPostRequest";
import { WritePostResponse } from "./Dto/WriteAPostResponse";

export class WriteAPost {

  private titleMinLength: number = 20;
  private titleMaxLength: number = 100;
  private bodyMinLength: number = 150;
  private bodymaxLenght: number = 30000;

  constructor(private repository: PostRepositoryInterface) {

  }

  async execute(request: WriteAPostRequest, presenter: WriteAPostPresenter) {

    const response = new WritePostResponse();

    let hasError: boolean = false;

    if (request.title.length < this.titleMinLength) {
      hasError = true;
      response.errors?.push({
        field: 'title',
        message: `Le titre de votre article doit contenir au moins ${this.titleMinLength} caractères.`
      });
    }

    if (request.title.length > this.titleMaxLength) {
      hasError = true;
      response.errors?.push({
        field: 'title',
        message: `Le titre de votre article ne peut pas dépasser ${this.titleMaxLength} caractères.`
      });
    }

    if (request.body.length < this.bodyMinLength) {
      hasError = true;
      response.errors?.push({
        field: 'body',
        message: `Le contenu de votre article doit contenir au moins ${this.bodymaxLenght} caractères.`
      });
    }

    if (request.body.length > this.bodymaxLenght) {
      hasError = true;
      response.errors?.push({
        field: 'body',
        message: `Le contenu de votre article ne peut pas dépasser ${this.bodymaxLenght} caractères.`
      });
    }

    // Create new Post
    if (!hasError) {
      const uuid = await this.repository.generateUUID();
      const post = new Post(uuid, request.title, request.body, request.slug, request.publishedAt, request.online);
      await this.repository.add(post);
      response.post = post;
    }

    // -> Present ...
    presenter.presentWriteAPost(response);

  }

}