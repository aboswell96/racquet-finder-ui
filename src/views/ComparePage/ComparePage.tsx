import { useState } from "react";
import { type Racquet, RacquetCard } from "./RacquetCard";
import { SelectRacquetDropDown } from "../../components/SelectRacquetDropDown";
import { mockRacquets } from "../../utils";
import { CompareStats } from "./CompareSpecs";

export const ComparePage = () => {
  const [racquet1, setRacquet1] = useState<Racquet>(mockRacquets[0]);
  const [racquet2, setRacquet2] = useState<Racquet>(mockRacquets[1]);

  return (
    <div className="">
      Racquet Comparison
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-5">
          <SelectRacquetDropDown
            items={mockRacquets}
            currentItem={racquet1}
            onSelect={setRacquet1}
          />
          <RacquetCard racquet={racquet1} displayDirection="LTR" />
        </div>
        <div className="flex flex-col justify-center">
          <CompareStats
            specs_1={racquet1.specs || []}
            specs_2={racquet2.specs || []}
          />
        </div>
        <div className="flex flex-col gap-5">
          <SelectRacquetDropDown
            items={mockRacquets}
            currentItem={racquet2}
            onSelect={setRacquet2}
          />
          <RacquetCard racquet={racquet2} displayDirection="RTL" />
        </div>
      </div>
    </div>
  );
};
