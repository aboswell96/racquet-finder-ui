import { getSpecComparisonDescription, STAT_PRIORITY } from "../../utils/utils";
import type { Spec } from "./RacquetCard";

export type CompareSpecsProps = {
  specs_1: Spec[];
  specs_2: Spec[];
};

export const CompareStats = ({ specs_1, specs_2 }: CompareSpecsProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow">
      {STAT_PRIORITY.map((statKey) => {
        const spec1 = specs_1.find((spec) => spec.key === statKey);
        const spec2 = specs_2.find((spec) => spec.key === statKey);
        if (!spec1 && !spec2) return null;
        return (
          <div
            key={statKey}
            className="grid min-h-12 grid-cols-[1fr_140px_1fr] items-center gap-4"
          >
            {spec1 && (
              <div className="grid min-h-12 grid-cols-[120px_1fr] items-center gap-3">
                <div className="truncate text-sm leading-tight whitespace-nowrap text-gray-600">
                  {spec1.label}
                </div>
                <div className="flex items-baseline justify-end gap-1 leading-tight tabular-nums">
                  <div className="text-base font-semibold whitespace-nowrap">
                    {spec1.value}
                  </div>
                  {spec1.unit && (
                    <div className="text-base whitespace-nowrap text-gray-500">
                      {spec1.unit}
                    </div>
                  )}
                </div>
              </div>
            )}
            {spec1 && spec2 && (
              <div className="flex h-full items-center justify-center text-sm leading-tight text-gray-500">
                {getSpecComparisonDescription(spec1, spec2)}
              </div>
            )}
            {spec2 && (
              <div className="grid min-h-12 grid-cols-[1fr_120px] items-center gap-3">
                <div className="flex items-baseline justify-start gap-1 leading-tight tabular-nums">
                  <div className="text-base font-semibold whitespace-nowrap">
                    {spec2.value}
                  </div>
                  {spec2.unit && (
                    <div className="text-base whitespace-nowrap text-gray-500">
                      {spec2.unit}
                    </div>
                  )}
                </div>
                <div className="truncate text-right text-sm leading-tight whitespace-nowrap text-gray-600">
                  {spec2.label}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
