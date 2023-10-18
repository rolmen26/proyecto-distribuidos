import Conection from '../api/Conection'
import { type BaseResponse } from '../interfaces/BaseResponse'
import { type GameDetails } from '../interfaces/GameDetail'

abstract class FetchData extends Conection {
  public async fetchToEndpoint (endpoint: string, params: object): Promise<BaseResponse> {
    const rsp = await super.clientInstance().get(endpoint, {
      params: {
        key: import.meta.env.VITE_API_KEY,
        ...params
      }
    })

    return rsp.data
  }

  /**
   *
   * @param endpoint
   * @returns
   */
  public async fetchGameDetail (endpoint: string): Promise<GameDetails> {
    const rsp = await super.clientInstance().get(endpoint, {
      params: {
        key: import.meta.env.VITE_API_KEY
      }
    })
    return rsp.data
  }

  public async fetchNextPrevious (url: string): Promise<BaseResponse> {
    const rsp = await super.clientInstance().get(url)

    return rsp.data
  }
}

export default FetchData
