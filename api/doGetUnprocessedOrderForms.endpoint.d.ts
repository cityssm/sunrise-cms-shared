import type { DateString, TimeString } from '@cityssm/utils-datetime';
export declare const doGetUnprocessedOrderFormsEndpoint = "doGetUnprocessedOrderForms";
type NumberString = `${number}`;
type AllOrNothing<T> = {
    [K in keyof T]?: never;
} | T;
type OrderFormFuneralHomeData = ({
    funeralHomeId: '-1';
    funeralHomeName: string;
    funeralHomeAddress1: string;
    funeralHomeAddress2: string;
    funeralHomeCity: string;
    funeralHomeProvince: string;
    funeralHomePostalCode: string;
    funeralDirectorName: string;
} | {
    funeralHomeId: '';
} | {
    funeralHomeId: Omit<NumberString, '-1'>;
    funeralDirectorName: string;
}) & {
    funeralHomeIdText: string;
};
type OrderFormDeceasedData = AllOrNothing<{
    deathDateString: DateString;
    deathPlace: string;
    funeralDateString: DateString;
    funeralTimeString: TimeString;
}> & {
    birthDateString: DateString;
    birthPlace: string;
} & ({
    deceasedName: string;
    deceasedAddress1: string;
    deceasedAddress2?: string;
    deceasedCity: string;
    deceasedProvince: string;
    deceasedPostalCode: string;
} | {
    deceasedSameAsPurchaser: 'true';
});
export type OrderFormData = OrderFormDeceasedData & OrderFormFuneralHomeData & {
    submitterEmail: string;
    submitterName: string;
    contractTypeId: NumberString;
    contractTypeIdText: string;
    purchaserName: string;
    purchaserAddress1: string;
    purchaserAddress2?: string;
    purchaserCity: string;
    purchaserProvince: string;
    purchaserPostalCode: string;
    purchaserEmail: string;
    purchaserPhoneNumber: string;
    purchaserRelationship: string;
    intermentContainerTypeId: NumberString;
    intermentContainerTypeIdText: string;
    intermentDepthId: NumberString;
    intermentDepthIdText: string;
    cemeteryId: NumberString;
    cemeteryIdText: string;
    burialSiteName: string;
    burialSiteNamePrefix: string;
    directionOfArrival?: '' | 'E' | 'N' | 'NE' | 'NW' | 'S' | 'SE' | 'SW' | 'W';
    directionOfArrivalText: string;
    committalTypeId: '' | NumberString;
    committalTypeIdText: string;
    [key: `serviceTypeId-${number}`]: 'false' | 'true';
    [key: `serviceTypeIdText-${number}`]: string;
    comment: string;
};
export interface UnprocessedOrderForm {
    orderFormId: number;
    orderFormKey: string;
    orderFormData: OrderFormData;
    recordCreate_ipAddress: string;
    recordCreate_timeMillis: number;
}
export interface DoGetUnprocessedOrderFormsResponseData {
    orderForms: UnprocessedOrderForm[];
}
export {};
