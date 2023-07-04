import FetchData from '../helpers/FetchGames'
import { type BaseResponse } from '../interfaces/BaseResponse'

class GameSeries extends FetchData {
  constructor() {
    super()
  }

  params: object = { page_size: 50 }
  endpoint: string = '/games/'

  public async getGamesBySerie(seriesName: string | undefined): Promise<BaseResponse> {
    return await super.fetchToEndpoint(this.endpoint + seriesName + '/game-series', this.params)
  }
}

export default GameSeries
