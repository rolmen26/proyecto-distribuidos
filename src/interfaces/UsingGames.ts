import { type BaseResponse } from './BaseResponse'

interface UsingGames {
  getGames: (param: string | null) => Promise<BaseResponse>
}

export default UsingGames
