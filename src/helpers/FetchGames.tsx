import Conection from "../api/RawgClient"
import { BaseResponse } from "../interfaces/BaseResponse"

abstract class FetchData extends Conection {

    public async fetchToEndpoint(endpoint: string, params: object): Promise<BaseResponse> {
        let rsp = await super.clientInstance().get(endpoint, {
            params: {
                key: process.env['REACT_APP_API_KEY'],
                ...params
            }
        });

        return rsp.data
    }

    public async fetchNextPrevious(url: string): Promise<BaseResponse> {
        const rsp = await super.clientInstance().get(url);

        return rsp.data;
    }

}

export default FetchData;