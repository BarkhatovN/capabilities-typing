// Типизируем cap1

import { CapabilityTypeEnum } from '../capabilities.enum';
import {
  SingleCapabilityQuery,
  SingleCapabilityResult
} from '../capability.interface';

// Типизируем поле с сущностями ответа капабилити

export type Cap1Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap1,
  {
    profileId: number;
  }
>;

export type Cap1CapabilityResult = SingleCapabilityResult<
  CapabilityTypeEnum.Cap1,
  {
    client: boolean;
    entity_1: boolean;
  }
>;
