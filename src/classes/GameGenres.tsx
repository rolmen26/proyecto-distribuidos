import FetchData from '../helpers/FetchGames'
import { type BaseResponse } from '../interfaces/BaseResponse'

class GameGenres extends FetchData {
  constructor() {
    super()
  }

  params: Record<string, string | undefined> = {}
  endpoint: string = '/games'

  public async getGamesByGenres(genre: string | undefined): Promise<BaseResponse> {
    this.params.genres = genre
    return await super.fetchToEndpoint(this.endpoint, this.params)
  }
}

export default GameGenres
