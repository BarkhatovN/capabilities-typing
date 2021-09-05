// Типизируем cap3

import { CapabilityTypeEnum } from '../capabilities.enum';
import {
  SingleCapabilityQuery,
  SingleCapabilityResult
} from '../capability.interface';

// Типизируем поле с сущностями ответа капабилити

export type Cap3Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap3,
  {
    userId: number;
    profileId: string;
  }
>;

export type Cap3CapabilityResult = SingleCapabilityResult<
  CapabilityTypeEnum.Cap3,
  {
    entity_1: boolean;
    entity_2: boolean;
    entity_3: boolean;
  }
>;
