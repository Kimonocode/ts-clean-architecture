import type { Post } from "../Entity/Post";




export interface PostRepositoryInterface {

  add(post: Post):Promise<void>;

  find(uuid: string):Promise<Post> | undefined;

  findBy(value: string):Promise<Post> | undefined;

  get(uuid: string):Promise<Post> | undefined;

  getAll():Promise<Post[]>

  update(post: Post):Promise<void>;

  generateUUID():Promise<string>;

} 