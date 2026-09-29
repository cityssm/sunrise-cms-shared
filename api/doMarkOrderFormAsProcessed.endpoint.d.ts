export interface DoMarkOrderFormAsProcessedRequest {
    orderFormId: number;
    contractId?: number;
    username: string;
}
export declare const doMarkOrderFormAsProcessedEndpoint = "doMarkOrderFormAsProcessed";
export interface DoMarkOrderFormAsProcessedResponseData {
    recordUpdate_timeMillis: number;
}
