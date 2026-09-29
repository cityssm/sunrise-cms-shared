export interface DoDeleteOrderFormRequest {
  orderFormId: number
  username: string
}

export const doDeleteOrderFormEndpoint = 'doDeleteOrderForm'

export interface DoDeleteOrderFormResponseData {
  recordDelete_timeMillis: number
}
