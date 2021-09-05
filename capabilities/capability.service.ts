import {
  CapabilitiesQueryRegistry,
  CapabilitiesResultRegistry
} from './registry/registry';

// метод получения капабилити
export function getCaps<
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
export function getCaps<
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
export function getCaps<
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
export function getCaps<
  A1 extends keyof CapabilitiesQueryRegistry,
  A2 extends keyof CapabilitiesQueryRegistry
>(
  cap1: CapabilitiesQueryRegistry[A1],
  cap2: CapabilitiesQueryRegistry[A2]
): [CapabilitiesResultRegistry[A1], CapabilitiesResultRegistry[A2]];
export function getCaps<A1 extends keyof CapabilitiesQueryRegistry>(
  cap1: CapabilitiesQueryRegistry[A1]
): CapabilitiesResultRegistry[A1] {
  return ([] as any) as CapabilitiesResultRegistry[A1];
}

export function getCap<A1 extends keyof CapabilitiesQueryRegistry>(
  cap1: CapabilitiesQueryRegistry[A1]
): CapabilitiesResultRegistry[A1] {
  return ([] as any) as CapabilitiesResultRegistry[A1];
}
