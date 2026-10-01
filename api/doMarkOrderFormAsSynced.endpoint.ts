export interface DoMarkOrderFormAsSyncedRequest {
  orderFormId: number
}

export const doMarkOrderFormAsSyncedEndpoint = 'doMarkOrderFormAsSynced'

export interface DoMarkOrderFormAsSyncedResponseData {
  recordSync_timeMillis: number
}
