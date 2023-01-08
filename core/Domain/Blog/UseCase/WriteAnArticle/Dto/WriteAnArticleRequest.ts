

export class WriteAnArticleRequest {

  constructor(
    readonly title:string, 
    readonly body:string,
    readonly slug: string,
    readonly publishedAt:Date,
    readonly online: boolean,
  )
  {

  }


}