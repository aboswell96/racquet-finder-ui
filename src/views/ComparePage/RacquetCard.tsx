import mockPhoto from "../../assets/stockPhoto.jpg";
import type { RacquetModel } from "../../utils/utils";

export type Spec = {
  label: string;
  key: string;
  value: string | number;
  unit: string;
};

export type RacquetCardProps = {
  racquet: RacquetModel;
};

export const RacquetCard = ({ racquet }: RacquetCardProps) => {
  return (
    <div className="flex min-h-[500px] min-w-[250px] flex-col gap-10 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow">
      {[racquet.brand, racquet.name].join(" ")}
      <img
        src={mockPhoto}
        alt={racquet.name}
        className="h-48 w-full rounded-md object-cover"
      />
    </div>
  );
};
