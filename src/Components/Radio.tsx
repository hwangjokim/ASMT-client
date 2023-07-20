import { useState } from 'react';

export type Option = "lowPrice" | "highPrice" | "distance";

type Props = {
  setSortMethod: (option: Option) => void;
}

const RadioComponent = ({ setSortMethod }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option>('lowPrice');

  const handleOrderChange = (option: Option) => {
    setSortMethod(option);
    setSelectedOption(option);
  };

  return (
    <li>
      <div>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value="lowPrice"
            checked={selectedOption === "lowPrice"}
            onChange={() => handleOrderChange("lowPrice")}
          />
          최저가순
        </label>

        <label>
          <input
            type="radio"
            name="sortMethod"
            value="highPrice"
            checked={selectedOption === "highPrice"}
            onChange={() => handleOrderChange("highPrice")}
          />
          최고가순
        </label>

        <label>
          <input
            type="radio"
            name="sortMethod"
            value="distance"
            checked={selectedOption === "distance"}
            onChange={() => handleOrderChange("distance")}
          />
          거리순
        </label>
      </div>
    </li>
  );
};

export default RadioComponent;