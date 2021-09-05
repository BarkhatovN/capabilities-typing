import { CapabilityTypeEnum } from './capabilities.enum';

type CapabilityResultEntities = {
  [key: string]: boolean;
};

type CapabilityQueryContext = {
  [key: string]: string | number | boolean | null;
};

// Типизируем запрос
export interface SingleCapabilityQuery<
  Name extends CapabilityTypeEnum,
  Context extends CapabilityQueryContext
> {
  /**
   * Название способности
   */
  name: Name;

  /**
   * Детали по ней
   */
  context: Context;
}

// Типизируем ответ
export interface SingleCapabilityResult<
  Name extends CapabilityTypeEnum,
  Entities extends CapabilityResultEntities
> {
  /**
   * Название способности
   */
  name: Name;

  /**
   * Детали по ней
   */
  entities: Entities;
}
