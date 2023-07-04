import FetchData from '../helpers/FetchGames'
import { type GameDetails } from '../interfaces/GameDetail'

class GameDetail extends FetchData {
  constructor() {
    super()
  }

  endpoint: string = '/games/'
  params: object = {}

  public async getGamesByGenres(id: string | undefined): Promise<GameDetails> {
    return await super.fetchGameDetail(this.endpoint + id)
  }
}

export default GameDetail
