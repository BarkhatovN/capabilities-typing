import { CapabilityTypeEnum } from '../capabilities.enum';
import { Cap1Capability, Cap1CapabilityResult } from './cap1';
import { Cap2Capability, Cap2CapabilityResult } from './cap2';
import { Cap3Capability, Cap3CapabilityResult } from './cap3';

export type CapabilitiesQueryRegistry = {
  [CapabilityTypeEnum.Cap1]: Cap1Capability;
  [CapabilityTypeEnum.Cap2]: Cap2Capability;
  [CapabilityTypeEnum.Cap3]: Cap3Capability;
};

export type CapabilitiesResultRegistry = {
  [CapabilityTypeEnum.Cap1]: Cap1CapabilityResult;
  [CapabilityTypeEnum.Cap2]: Cap2CapabilityResult;
  [CapabilityTypeEnum.Cap3]: Cap3CapabilityResult;
};
