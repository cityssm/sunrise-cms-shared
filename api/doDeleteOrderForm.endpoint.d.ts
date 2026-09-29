export interface DoDeleteOrderFormRequest {
    orderFormId: number;
    username: string;
}
export declare const doDeleteOrderFormEndpoint = "doDeleteOrderForm";
export interface DoDeleteOrderFormResponseData {
    success: boolean;
    recordDelete_timeMillis: number;
}
