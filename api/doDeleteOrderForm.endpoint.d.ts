export interface DoDeleteOrderFormRequest {
    orderFormId: number;
    username: string;
}
export declare const doDeleteOrderFormEndpoint = "doDeleteOrderForm";
export interface DoDeleteOrderFormResponse {
    success: boolean;
    recordDelete_timeMillis: number;
}
