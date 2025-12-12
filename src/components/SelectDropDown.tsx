import { useState } from "react";

export type SelectDropDownProps<T extends { name: string; id: string }> = {
  items: T[];
  currentItem: T;
  onSelect: (item: T) => void;
};

export const SelectDropDown = <T extends { name: string; id: string }>({
  items,
  currentItem,
  onSelect,
}: SelectDropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {currentItem.name}
      </div>
      <div className="absolute mt-2 bg-white shadow-lg">
        {isOpen &&
          items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsOpen(false);
                onSelect(item);
              }}
              className="flex"
            >
              {item.name}
              {item === currentItem && (
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
