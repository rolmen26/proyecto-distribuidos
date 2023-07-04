import FetchData from '../helpers/FetchGames'
import { type BaseResponse } from '../interfaces/BaseResponse'

class PopularGames extends FetchData {
  constructor() {
    super()
  }

  endpoint: string = '/games'
  params: object = { ordering: '-added' }

  public async getPopularGames(): Promise<BaseResponse> {
    return await super.fetchToEndpoint(this.endpoint, this.params)
  }
}

export default PopularGames
