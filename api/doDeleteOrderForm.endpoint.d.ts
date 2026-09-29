export interface DoDeleteOrderFormRequest {
    orderFormId: number;
    username: string;
}
export declare const doDeleteOrderFormEndpoint = "doDeleteOrderForm";
export interface DoDeleteOrderFormResponseData {
    recordDelete_timeMillis: number;
}
