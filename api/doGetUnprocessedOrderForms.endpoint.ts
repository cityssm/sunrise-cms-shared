export const doGetUnprocessedOrderFormsEndpoint = 'doGetUnprocessedOrderForms'

export interface UnprocessedOrderForm {
  orderFormId: number
  orderFormKey: string

  orderFormData: Record<string, unknown>

  recordCreate_ipAddress: string
  recordCreate_timeMillis: number
}

export interface DoGetUnprocessedOrderFormsResponseData {
  orderForms: UnprocessedOrderForm[]
}
