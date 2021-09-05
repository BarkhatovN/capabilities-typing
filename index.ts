// Import stylesheets
import './style.css';

// Настраиваем реестр имен способносей
export enum CapabilityTypeEnum {
  Cap1 = 'cap1',
  Cap2 = 'cap2',
  Cap3 = 'cap3'
}

export type CapabilityResultEntities = {
  [key: string]: boolean;
};

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

export type CapabilityQueryContext = {
  [key: string]: string | number | boolean | null;
};

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

// Типизируем cap1
// Типизируем контекст запроса капабилити
interface Cap1QueryContext extends CapabilityQueryContext {
  profileId: number;
}

// Типизируем поле с сущностями ответа капабилити
interface Cap1ResultEntities extends CapabilityResultEntities {
  client: boolean;
  entity_1: boolean;
}

export type Cap1Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap1,
  Cap1QueryContext
>;
export type Cap1CapabilityResult = SingleCapabilityResult<
  CapabilityTypeEnum.Cap1,
  Cap1ResultEntities
>;

const resultCap1 = getCap<CapabilityTypeEnum.Cap1>({
  name: CapabilityTypeEnum.Cap1,
  context: {
    profileId: 1
  }
});

// Типизируем cap2

// Типизируем контекст запроса капабилити
export interface Cap2QueryContext extends CapabilityQueryContext {
  profileId2: number;
}

// Типизируем поле с сущностями ответа капабилити
export interface Cap2ResultEntities extends CapabilityResultEntities {
  client2: boolean;
}
export type Cap2Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap2,
  Cap2QueryContext
>;
export type Cap2CapabilityResult = SingleCapabilityResult<
  CapabilityTypeEnum.Cap2,
  Cap2ResultEntities
>;

// Типизируем cap3

// Типизируем контекст запроса капабилити
export interface Cap3QueryContext extends CapabilityQueryContext {
  profileId3: number;
}

// Типизируем поле с сущностями ответа капабилити
export interface Cap3ResultEntities extends CapabilityResultEntities {
  client2: boolean;
}
export type Cap3Capability = SingleCapabilityQuery<
  CapabilityTypeEnum.Cap3,
  Cap3QueryContext
>;

export type CapabilitiesQueryRegistry = {
  [CapabilityTypeEnum.Cap1]: Cap1Capability;
  [CapabilityTypeEnum.Cap2]: Cap2Capability;
  [CapabilityTypeEnum.Cap3]: Cap3Capability;
};

export type CapabilitiesResultRegistry = {
  [CapabilityTypeEnum.Cap1]: SingleCapabilityResult<
    CapabilityTypeEnum.Cap1,
    Cap1ResultEntities
  >;
  [CapabilityTypeEnum.Cap2]: SingleCapabilityResult<
    CapabilityTypeEnum.Cap2,
    Cap2ResultEntities
  >;
  [CapabilityTypeEnum.Cap3]: SingleCapabilityResult<
    CapabilityTypeEnum.Cap3,
    Cap3ResultEntities
  >;
};

// метод получения капабилити
function getCaps<
  A1 extends keyof CapabilitiesQueryRegistry,
  A2 extends keyof CapabilitiesQueryRegistry,
  A3 extends keyof CapabilitiesQueryRegistry,
  A4 extends keyof CapabilitiesQueryRegistry,
  A5 extends keyof CapabilitiesQueryRegistry,
  A6 extends keyof CapabilitiesQueryRegistry,
  A7 extends keyof CapabilitiesQueryRegistry,
  A8 extends keyof CapabilitiesQueryRegistry
>(
  cap1: CapabilitiesQueryRegistry[A1],
  cap2: CapabilitiesQueryRegistry[A2],
  cap3: CapabilitiesQueryRegistry[A3],
  cap4: CapabilitiesQueryRegistry[A4],
  cap5: CapabilitiesQueryRegistry[A5],
  cap6: CapabilitiesQueryRegistry[A6],
  cap7: CapabilitiesQueryRegistry[A7],
  cap8: CapabilitiesQueryRegistry[A8]
): [
  CapabilitiesResultRegistry[A1],
  CapabilitiesResultRegistry[A2],
  CapabilitiesResultRegistry[A3],
  CapabilitiesResultRegistry[A4],
  CapabilitiesResultRegistry[A5],
  CapabilitiesResultRegistry[A6],
  CapabilitiesResultRegistry[A7],
  CapabilitiesResultRegistry[A8]
];
function getCaps<
  A1 extends keyof CapabilitiesQueryRegistry,
  A2 extends keyof CapabilitiesQueryRegistry,
  A3 extends keyof CapabilitiesQueryRegistry,
  A4 extends keyof CapabilitiesQueryRegistry
>(
  cap1: CapabilitiesQueryRegistry[A1],
  cap2: CapabilitiesQueryRegistry[A2],
  cap3: CapabilitiesQueryRegistry[A3],
  cap4: CapabilitiesQueryRegistry[A4]
): [
  CapabilitiesResultRegistry[A1],
  CapabilitiesResultRegistry[A2],
  CapabilitiesResultRegistry[A3],
  CapabilitiesResultRegistry[A4]
];
function getCaps<
  A1 extends keyof CapabilitiesQueryRegistry,
  A2 extends keyof CapabilitiesQueryRegistry,
  A3 extends keyof CapabilitiesQueryRegistry
>(
  cap1: CapabilitiesQueryRegistry[A1],
  cap2: CapabilitiesQueryRegistry[A2],
  cap3: CapabilitiesQueryRegistry[A3]
): [
  CapabilitiesResultRegistry[A1],
  CapabilitiesResultRegistry[A2],
  CapabilitiesResultRegistry[A3]
];
function getCaps<
  A1 extends keyof CapabilitiesQueryRegistry,
  A2 extends keyof CapabilitiesQueryRegistry
>(
  cap1: CapabilitiesQueryRegistry[A1],
  cap2: CapabilitiesQueryRegistry[A2]
): [CapabilitiesResultRegistry[A1], CapabilitiesResultRegistry[A2]];
function getCaps<A1 extends keyof CapabilitiesQueryRegistry>(
  cap1: CapabilitiesQueryRegistry[A1]
): CapabilitiesResultRegistry[A1] {
  return ([] as any) as CapabilitiesResultRegistry[A1];
}

function getCap<A1 extends keyof CapabilitiesQueryRegistry>(
  cap1: CapabilitiesQueryRegistry[A1]
): CapabilitiesResultRegistry[A1] {
  return ([] as any) as CapabilitiesResultRegistry[A1];
}

const cap1Query: Cap1Capability = {
  name: CapabilityTypeEnum.Cap1,
  context: {
    profileId: 1
  }
};

const cap3Query: Cap3Capability = {
  name: CapabilityTypeEnum.Cap3,
  context: {
    profileId3: 1
  }
};

const cap2Query: Cap2Capability = {
  name: CapabilityTypeEnum.Cap2,
  context: {
    profileId2: 1
  }
};

const result3 = getCaps<
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap3
>(cap1Query, cap2Query, cap3Query);
const result2 = getCaps<CapabilityTypeEnum.Cap1, CapabilityTypeEnum.Cap2>(
  cap1Query,
  cap2Query
);

const result4 = getCaps<
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2
>(cap1Query, cap2Query, cap1Query, cap2Query);

const result5 = getCaps<
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap3,
  CapabilityTypeEnum.Cap1,
  CapabilityTypeEnum.Cap2,
  CapabilityTypeEnum.Cap3
>(
  cap1Query,
  cap2Query,
  cap1Query,
  cap2Query,
  cap3Query,
  cap1Query,
  cap2Query,
  cap3Query
);

const result1 = getCap<CapabilityTypeEnum.Cap1>(cap1Query);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//2 вариат
function getCapsics<T>(
  caps: { name: string; context: CapabilityQueryContext }[]
): T {
  return ([] as any) as T;
}

const [cap1, cap2, cap3] = getCapsics<
  [Cap1Capability, Cap2Capability, Cap3Capability]
>(cap3Query);
