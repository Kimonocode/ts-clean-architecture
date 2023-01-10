import { Post } from "../../Entity/Post";
import { PostRepositoryInterface } from "../../Repository/PostRepositoryInterface";


export class FakePostRepository implements PostRepositoryInterface {
  
  add(post: Post): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findBy(value: string): Promise<Post> | undefined {
    throw new Error("Method not implemented.");
  }
  get(uuid: string): Promise<Post> | undefined {
    throw new Error("Method not implemented.");
  }
  update(post: Post): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Post[]> {
    throw new Error("Method not implemented.");
  }

  find(uuid: string): Promise<Post> | undefined {
    throw new Error("Method not implemented.");
  }

  generateUUID(): Promise<string> {
    throw new Error("Method not implemented.");
  }

}