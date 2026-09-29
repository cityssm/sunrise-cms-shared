export interface DoMarkOrderFormAsProcessedRequest {
  orderFormId: number

  contractId?: number
  username: string

}

export const doMarkOrderFormAsProcessedEndpoint = 'doMarkOrderFormAsProcessed'

export interface DoMarkOrderFormAsProcessedResponseData {
  success: boolean

  recordUpdate_timeMillis: number
}
