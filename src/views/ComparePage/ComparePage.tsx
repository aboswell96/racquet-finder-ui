import { useState } from "react";
import { RacquetCard } from "./RacquetCard";
import { SelectRacquetDropDown } from "../../components/SelectRacquetDropDown";
import { type RacquetModel } from "../../utils/utils";
import { CompareStats } from "./CompareSpecs";
import { mockRacquets } from "../../utils/mockRacquets";

export const ComparePage = () => {
  const [racquet1, setRacquet1] = useState<RacquetModel>(mockRacquets[0]);
  const [racquet2, setRacquet2] = useState<RacquetModel>(mockRacquets[1]);

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
          <RacquetCard racquet={racquet1} />
        </div>
        <div className="flex flex-col justify-center">
          <CompareStats
            specs_1={racquet1.versions[0].specs || []}
            specs_2={racquet2.versions[0].specs || []}
          />
        </div>
        <div className="flex flex-col gap-5">
          <SelectRacquetDropDown
            items={mockRacquets}
            currentItem={racquet2}
            onSelect={setRacquet2}
          />
          <RacquetCard racquet={racquet2} />
        </div>
      </div>
    </div>
  );
};
