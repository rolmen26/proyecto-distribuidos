import FetchData from "../helpers/FetchGames"
import { BaseResponse } from "../interfaces/BaseResponse";

class TrendingGames extends FetchData {

    constructor() {
        super();
    }

    endpoint: string = "/games/lists/main";
    params: object = { page_size: 20 };

    public async getTrendingGames(): Promise<BaseResponse> {
        return await super.fetchToEndpoint(this.endpoint, this.params);
    }
}

export default TrendingGames;