export interface DoMarkOrderFormAsProcessedRequest {
  orderFormId: number

  contractId?: number
  username: string

}

export const doMarkOrderFormAsProcessedEndpoint = 'doMarkOrderFormAsProcessed'

export interface DoMarkOrderFormAsProcessedResponse {
  success: boolean

  recordUpdate_timeMillis: number
}
