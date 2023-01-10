
export class Post {

  constructor(
    public readonly uuid: string,
    public readonly title: string,
    public readonly body: string,
    public readonly slug: string,
    public readonly publishedAt: Date,
    public readonly online: boolean,
  )
  {

  }

}