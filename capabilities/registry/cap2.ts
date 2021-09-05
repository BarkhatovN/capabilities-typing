// Типизируем cap2

import { CapabilityTypeEnum } from '../capabilities.enum';
import {
  SingleCapabilityQuery,
  SingleCapabilityResult
} from '../capability.interface';

// Типизируем поле с сущностями ответа капабилити

export type Cap2Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap2,
  {
    userId: number;
  }
>;

export type Cap2CapabilityResult = SingleCapabilityResult<
  CapabilityTypeEnum.Cap2,
  {
    entity_1: boolean;
  }
>;
