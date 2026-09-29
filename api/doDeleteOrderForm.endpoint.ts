export interface DoDeleteOrderFormRequest {
  orderFormId: number
  username: string
}

export const doDeleteOrderFormEndpoint = 'doDeleteOrderForm'

export interface DoDeleteOrderFormResponse {
  success: boolean

  recordDelete_timeMillis: number
}
