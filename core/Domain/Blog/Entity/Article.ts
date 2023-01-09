export class Article {

  constructor( 
    readonly uuid: string, 
    readonly title: string, 
    readonly body: string,
    readonly slug: string,
    readonly publishedAt:Date | string,
    readonly online: boolean
  )
  {

  }

}