export interface DoMarkOrderFormAsProcessedRequest {
    orderFormId: number;
    username: string;
}
export declare const doMarkOrderFormAsProcessedEndpoint = "doMarkOrderFormAsProcessed";
export interface DoMarkOrderFormAsProcessedResponse {
    success: boolean;
    recordUpdate_timeMillis: number;
}
