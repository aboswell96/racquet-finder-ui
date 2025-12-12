import type { Racquet, Spec } from "./views/ComparePage/RacquetCard";

const makeSpec = (
  key: string,
  label: string,
  value: string | number,
): Spec => ({
  key,
  label,
  value,
});

export const mockRacquets: Racquet[] = [
  {
    id: "1",
    name: "Pro Staff 97",
    brand: "Wilson",
    specs: [
      makeSpec("headSize", "Head Size", 97),
      makeSpec("weight", "Weight", 310),
      makeSpec("length", "Length", 27),
      makeSpec("balance", "Balance", "32.0 cm"),
      makeSpec("stiffness", "Stiffness", 62),
    ],
    price: 249.99,
  },
  {
    id: "2",
    name: "Pure Drive",
    brand: "Babolat",
    specs: [
      makeSpec("headSize", "Head Size", 100),
      makeSpec("weight", "Weight", 300),
      makeSpec("length", "Length", 27),
      makeSpec("balance", "Balance", "32.5 cm"),
      makeSpec("stiffness", "Stiffness", 71),
    ],
    price: 229.99,
  },
  {
    id: "3",
    name: "Blade 98",
    brand: "Wilson",
    specs: [
      makeSpec("headSize", "Head Size", 98),
      makeSpec("weight", "Weight", 305),
      makeSpec("length", "Length", 27),
      makeSpec("balance", "Balance", "31.5 cm"),
      makeSpec("stiffness", "Stiffness", 65),
    ],
    price: 239.99,
  },
  {
    id: "4",
    name: "Clash 100",
    brand: "Head",
    specs: [
      makeSpec("headSize", "Head Size", 100),
      makeSpec("weight", "Weight", 295),
      makeSpec("length", "Length", 27),
      makeSpec("balance", "Balance", "33.0 cm"),
      makeSpec("stiffness", "Stiffness", 55),
    ],
    price: 219.99,
  },
  {
    id: "5",
    name: "Ezone 100",
    brand: "Yonex",
    specs: [
      makeSpec("headSize", "Head Size", 100),
      makeSpec("weight", "Weight", 300),
      makeSpec("length", "Length", 27),
      makeSpec("balance", "Balance", "32.0 cm"),
      makeSpec("stiffness", "Stiffness", 68),
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
