import type { Spec } from "../views/ComparePage/RacquetCard";

export type RacquetModel = {
  modelId: string;
  name: string;
  brand: string;
  photoUrl?: string;
  versions: Racquet[];
};

export type Racquet = {
  id: string;
  year: number;
  brand: string;
  specs?: Spec[];
  price: number;
};

export const makeSpec = (
  key: string,
  label: string,
  value: string | number,
  unit: string,
): Spec => ({
  key,
  label,
  value,
  unit,
});

export const STAT_PRIORITY: string[] = [
  "weight",
  "headSize",
  "balance",
  "length",
  "stiffness",
  "stringPattern",
  "beamWidth",
  "price",
  "brand",
];

export function orderSpecs(specs: Spec[]): Spec[] {
  const map = new Map(specs.map((s) => [s.key, s]));
  const ordered: Spec[] = [];

  for (const key of STAT_PRIORITY) {
    if (map.has(key)) {
      ordered.push(map.get(key) as Spec);
      map.delete(key);
    }
  }

  return ordered;
}

export function getSpecComparisonDescription(
  spec_1: Spec,
  spec_2: Spec,
): string {
  if (spec_1.label !== spec_2.label) {
    return "";
  }

  const descriptions: Record<string, { higher: string; lower: string }> = {
    weight: { higher: "heavier", lower: "lighter" },
    headSize: { higher: "larger", lower: "smaller" },
    stiffness: { higher: "stiffer", lower: "more flexible" },
    balance: { higher: "more head heavy", lower: "more head light" },
    length: { higher: "longer", lower: "shorter" },
    stringPattern: { higher: "more spin", lower: "more control" },
  };

  if (["Weight", "Stiffness", "Balance"].includes(spec_1.label)) {
    if (spec_1.value < spec_2.value) {
      return "← " + descriptions[spec_1.key].lower;
    } else if (spec_2.value < spec_1.value) {
      return descriptions[spec_2.key].lower + " →";
    } else {
      return "↔";
    }
  } else {
    if (spec_1.value > spec_2.value) {
      return "← " + descriptions[spec_1.key].higher;
    } else if (spec_1.value < spec_2.value) {
      return descriptions[spec_1.key].higher + " →";
    } else {
      return "↔";
    }
  }
}
