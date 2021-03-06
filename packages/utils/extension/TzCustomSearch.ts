import TzRequest from './TzRequest';

export interface DataSourceRequest {
    page: number;
    pageSize: number;
    filter?: any;
    sort?: any;
}

export interface CustomDataSource {
    local: boolean;
    fetchUrl: string;
    loading: boolean;
    request: DataSourceRequest;
    dataSource: any[];
    model: any[];
    jsonp?: CustomJsonpSource;
    total: number;
    extra?: any;
    filter: (filter?: any) => void;
    onDataBinding: (data: any) => void;
    onError: Function;
}

export interface CustomJsonpSource {
    timeout?: number;
    server?: boolean;
    callbackFunction?: string;
}

let customSearch: any = {
    onSearch: function (dataSource: CustomDataSource, schema: any, textSearch: string) {
        var { filter }  = TzRequest.onRequest(schema, textSearch);

        if (dataSource) {
            dataSource.request.page = 1;
            dataSource.filter(filter)
        }
    }
}

export default customSearch