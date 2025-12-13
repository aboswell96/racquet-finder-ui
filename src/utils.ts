import type { Racquet, Spec } from "./views/ComparePage/RacquetCard";

const makeSpec = (
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

export const mockRacquets: Racquet[] = [
  {
    id: "1",
    name: "Pro Staff 97",
    brand: "Wilson",
    specs: [
      makeSpec("headSize", "Head Size", 97, "in²"),
      makeSpec("weight", "Weight", 310, "g"),
      makeSpec("length", "Length", 27, "in"),
      makeSpec("balance", "Balance", 32.0, "cm"),
      makeSpec("stiffness", "Stiffness", 62, "RA"),
    ],
    price: 249.99,
  },
  {
    id: "2",
    name: "Pure Drive",
    brand: "Babolat",
    specs: [
      makeSpec("headSize", "Head Size", 100, "in²"),
      makeSpec("weight", "Weight", 300, "g"),
      makeSpec("length", "Length", 27, "in"),
      makeSpec("balance", "Balance", 32.5, "cm"),
      makeSpec("stiffness", "Stiffness", 71, "RA"),
    ],
    price: 229.99,
  },
  {
    id: "3",
    name: "Blade 98",
    brand: "Wilson",
    specs: [
      makeSpec("headSize", "Head Size", 98, "in²"),
      makeSpec("weight", "Weight", 305, "g"),
      makeSpec("length", "Length", 27, "in"),
      makeSpec("balance", "Balance", 31.5, "cm"),
      makeSpec("stiffness", "Stiffness", 65, "RA"),
    ],
    price: 239.99,
  },
  {
    id: "4",
    name: "Clash 100",
    brand: "Head",
    specs: [
      makeSpec("headSize", "Head Size", 100, "in²"),
      makeSpec("weight", "Weight", 295, "g"),
      makeSpec("length", "Length", 27, "in"),
      makeSpec("balance", "Balance", 33.0, "cm"),
      makeSpec("stiffness", "Stiffness", 55, "RA"),
    ],
    price: 219.99,
  },
  {
    id: "5",
    name: "Ezone 100",
    brand: "Yonex",
    specs: [
      makeSpec("headSize", "Head Size", 100, "in²"),
      makeSpec("weight", "Weight", 300, "g"),
      makeSpec("length", "Length", 27, "in"),
      makeSpec("balance", "Balance", 32.0, "cm"),
      makeSpec("stiffness", "Stiffness", 68, "RA"),
    ],
    price: 249.99,
  },
];

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
