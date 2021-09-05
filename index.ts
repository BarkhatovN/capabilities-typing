// Import stylesheets
import { CapabilityTypeEnum } from './capabilities/capabilities.enum';
import { getCap, getCaps } from './capabilities/capability.service';
import { Cap1Capability } from './capabilities/registry/cap1';
import { Cap2Capability } from './capabilities/registry/cap2';
import { Cap3Capability } from './capabilities/registry/cap3';
import './style.css';

// #region Получение 1 способности
const resultCap1 = getCap<CapabilityTypeEnum.Cap1>({
  name: CapabilityTypeEnum.Cap1,
  context: {
    profileId: 1
  }
});
// #endregion

// #region Получение 3 способностей
const cap1Query: Cap1Capability = {
  name: CapabilityTypeEnum.Cap1,
  context: {
    profileId: 1
  }
};

const cap3Query: Cap3Capability = {
  name: CapabilityTypeEnum.Cap3,
  context: {
    profileId: '1',
    userId: 2
  }
};

const cap2Query: Cap2Capability = {
  name: CapabilityTypeEnum.Cap2,
  context: {
    userId: 1
  }
};

const result3 = getCaps<
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap3
>(cap1Query, cap2Query, cap3Query);
// #endregion Получение 3 способностей
