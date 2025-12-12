import mockPhoto from "../../assets/stockPhoto.jpg";

export type Racquet = {
  id: string;
  name: string;
  specs?: Spec[];
  brand: string;
  price: number;
};

export type Spec = {
  label: string;
  key: string;
  value: string | number;
};

export type RacquetCardProps = {
  racquet: Racquet;
  displayDirection: "LTR" | "RTL";
};

export const RacquetCard = ({ racquet }: RacquetCardProps) => {
  return (
    <div className="flex min-h-[500px] min-w-[320px] flex-col gap-10 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow">
      {racquet.name}
      <img
        src={mockPhoto}
        alt={racquet.name}
        className="h-100 w-full rounded-md object-cover"
      />
    </div>
  );
};
