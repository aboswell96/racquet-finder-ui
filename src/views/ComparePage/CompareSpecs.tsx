import { STAT_PRIORITY } from "../../utils";
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
        if (!spec1 && !spec2) return;
        return (
          <div
            key={statKey}
            className="grid min-h-12 grid-cols-3 items-center gap-4"
          >
            {spec1 && (
              <div className="flex justify-between">
                <div>{spec1.label}</div>
                <div>{spec1.value}</div>
              </div>
            )}
            {spec1 && spec2 && (
              <div className="flex justify-center text-gray-400">←→</div>
            )}
            {spec2 && (
              <div className="flex justify-between">
                <div>{spec2.value}</div>
                <div>{spec2.label}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
  //   return (
  //     <div className="grid min-h-12 grid-cols-3 items-center gap-4">
  //       <div>
  //         {specs_1.map((spec, index) => (
  //           <div key={index} className="p-2 text-right">
  //             {spec.value}
  //           </div>
  //         ))}
  //       </div>
  //       <div className="flex justify-center text-gray-400">←→</div>
  //       <div>
  //         {specs_2.map((spec, index) => (
  //           <div key={index} className="p-2 text-left">
  //             {spec.value}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
};
