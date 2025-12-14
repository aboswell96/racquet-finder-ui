import { useState } from "react";
import type { RacquetModel } from "../utils/utils";

export type SelectRacquetDropDownProps = {
  items: RacquetModel[];
  currentItem: RacquetModel;
  onSelect: (item: RacquetModel) => void;
};

export const SelectRacquetDropDown = ({
  items,
  currentItem,
  onSelect,
}: SelectRacquetDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {[currentItem.brand, currentItem.name].join(" ")}
      </div>
      <div className="absolute mt-2 bg-white shadow-lg">
        {isOpen &&
          items
            .sort((a, b) =>
              [a.brand, a.name]
                .join(" ")
                .localeCompare([b.brand, b.name].join(" ")),
            )
            .map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  onSelect(item);
                }}
                className={`flex cursor-pointer items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50 ${
                  item.modelId === currentItem.modelId
                    ? "bg-blue-50 text-blue-600"
                    : ""
                }`}
              >
                {[item.brand, item.name].join(" ")}
                {item.modelId === currentItem.modelId && (
                  <svg
                    className="h-4 w-4 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M7.5 13.5L4 10l1.4-1.4L7.5 10.7 14.6 3.6 16 5z" />
                  </svg>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};
