import { Post } from "../../../Entity/Post";

type Error = { field: string, message: string };

export class WritePostResponse {

  public post?: Post;
  public errors?: Error[];

}