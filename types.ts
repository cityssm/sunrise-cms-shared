export interface PortalBurialSiteType {
  burialSiteType: string
  burialSiteTypeId: string
}

export interface PortalCemetery {
  cemeteryId: string
  cemeteryKey: string
  cemeteryName: string

  cemeteryAddress1: string
  cemeteryAddress2: string
  cemeteryCity: string
  cemeteryPostalCode: string
  cemeteryProvince: string
}

export interface PortalCommittalType {
  committalType: string
  committalTypeId: string
}

export interface PortalContractType {
  contractType: string
  contractTypeId: string
  isPreneed: boolean
}

export interface PortalFuneralHome {
  funeralHomeId: string
  funeralHomeName: string

  funeralHomeAddress1: string
  funeralHomeAddress2: string
  funeralHomeCity: string
  funeralHomePostalCode: string
  funeralHomeProvince: string

  funeralHomePhoneNumber: string
}

export interface PortalIntermentContainerType {
  intermentContainerType: string
  intermentContainerTypeId: string
}

export interface PortalIntermentDepth {
  intermentDepth: string
  intermentDepthId: string
}

export interface PortalServiceType {
  serviceType: string
  serviceTypeId: string
}
