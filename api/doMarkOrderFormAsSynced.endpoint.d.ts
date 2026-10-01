export interface DoMarkOrderFormAsSyncedRequest {
    orderFormId: number;
    username: string;
}
export declare const doMarkOrderFormAsSyncedEndpoint = "doMarkOrderFormAsSynced";
export interface DoMarkOrderFormAsSyncedResponseData {
    recordSync_timeMillis: number;
}
