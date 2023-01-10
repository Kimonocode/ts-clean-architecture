
export class WriteAPostRequest  {

  constructor(
    public readonly title: string,
    public readonly body: string,
    public readonly slug: string,
    public readonly publishedAt: Date,
    public readonly online: boolean,
  )
  {

  }
  

}