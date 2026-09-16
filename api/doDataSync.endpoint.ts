import type {
  PortalBurialSiteType,
  PortalCemetery,
  PortalCommittalType,
  PortalContractType,
  PortalFuneralHome,
  PortalIntermentContainerType,
  PortalIntermentDepth,
  PortalServiceType
} from '../types.js'

export const doDataSyncEndpoint = 'doDataSync'

export interface DoDataSyncRequest {
  burialSiteTypes: PortalBurialSiteType[]
  cemeteries: PortalCemetery[]
  committalTypes: PortalCommittalType[]
  contractTypes: PortalContractType[]
  funeralHomes: PortalFuneralHome[]
  intermentContainerTypes: PortalIntermentContainerType[]
  intermentDepths: PortalIntermentDepth[]
  serviceTypes: PortalServiceType[]
}

export interface DoDataSyncResponseData {}
