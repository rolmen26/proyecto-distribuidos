import FetchData from "../helpers/FetchGames"
import { BaseResponse } from "../interfaces/BaseResponse";
import { GameInfo } from "../interfaces/GameInfo";

class PopularGames extends FetchData {

    constructor() {
        super();
    }

    endpoint: string = "/games";
    params: string = "ordering='-added'";

    public async getPopularGames(): Promise<BaseResponse> {
        return await super.fetchToEndpoint(this.endpoint, this.params);
    }
}

export default PopularGames;