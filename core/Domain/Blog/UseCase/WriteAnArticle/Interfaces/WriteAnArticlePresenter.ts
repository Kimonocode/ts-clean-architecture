import { WriteAnArticleResponse } from "../Dto/WriteAnArticleResponse";

export interface WriteAnArticlePresenter {

  presentWriteAnArticleResponse(response: WriteAnArticleResponse): void

}