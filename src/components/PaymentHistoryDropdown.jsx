import React, { useState } from "react";

function DropDownSvg() {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.58803 0.536399C7.01662 0.536392 7.25374 1.01453 6.98413 1.3351L3.9648 4.92505C3.76086 5.16752 3.37656 5.16752 3.17262 4.92505L0.153409 1.33518C-0.116197 1.01462 0.120911 0.536492 0.54949 0.536486L6.58803 0.536399Z"
        fill="#1F2937"
      />
    </svg>
  );
}

const PaymentHistoryDropDown = () => {
  const options = ["Year to-date", "6 months", "6 weeks"];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className=" flex flex-col items-start gap-3  h-[154px] w-[102px]">
      <div className=" h-[34px] shrink-0">
        <button type="button" className="" onClick={toggleDropdown}>
          <div className="flex items-center py-3 gap-2">
            <span className="text-gray-400 text-sm font-weight510">
              {selectedOption}
            </span>

            <DropDownSvg />
          </div>
        </button>
      </div>

      {showDropdown && (
        <div className="flex flex-col items-center py-1.5 rounded bg-grey-100 border border-solid border-gray-200 ">
          {options.map((option, index) => (
            <button
              key={index}
              className={`flex w-[102px] py-3 px-0 justify-center items-center rounded ${
                option === selectedOption ? "bg-gray-200" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <span className="text-xs text-gray-800 font-normal">
                {option}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistoryDropDown;
